import * as THREE from 'three';

export function initMenu3D(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const parent = canvas.parentElement;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    
    // Set size based on parent container, not window
    const rect = parent.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // limit pixel ratio for performance

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000);
    camera.position.z = 30;

    // A large plane to cover the section
    const geometry = new THREE.PlaneGeometry(rect.width * 0.15, rect.height * 0.15, 32, 32);
    
    // Custom shader for warm ember/magma flow
    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(0xff4d00) } // warm orange/red
        },
        vertexShader: `
            uniform float uTime;
            varying vec2 vUv;
            varying float vElevation;

            // Simple 2D Noise
            float random (in vec2 st) {
                return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }
            float noise (in vec2 st) {
                vec2 i = floor(st);
                vec2 f = fract(st);
                float a = random(i);
                float b = random(i + vec2(1.0, 0.0));
                float c = random(i + vec2(0.0, 1.0));
                float d = random(i + vec2(1.0, 1.0));
                vec2 u = f*f*(3.0-2.0*f);
                return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
            }

            void main() {
                vUv = uv;
                // create slow flowing organic wave
                float elevation = noise(uv * 3.0 + uTime * 0.2) * 2.0;
                vElevation = elevation;
                vec3 newPos = position;
                newPos.z += elevation * 1.5;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 uColor;
            varying vec2 vUv;
            varying float vElevation;

            void main() {
                // soft glowing valleys and peaks
                float intensity = smoothstep(0.0, 2.0, vElevation);
                vec3 finalColor = mix(uColor * 0.2, uColor, intensity);
                
                // fade out at edges
                float dist = distance(vUv, vec2(0.5));
                float alpha = smoothstep(0.5, 0.2, dist);
                
                gl_FragColor = vec4(finalColor, alpha * (0.3 + intensity * 0.2));
            }
        `,
        transparent: true,
        side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.2;
    scene.add(mesh);

    // Resize observer to keep canvas perfectly fit
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    });
    resizeObserver.observe(parent);

    // Animation Loop
    let animationId;
    function animate(time) {
        material.uniforms.uTime.value = time * 0.001;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
    }

    animate(0);

    // Cleanup function if needed later
    return () => {
        cancelAnimationFrame(animationId);
        resizeObserver.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
    };
}
