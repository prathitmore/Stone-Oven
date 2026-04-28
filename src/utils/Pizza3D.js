import * as THREE from 'three';

/**
 * Creates a truly 3D pizza model with physical micro-geometry.
 * Improved lighting and material parameters for visibility.
 */
function createPremiumPizza(imageUrl, scene) {
    const group = new THREE.Group();
    const textureLoader = new THREE.TextureLoader();

    // Load main texture
    const topTex = textureLoader.load(imageUrl);
    topTex.colorSpace = THREE.SRGBColorSpace;
    topTex.anisotropy = 16;

    // 1. Procedural Displacement Map (The 'Cheese/Topping Pop')
    const dispCanvas = document.createElement('canvas');
    dispCanvas.width = 256; dispCanvas.height = 256;
    const dispCtx = dispCanvas.getContext('2d');
    dispCtx.fillStyle = 'black';
    dispCtx.fillRect(0,0,256,256);
    
    // Add random bumps for toppings
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * 256;
        const y = Math.random() * 256;
        const r = 10 + Math.random() * 25;
        const g = dispCtx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, 'rgba(255,255,255,1)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        dispCtx.fillStyle = g;
        dispCtx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    const dispTex = new THREE.CanvasTexture(dispCanvas);

    // 2. High-Poly Base Geometry
    const radius = 2.2;
    const thickness = 0.2;
    const segments = 128; 

    const baseGeo = new THREE.CircleGeometry(radius - 0.05, segments);
    const baseMat = new THREE.MeshStandardMaterial({ 
        map: topTex,
        displacementMap: dispTex,
        displacementScale: 0.15, 
        bumpMap: topTex,
        bumpScale: 0.08,
        roughness: 0.8,
        metalness: 0.0,
        emissive: new THREE.Color(0xd35400),
        emissiveIntensity: 0.05 // Subtle warm bake glow
    });
    
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.rotation.x = -Math.PI / 2;
    baseMesh.position.y = 0.1; // Slightly above base
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    group.add(baseMesh);

    // 3. PHYSICAL TOPPINGS SCATTER
    const scatterGroup = new THREE.Group();
    scatterGroup.position.y = 0.15;
    group.add(scatterGroup);

    // Chunks
    const chunkGeo = new THREE.BoxGeometry(0.15, 0.12, 0.15);
    const chunkMat = new THREE.MeshStandardMaterial({ color: 0xfff5e6, roughness: 0.6 });
    for(let i=0; i<25; i++) {
        const m = new THREE.Mesh(chunkGeo, chunkMat);
        const a = Math.random()*Math.PI*2;
        const d = Math.random()*(radius-0.5);
        m.position.set(Math.cos(a)*d, 0.05, Math.sin(a)*d);
        m.rotation.set(Math.random(), Math.random(), Math.random());
        m.castShadow = true;
        scatterGroup.add(m);
    }

    // Basil (physical leaves)
    const leafGeo = new THREE.PlaneGeometry(0.2, 0.15);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x3d5a1c, side: THREE.DoubleSide, roughness: 1 });
    for(let i=0; i<12; i++) {
        const m = new THREE.Mesh(leafGeo, leafMat);
        const a = Math.random()*Math.PI*2;
        const d = Math.random()*(radius-0.6);
        m.position.set(Math.cos(a)*d, 0.08, Math.sin(a)*d);
        m.rotation.set(-Math.PI/2 + (Math.random()-0.5), Math.random(), Math.random());
        scatterGroup.add(m);
    }

    // 4. Crust (The Ring)
    const crustGeo = new THREE.TorusGeometry(radius - 0.15, 0.18, 24, 64);
    const crustMat = new THREE.MeshStandardMaterial({ 
        color: 0x8a5a2b, 
        roughness: 0.9,
        map: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/terrain/grasslight-big.jpg') // Use a textured fallback for crust feel
    });
    const crustMesh = new THREE.Mesh(crustGeo, crustMat);
    crustMesh.rotation.x = Math.PI / 2;
    crustMesh.position.y = 0.05;
    group.add(crustMesh);

    // 5. Wooden Board Base
    const boardGeo = new THREE.CylinderGeometry(radius + 0.3, radius + 0.3, 0.1, 40);
    const boardMat = new THREE.MeshStandardMaterial({ color: 0x2b1d14, roughness: 0.7 });
    const boardMesh = new THREE.Mesh(boardGeo, boardMat);
    boardMesh.position.y = -0.05;
    boardMesh.receiveShadow = true;
    group.add(boardMesh);

    scene.add(group);
    return group;
}

