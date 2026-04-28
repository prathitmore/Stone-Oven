import * as THREE from 'three';

export function renderHero() {
    return `
        <section class="hero-section" style="position: relative; height: 100vh; overflow: hidden; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle at center, #1a0f0a 0%, #000 100%);">
            <canvas id="hero-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: auto;"></canvas>
            
            <!-- Mouse-interactive cinematic lighting overlay -->
            <div id="hero-light" style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle 800px at 50% 50%, rgba(255, 60, 0, 0.08), transparent); pointer-events: none; z-index: 1;"></div>

            <!-- PRO BRANDING: Heritage Badge -->
            <div class="reveal hero-badge-wrap" style="position: absolute; top: 15%; left: 50%; transform: translateX(-50%); z-index: 3; text-align: center; width: 100%;">
                <div class="heritage-badge" style="display: inline-flex; align-items: center; gap: 15px; background: rgba(255,255,255,0.03); padding: 8px 15px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(10px);">
                    <span style="width: 6px; height: 6px; background: #ff3c00; border-radius: 50%; box-shadow: 0 0 10px #ff3c00;"></span>
                    <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.25em; color: rgba(255,255,255,0.5); font-weight: 700;">Maharashtra's Authentic Heritage</span>
                    <span style="width: 6px; height: 6px; background: #ff3c00; border-radius: 50%; box-shadow: 0 0 10px #ff3c00;"></span>
                </div>
            </div>

            <!-- MAIN CONTENT AREA -->
            <div class="hero-content container" style="position: relative; z-index: 2; text-align: center; max-width: 1200px; padding: 2rem; pointer-events: none;">
                <h1 class="hero-title reveal" style="font-family: 'Playfair Display', serif; font-weight: 400; line-height: 0.85; font-size: clamp(5rem, 14vw, 11rem); margin-bottom: 2.5rem; color: #fff; letter-spacing: -0.04em;">
                    BORN FROM <br>
                    <em style="color: #ff3c00; font-style: italic; font-weight: 600; text-shadow: 0 0 60px rgba(255, 60, 0, 0.3);">THE FIRE</em>
                </h1>
                
                <div class="reveal" style="max-width: 750px; margin: 0 auto 4rem;">
                    <p style="font-size: clamp(1.1rem, 2vw, 1.4rem); color: rgba(255,255,255,0.7); font-weight: 300; line-height: 1.6; letter-spacing: 0.02em;">
                        Experience the alchemy of heat and stone. We elevate the craft of baking into a sensory ritual across Maharashtra's finest culinary destinations.
                    </p>
                </div>
                
                <div class="hero-btns reveal" style="display: flex; gap: 2.5rem; justify-content: center; pointer-events: auto; margin-top: 1rem;">
                    <a href="#/menu" class="btn-primary" style="background: #229561; box-shadow: 0 10px 30px rgba(34, 149, 97, 0.3); border: none;">Explore the Menu</a>
                    <a href="#/locations" class="btn-primary" style="background: #a8222a; box-shadow: 0 10px 30px rgba(168, 34, 42, 0.3); border: none;">Our Outlets</a>
                </div>
            </div>

            <!-- PRO ALIGNMENT: Heritage Details (Factual) -->
            <div class="reveal desktop-only" style="position: absolute; bottom: 8%; right: 4%; z-index: 3; pointer-events: none; text-align: right;">
                <div style="border-right: 1px solid #ff3c00; padding-right: 20px;">
                   <div style="color: #ff3c00; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 5px; opacity: 0.6;">Established</div>
                   <div style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #fff;">ESTD<span style="color: #ff3c00; font-size: 1.2rem; margin-left:10px;">2018</span></div>
                   <div style="color: rgba(255,255,255,0.4); font-size: 0.55rem; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px;">Pioneering Maharashtra's Craft</div>
                </div>
            </div>

            <div class="reveal desktop-only" style="position: absolute; bottom: 8%; left: 4%; z-index: 3; pointer-events: none;">
                <div style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 20px;">
                   <div style="color: rgba(255,255,255,0.4); font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 5px;">Presence in</div>
                   <div style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #fff; font-weight: 800; letter-spacing: 0.1em;">5 KEY DESTINATIONS</div>
                   <div style="color: rgba(255,255,255,0.2); font-size: 0.55rem; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px;">Virar • Vasai • Thane • Palghar • Boisar</div>
                </div>
            </div>

            <div class="hero-scroll-indicator" style="position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 15px; opacity: 0.4; z-index: 2;">
                <div style="width: 1px; height: 100px; background: linear-gradient(to bottom, #ff3c00, transparent); animation: pulse-height 2s infinite;"></div>
            </div>
            
            <style>
                @keyframes pulse-height {
                    0%, 100% { transform: scaleY(1); transform-origin: top; opacity: 1; }
                    50% { transform: scaleY(0.4); transform-origin: top; opacity: 0.3; }
                }
                @media (max-width: 768px) {
                    .desktop-only { display: none !important; }
                    .hero-scroll-indicator { display: none !important; }
                    .hero-badge-wrap { top: 14% !important; }
                    .heritage-badge { padding: 5px 10px !important; gap: 8px !important; }
                    .heritage-badge span:nth-child(2) { font-size: 0.5rem !important; letter-spacing: 0.15em !important; }
                }
            </style>
        </section>
    `;
}

