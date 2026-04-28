import * as THREE from 'three';

/**
 * High-End 3D Engine for Virar Branch
 * Manages a persistent WebGL context with state-based camera paths and volumetric effects.
 */
export class VirarEngine {
    constructor(container) {
        this.container = container;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x070504, 0.05);

        this.camera = new THREE.PerspectiveCamera(45, this.w / this.h, 0.1, 1000);
        this.camera.position.set(0, 0, 20);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
        this.renderer.setSize(this.w, this.h);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.container.appendChild(this.renderer.domElement);

        this.clock = new THREE.Clock();
        this.mouse = new THREE.Vector2();
        this.targetMouse = new THREE.Vector2();
        this.scrollProgress = 0;

        this.initLights();
        this.initObjects();
        this.bindEvents();
        this.animate();
    }

    initLights() {
        this.ambient = new THREE.AmbientLight(0xffffff, 0.05);
        this.scene.add(this.ambient);

        // Core Glowing Node Light
        this.centerLight = new THREE.PointLight(0xff6a00, 20, 50);
        this.centerLight.position.set(0, 0, 5);
        this.scene.add(this.centerLight);

        // Rim/Back lights for atmosphere
        const blueLight = new THREE.PointLight(0x0044ff, 2, 40);
        blueLight.position.set(-15, 10, -10);
        this.scene.add(blueLight);
    }

    initObjects() {
        // 1. The Floating Marker (Location Pin)
        const markerGeo = new THREE.IcosahedronGeometry(1.5, 0);
        const markerMat = new THREE.MeshStandardMaterial({
            color: 0xff6a00,
            emissive: 0xff3c00,
            emissiveIntensity: 5,
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        this.marker = new THREE.Mesh(markerGeo, markerMat);
        this.scene.add(this.marker);

        // Sub-marker (inner glow)
        const coreGeo = new THREE.SphereGeometry(0.5, 32, 32);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.markerCore = new THREE.Mesh(coreGeo, coreMat);
        this.marker.add(this.markerCore);

        // 2. The Oven Tunnel (Entrance)
        const tunnelGeo = new THREE.CylinderGeometry(10, 8, 100, 32, 50, true);
        const tunnelMat = new THREE.MeshStandardMaterial({
            color: 0x222222,
            roughness: 0.9,
            metalness: 0.2,
            side: THREE.BackSide,
            map: this.createNoiseTexture()
        });
        this.tunnel = new THREE.Mesh(tunnelGeo, tunnelMat);
        this.tunnel.rotation.x = Math.PI / 2;
        this.tunnel.position.z = -60;
        this.scene.add(this.tunnel);

        // 3. Floating Ingredients (Ambient Dust/Particles)
        const partGeo = new THREE.BufferGeometry();
        const partCount = 500;
        const posArr = new Float32Array(partCount * 3);
        for(let i=0; i<partCount*3; i++) {
            posArr[i] = (Math.random() - 0.5) * 100;
        }
        partGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
        const partMat = new THREE.PointsMaterial({ color: 0xffb347, size: 0.05, transparent: true, opacity: 0.5 });
        this.particles = new THREE.Points(partGeo, partMat);
        this.scene.add(this.particles);
    }

    createNoiseTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128; canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#222';
        ctx.fillRect(0,0,128,128);
        for(let i=0; i<2000; i++) {
            const x = Math.random()*128;
            const y = Math.random()*128;
            ctx.fillStyle = `rgba(0,0,0,${Math.random()*0.5})`;
            ctx.fillRect(x,y,1,1);
        }
        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(4, 20);
        return tex;
    }

    bindEvents() {
        window.addEventListener('mousemove', (e) => {
            this.targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
            this.targetMouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        window.addEventListener('scroll', () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            this.scrollProgress = window.scrollY / (maxScroll || 1);
        });

        window.addEventListener('resize', () => {
            this.w = window.innerWidth;
            this.h = window.innerHeight;
            this.camera.aspect = this.w / this.h;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.w, this.h);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const time = this.clock.getElapsedTime();

        // Smooth Mouse
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        // --- Camera & State Logic ---
        // State 1: 0.0 - 0.2 (Marker View)
        // State 2: 0.2 - 0.5 (Flying through Tunnel)
        // State 3: 0.5 - 1.0 (Inside Oven Environment)

        if (this.scrollProgress < 0.2) {
            const p = this.scrollProgress / 0.2; // 0 to 1
            this.camera.position.z = 20 - (p * 15);
            this.marker.visible = true;
            this.marker.opacity = 1 - p;
            this.marker.rotation.y = time * 0.5;
            this.marker.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
        } else if (this.scrollProgress < 0.6) {
            const p = (this.scrollProgress - 0.2) / 0.4;
            this.camera.position.z = 5 - (p * 80);
            this.camera.rotation.z = p * Math.PI * 0.5;
            this.marker.visible = false;
        } else {
            const p = (this.scrollProgress - 0.6) / 0.4;
            this.camera.position.y = Math.sin(time * 0.5) * 2;
            this.camera.position.x = Math.cos(time * 0.5) * 2;
            this.camera.lookAt(0, 0, -100);
        }

        // Mouse Parallax
        this.camera.position.x += (this.mouse.x * 2 - this.camera.position.x) * 0.02;
        this.camera.position.y += (-this.mouse.y * 2 - this.camera.position.y) * 0.02;

        // Animate Texture
        if (this.tunnel.material.map) {
            this.tunnel.material.map.offset.y -= 0.01;
        }

        this.particles.rotation.y += 0.001;

        this.renderer.render(this.scene, this.camera);
    }
}