export class HeroPizza3D {
    constructor(containerId, dishes) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.dishes = dishes.slice(0, 3);
        this.currentIndex = 0;
        this.pizzas = [];
        
        // Ensure we have size
        let w = this.container.offsetWidth || 800;
        let h = this.container.offsetHeight || 600;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 1000);
        this.camera.position.set(0, 5, 10);
        this.camera.lookAt(0, 0, 0);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(w, h);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        
        // Standard lighting for better visibility
        this.container.appendChild(this.renderer.domElement);

        this.setupLighting();
        this.initPizzas();
        this.setupInteraction();
        this.animate();

        window.addEventListener('resize', () => this.onResize());
    }

    onResize() {
        if (!this.container) return;
        const w = this.container.offsetWidth;
        const h = this.container.offsetHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
    }

    setupLighting() {
        // High intensity physical lighting
        this.scene.add(new THREE.AmbientLight(0xffffff, 1.2));

        const sun = new THREE.DirectionalLight(0xffffff, 4.0);
        sun.position.set(10, 20, 10);
        sun.castShadow = true;
        this.scene.add(sun);

        const fill = new THREE.PointLight(0xd35400, 1500, 50);
        fill.position.set(-8, 5, 5);
        this.scene.add(fill);

        this.glow = new THREE.PointLight(0xff7700, 2000, 20);
        this.glow.position.set(0, -5, -2);
        this.scene.add(this.glow);
    }

    initPizzas() {
        this.dishes.forEach((dish, i) => {
            const p = createPremiumPizza(dish.image, this.scene);
            p.scale.set(0.1, 0.1, 0.1); // Start small but not zero
            p.visible = false;
            p.userData.active = false;
            this.pizzas.push(p);
        });
        this.switch(0);
    }

    switch(index) {
        this.currentIndex = index;
        this.pizzas.forEach((p, i) => {
            const isTarget = i === index;
            p.userData.active = isTarget;
            if (isTarget) {
                p.visible = true;
            }
        });
    }

    setupInteraction() {
        this.mouse = { x: 0, y: 0 };
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
            this.mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const t = Date.now() * 0.001;

        this.pizzas.forEach((p) => {
            if (!p.visible) return;

            if (p.userData.active) {
                // Glide to target
                p.scale.x += (1.0 - p.scale.x) * 0.1;
                p.scale.y += (1.0 - p.scale.y) * 0.1;
                p.scale.z += (1.0 - p.scale.z) * 0.1;
                
                p.position.y += (0 - p.position.y) * 0.1;
                p.position.x += (0 - p.position.x) * 0.1;

                // Dynamic Rotation
                const targetRotX = -0.4 + this.mouse.y * 0.4;
                const targetRotY = this.mouse.x * 0.8;
                p.rotation.x += (targetRotX - p.rotation.x) * 0.1;
                p.rotation.y += (targetRotY - p.rotation.y) * 0.1;
            } else {
                p.scale.x *= 0.85; p.scale.y *= 0.85; p.scale.z *= 0.85;
                p.position.x += (-15 - p.position.x) * 0.1;
                if (p.scale.x < 0.05) p.visible = false;
            }
        });

        if (this.glow) this.glow.intensity = 1500 + Math.sin(t * 10) * 1000;
        this.renderer.render(this.scene, this.camera);
    }
}

export class Pizza3D { constructor() {} }