export function initHero() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const isMobile = window.innerWidth <= 768;
    const renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true, 
        antialias: !isMobile, // Disable AA on mobile for high FPS
        powerPreference: "high-performance" 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.0 : 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x110400, 0.015);

    const camera = new THREE.PerspectiveCamera(isMobile ? 70 : 50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 40);

    // --- AWARD WINNING LAVA / HEAT FLUID DISPLACEMENT PLANE ---
    const planeRes = isMobile ? 48 : 80; // Optimized for faster boot
    const planeGeo = new THREE.PlaneGeometry(120, 120, planeRes, planeRes); 
    
    // Shader Material for procedural lava displacement and glowing cracks
    const lavaMat = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) }
        },
        wireframe: false,
        vertexShader: `
            uniform float uTime;
            uniform vec2 uMouse;
            varying vec2 vUv;
            varying float vElevation;
            
            // Simplex Noise 3D Helper
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
            float snoise(vec3 v) {
                const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
                const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
                vec3 i  = floor(v + dot(v, C.yyy) );
                vec3 x0 = v - i + dot(i, C.xxx) ;
                vec3 g = step(x0.yzx, x0.xyz);
                vec3 l = 1.0 - g;
                vec3 i1 = min( g.xyz, l.zxy );
                vec3 i2 = max( g.xyz, l.zxy );
                vec3 x1 = x0 - i1 + C.xxx;
                vec3 x2 = x0 - i2 + C.yyy;
                vec3 x3 = x0 - D.yyy;
                i = mod289(i); 
                vec4 p = permute( permute( permute( 
                            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                          + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                float n_ = 0.142857142857;
                vec3  ns = n_ * D.wyz - D.xzx;
                vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
                vec4 x_ = floor(j * ns.z);
                vec4 y_ = floor(j - 7.0 * x_ );
                vec4 x = x_ *ns.x + ns.yyyy;
                vec4 y = y_ *ns.x + ns.yyyy;
                vec4 h = 1.0 - abs(x) - abs(y);
                vec4 b0 = vec4( x.xy, y.xy );
                vec4 b1 = vec4( x.zw, y.zw );
                vec4 s0 = floor(b0)*2.0 + 1.0;
                vec4 s1 = floor(b1)*2.0 + 1.0;
                vec4 sh = -step(h, vec4(0.0));
                vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
                vec3 p0 = vec3(a0.xy,h.x);
                vec3 p1 = vec3(a0.zw,h.y);
                vec3 p2 = vec3(a1.xy,h.z);
                vec3 p3 = vec3(a1.zw,h.w);
                vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                p0 *= norm.x;
                p1 *= norm.y;
                p2 *= norm.z;
                p3 *= norm.w;
                vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                m = m * m;
                return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
            }

            void main() {
                vUv = uv;
                // Complex turbulent noise
                float noise = snoise(vec3(position.x * 0.1, position.y * 0.1, uTime * 0.2));
                float noise2 = snoise(vec3(position.x * 0.3, position.y * 0.3, uTime * 0.5));
                
                // Mouse interaction depression
                float dist = distance(uv, uMouse);
                float mouseRipple = 0.0;
                if(uMouse.x != 0.0) {
                   mouseRipple = sin(dist * 20.0 - uTime * 5.0) * exp(-dist * 5.0) * 2.0;
                }

                // displacement mix
                vElevation = noise * 3.0 + noise2 * 0.8 + mouseRipple;
                
                vec3 newPos = position;
                newPos.z += vElevation;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            varying float vElevation;
            varying vec2 vUv;
            
            void main() {
                // Color palette based on depth of elevation (lava vs cooled rock)
                vec3 rockColor = vec3(0.05, 0.03, 0.02);
                vec3 coolMagma = vec3(0.6, 0.1, 0.0);
                vec3 hotMagma = vec3(1.0, 0.4, 0.0);
                vec3 coreHeat = vec3(1.0, 0.9, 0.4);

                // Map elevation back to 0.0 -> 1.0 range based on our scale
                float normalizedElevation = clamp((vElevation + 2.0) / 4.0, 0.0, 1.0);
                
                vec3 finalColor = mix(rockColor, coolMagma, smoothstep(0.0, 0.4, normalizedElevation));
                finalColor = mix(finalColor, hotMagma, smoothstep(0.4, 0.7, normalizedElevation));
                finalColor = mix(finalColor, coreHeat, smoothstep(0.7, 1.0, normalizedElevation));
                
                // Add soft vignette around the edges
                float dist = distance(vUv, vec2(0.5));
                finalColor *= smoothstep(0.5, 0.2, dist);

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `,
        transparent: true
    });

    const lavaPlane = new THREE.Mesh(planeGeo, lavaMat);
    lavaPlane.rotation.x = -Math.PI / 2 + 0.2; // Lie nearly flat, tilt slightly to camera
    lavaPlane.position.y = -5;
    lavaPlane.position.z = -20;
    scene.add(lavaPlane);


    // --- REALISTIC ASH/EMBER PARTICLES ---
    const particleCount = isMobile ? 150 : 600; // Drastic reduction for mobile performance
    const ashGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);
    const lifeArray = new Float32Array(particleCount);
    
    for(let i = 0; i < particleCount; i++) {
        posArray[i*3] = (Math.random() - 0.5) * 80;
        posArray[i*3+1] = (Math.random() - 0.5) * 20;
        posArray[i*3+2] = (Math.random() - 0.5) * 60 - 10;
        scaleArray[i] = Math.random() * 0.8 + 0.2;
        lifeArray[i] = Math.random() * 100.0;
    }

    ashGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    ashGeo.setAttribute('aScale', new THREE.BufferAttribute(scaleArray, 1));
    ashGeo.setAttribute('aLife', new THREE.BufferAttribute(lifeArray, 1));

    // Abstract Bokeh Spark Shader
    const ashMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
            uTime: { value: 0 }
        },
        vertexShader: `
            attribute float aScale;
            attribute float aLife;
            uniform float uTime;
            varying float vAlpha;
            
            void main() {
                vec3 pos = position;
                // Move wildly like heat thermals
                pos.y += mod((uTime * 3.0 + aLife) * aScale, 40.0) - 20.0;
                pos.x += sin(uTime * 1.5 + pos.y * 0.1 + aLife) * 3.0 * aScale;
                pos.z += cos(uTime * 1.2 + pos.x * 0.1 + aLife) * 3.0 * aScale;
                
                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                
                // Massive size variation imitating extreme Depth of Field
                gl_PointSize = (25.0 * aScale) * (30.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
                
                vAlpha = 0.3 + 0.7 * sin(uTime * 4.0 + aLife);
            }
        `,
        fragmentShader: `
            varying float vAlpha;
            void main() {
                float dist = distance(gl_PointCoord, vec2(0.5));
                if (dist > 0.5) discard;
                
                // Hot soft bokeh
                vec3 color = mix(vec3(1.0, 0.2, 0.0), vec3(1.0, 0.8, 0.3), 1.0 - dist * 2.0);
                float a = (0.5 - dist) * 2.0 * vAlpha * 0.8;
                
                gl_FragColor = vec4(color, a);
            }
        `
    });

    const ashes = new THREE.Points(ashGeo, ashMat);
    scene.add(ashes);

    // --- MOUSE TRACKING / PARALLAX ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let uvMouseX = 0;
    let uvMouseY = 0;
    
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMove = (x, y) => {
        mouseX = (x - windowHalfX) * 0.002;
        mouseY = (y - windowHalfY) * 0.002;
        
        uvMouseX = x / window.innerWidth;
        uvMouseY = 1.0 - (y / window.innerHeight);

        const light = document.getElementById('hero-light');
        if(light) {
            light.style.background = `radial-gradient(circle 800px at ${x}px ${y}px, rgba(255, 60, 0, 0.06), transparent)`;
        }
    };

    document.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
    
    // Mobile Touch Interaction for Hero 3D
    document.addEventListener('touchstart', (e) => {
        if(e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if(e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        // Parallax
        targetX = mouseX * 2;
        targetY = mouseY * 2;
        camera.position.x += (targetX - camera.position.x) * 0.02;
        camera.position.y += (10 + targetY - camera.position.y) * 0.02;
        camera.lookAt(0, 5, -20);

        // Update shaders
        lavaMat.uniforms.uTime.value = time;
        // Smoothly interpolate shader mouse pos for fluid ripples
        lavaMat.uniforms.uMouse.value.x += (uvMouseX - lavaMat.uniforms.uMouse.value.x) * 0.05;
        lavaMat.uniforms.uMouse.value.y += (uvMouseY - lavaMat.uniforms.uMouse.value.y) * 0.05;
        
        ashMat.uniforms.uTime.value = time;

        renderer.render(scene, camera);

        // Signal that the first frame is ready
        if (!window.hero3DReady) {
            window.hero3DReady = true;
        }
    }

    animate();

    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.removeEventListener('resize', window._heroResizeHandler);
    window._heroResizeHandler = onResize;
    window.addEventListener('resize', onResize);
}
