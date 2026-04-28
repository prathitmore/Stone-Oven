import{W as L,A as B,S as Y,F as D,P as H,a as N,b as R,V as O,M as $,B as F,c as k,d as _,e as X,C as q,o as W}from"./three.module-BeHy_9ue.js";import{i as j}from"./tilt-fQ6J8_vA.js";function U(){return`
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
    `}function V(){const f=document.getElementById("hero-canvas");if(!f)return;const g=window.innerWidth<=768,v=new L({canvas:f,alpha:!0,antialias:!g,powerPreference:"high-performance"});v.setSize(window.innerWidth,window.innerHeight),v.setPixelRatio(Math.min(window.devicePixelRatio,g?1:1.5)),v.toneMapping=B,v.toneMappingExposure=1;const M=new Y;M.fog=new D(1115136,.015);const h=new H(g?70:50,window.innerWidth/window.innerHeight,.1,1e3);h.position.set(0,10,40);const w=g?48:80,t=new N(120,120,w,w),i=new R({uniforms:{uTime:{value:0},uMouse:{value:new O(0,0)}},wireframe:!1,vertexShader:`
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
        `,fragmentShader:`
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
        `,transparent:!0}),e=new $(t,i);e.rotation.x=-Math.PI/2+.2,e.position.y=-5,e.position.z=-20,M.add(e);const r=g?150:600,n=new F,m=new Float32Array(r*3),y=new Float32Array(r),l=new Float32Array(r);for(let o=0;o<r;o++)m[o*3]=(Math.random()-.5)*80,m[o*3+1]=(Math.random()-.5)*20,m[o*3+2]=(Math.random()-.5)*60-10,y[o]=Math.random()*.8+.2,l[o]=Math.random()*100;n.setAttribute("position",new k(m,3)),n.setAttribute("aScale",new k(y,1)),n.setAttribute("aLife",new k(l,1));const c=new R({transparent:!0,depthWrite:!1,blending:_,uniforms:{uTime:{value:0}},vertexShader:`
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
        `,fragmentShader:`
            varying float vAlpha;
            void main() {
                float dist = distance(gl_PointCoord, vec2(0.5));
                if (dist > 0.5) discard;
                
                // Hot soft bokeh
                vec3 color = mix(vec3(1.0, 0.2, 0.0), vec3(1.0, 0.8, 0.3), 1.0 - dist * 2.0);
                float a = (0.5 - dist) * 2.0 * vAlpha * 0.8;
                
                gl_FragColor = vec4(color, a);
            }
        `}),x=new X(n,c);M.add(x);let b=0,z=0,E=0,S=0,T=0,A=0;const a=window.innerWidth/2,d=window.innerHeight/2,s=(o,C)=>{b=(o-a)*.002,z=(C-d)*.002,T=o/window.innerWidth,A=1-C/window.innerHeight;const P=document.getElementById("hero-light");P&&(P.style.background=`radial-gradient(circle 800px at ${o}px ${C}px, rgba(255, 60, 0, 0.06), transparent)`)};document.addEventListener("mousemove",o=>s(o.clientX,o.clientY)),document.addEventListener("touchstart",o=>{o.touches.length>0&&s(o.touches[0].clientX,o.touches[0].clientY)},{passive:!0}),document.addEventListener("touchmove",o=>{o.touches.length>0&&s(o.touches[0].clientX,o.touches[0].clientY)},{passive:!0});const p=new q;function u(){requestAnimationFrame(u);const o=p.getElapsedTime();E=b*2,S=z*2,h.position.x+=(E-h.position.x)*.02,h.position.y+=(10+S-h.position.y)*.02,h.lookAt(0,5,-20),i.uniforms.uTime.value=o,i.uniforms.uMouse.value.x+=(T-i.uniforms.uMouse.value.x)*.05,i.uniforms.uMouse.value.y+=(A-i.uniforms.uMouse.value.y)*.05,c.uniforms.uTime.value=o,v.render(M,h),window.hero3DReady||(window.hero3DReady=!0)}u();const I=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight)};window.removeEventListener("resize",window._heroResizeHandler),window._heroResizeHandler=I,window.addEventListener("resize",I)}const G=[{id:"dish-1",name:"Butter Chicken Pizza",description:"Tender tandoori chicken in rich makhani sauce on a stone-fired base.",image:"/Stone-Oven/masterpiece_pizza_1.png"},{id:"dish-2",name:"Mexican Paneer Pizza",description:"Spicy paneer chunks, jalapeños, and bell peppers.",image:"/Stone-Oven/masterpiece_pizza_2.png"},{id:"dish-3",name:"BBQ Chicken Pizza",description:"Smoky BBQ sauce reduction, soft paneer chunks.",image:"/Stone-Oven/masterpiece_pizza_3.png"}];function Q(){return`
        <div class="home-page">
            ${U()}

            <!-- SECTION: DYNAMIC MARQUEE -->
            <div class="marquee-container" style="padding: 1.5rem 0; background: #ff3c00; overflow: hidden; white-space: nowrap; margin-top: -2px; position: relative; z-index: 10;">
                <div class="marquee-text" style="display: inline-block; font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.2rem; text-transform: uppercase; color: #000; letter-spacing: 0.2em; animation: scroll-left 25s linear infinite;">
                    <span>AUTHENTIC STONE-BAKED CRAFT &nbsp; // &nbsp; ITALIAN, MEXICAN & CHINESE CUISINE &nbsp; // &nbsp; MAHARASHTRA'S FINEST &nbsp; // &nbsp; BORN FROM FIRE &nbsp; // &nbsp; </span>
                    <span>AUTHENTIC STONE-BAKED CRAFT &nbsp; // &nbsp; ITALIAN, MEXICAN & CHINESE CUISINE &nbsp; // &nbsp; MAHARASHTRA'S FINEST &nbsp; // &nbsp; BORN FROM FIRE &nbsp; // &nbsp; </span>
                </div>
            </div>

            <!-- SECTION: THE HERITAGE (Factual Branding) -->
            <section class="heritage-section reveal" style="padding: 12vw 5%; background: #080808; display: grid; grid-template-columns: 1fr 1fr; gap: 8vw; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.03);">
                <div id="heritage-img-wrap" style="position: relative; perspective: 1200px;">
                    <div id="heritage-card-3d" style="position: relative; border-radius: 4px; overflow: visible; transform-style: preserve-3d; animation: float3d 6s ease-in-out infinite; transition: transform 0.1s ease;">
                        <img src="virar_drink.jpg" style="width: 100%; height: 60vh; object-fit: cover; border-radius: 4px; display: block; filter: brightness(0.85) contrast(1.1);" alt="Stone Oven Virar Outlet Drink">
                        <!-- Cinematic color grade overlay -->
                        <div style="position: absolute; inset: 0; border-radius: 4px; background: linear-gradient(135deg, rgba(255,60,0,0.12) 0%, transparent 50%, rgba(0,0,0,0.4) 100%); pointer-events: none;"></div>
                        <!-- Shimmer scan line -->
                        <div class="heritage-shimmer" style="position: absolute; inset: 0; border-radius: 4px; overflow: hidden; pointer-events: none;">
                            <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%); animation: shimmer-scan 4s ease-in-out infinite;"></div>
                        </div>
                        <!-- Badge -->
                        <div style="position: absolute; top: 1.5rem; left: 1.5rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255,60,0,0.4); padding: 0.4rem 1rem; border-radius: 2px;">
                            <span style="color: #ff3c00; font-size: 0.6rem; font-weight: 800; letter-spacing: 0.3em; text-transform: uppercase;">Virar Outlet</span>
                        </div>
                    </div>
                    <!-- Accent corners -->
                    <div style="position: absolute; top: -12px; right: -12px; width: 80px; height: 80px; border-top: 2px solid #ff3c00; border-right: 2px solid #ff3c00; opacity: 0.6; border-radius: 0 4px 0 0; z-index: 2; pointer-events:none;"></div>
                    <div style="position: absolute; bottom: -12px; left: -12px; width: 80px; height: 80px; border-bottom: 2px solid #ff3c00; border-left: 2px solid #ff3c00; opacity: 0.6; border-radius: 0 0 0 4px; z-index: 2; pointer-events:none;"></div>
                    <!-- Glow shadow -->
                    <div style="position: absolute; inset: 0; border-radius: 4px; box-shadow: 0 30px 80px rgba(255,60,0,0.2), 0 0 0 1px rgba(255,255,255,0.04); pointer-events: none;"></div>
                </div>
                <style>
                    @keyframes float3d {
                        0%, 100% { transform: rotateX(2deg) rotateY(-3deg) translateY(0px); }
                        33% { transform: rotateX(-1deg) rotateY(3deg) translateY(-12px); }
                        66% { transform: rotateX(3deg) rotateY(1deg) translateY(-6px); }
                    }
                    @keyframes shimmer-scan {
                        0% { transform: translateX(-100%) translateY(-100%); }
                        100% { transform: translateX(100%) translateY(100%); }
                    }
                </style>
                <div class="heritage-content">
                    <div style="color: #ff3c00; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.4em; border-left: 2px solid #ff3c00; padding-left: 20px; margin-bottom: 2rem; font-weight: 800;">Our Regional Legacy</div>
                    <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(3rem, 6vw, 6rem); line-height: 1.1; margin-bottom: 2.5rem; color: #fff;">Premium Dining across <br><em style="font-style: italic; color: #ff3c00;">Maharashtra</em></h2>
                    <p style="font-size: 1.15rem; color: rgba(255,255,255,0.6); line-height: 1.8; margin-bottom: 3rem; font-weight: 300;">
                        Stone Oven began with a simple vision: to bring world-class stone-baked flavors to Maharashtra's most vibrant hubs. From the heart of Palghar to the bustling settings of Virar, Vasai, Thane, and Boisar, we celebrate the authentic warmth and character of traditional oven baking across every destination.
                    </p>
                    <div style="display: flex; gap: 40px;">
                        <div>
                            <div style="color: #fff; font-size: 1.5rem; font-family: 'Playfair Display', serif;">4+ Cuisines</div>
                            <div style="font-size: 0.6rem; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px;">Diverse Menu</div>
                        </div>
                        <div>
                            <div style="color: #fff; font-size: 1.5rem; font-family: 'Playfair Display', serif;">5 Outlets</div>
                            <div style="font-size: 0.6rem; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px;">Maharashtrian Roots</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION: THE MASTERPIECE SHOWCASE (CINEMATIC 2D) -->
            <section id="masterpiece-showcase" style="position: relative; width: 100%; min-height: 100vh; background: #050505; overflow: hidden; display: flex; align-items: center; justify-content: center; color: #fff;">
                
                <!-- Background Large Typo (Parallax Layer 1) -->
                <div id="masterpiece-bg-text" style="position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index: 1; pointer-events: none; opacity: 0.03; transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);">
                    <h1 style="font-family: 'Playfair Display', serif; font-size: 35vw; text-transform: uppercase;">Craft</h1>
                </div>

                <!-- Floating Ingredients (Parallax Layer 2) -->
                <div id="masterpiece-ingredients" style="position: absolute; inset: 0; z-index: 2; pointer-events: none; opacity: 0.4; transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);">
                    <img src="ingredients_flying.png" style="position: absolute; top: -5%; left: -5%; width: 50vw; transform: rotate(-10deg); filter: blur(2px);">
                    <img src="ingredients_flying.png" style="position: absolute; bottom: -5%; right: -5%; width: 50vw; transform: scale(-1) rotate(10deg); filter: blur(4px);">
                </div>

                <!-- Content Container (Strict Editorial Grid) -->
                <div style="position: relative; width: 100%; max-width: 1600px; height: 100%; z-index: 3; display: grid; grid-template-columns: minmax(300px, 1fr) minmax(350px, 1fr); gap: 10vw; align-items: center; padding: 0 10%;">
                    
                    <!-- Left Column: Masterpiece showcase (Left Aligned) -->
                    <div style="display: flex; align-items: center; justify-content: flex-start; min-height: 50vh;">
                        <div id="hero-pizza-wrap" style="position: relative; width: 100%; max-width: 480px; transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);">
                            <!-- The Main Pizza -->
                            <img id="masterpiece-img" src="masterpiece_pizza_1.png" style="width: 100%; border-radius: 50%; box-shadow: 0 40px 80px rgba(0,0,0,0.9), 0 0 120px rgba(255,60,0,0.1); transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
                            
                            <!-- Ornament: Rotating Text Ring (Tighter & Cleaner) -->
                            <div class="masterpiece-circle-svg-wrap" style="position: absolute; inset: -10%; border-radius: 50%; transform-origin: center; animation: spin-slow 35s linear infinite; pointer-events: none;">
                                <svg viewBox="0 0 120 120" class="masterpiece-circle-svg" style="width: 100%; height: 100%; position: absolute; inset: 0; overflow: visible; opacity: 0.6;">
                                    <path id="circlePath" d="M 60, 60 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0" fill="transparent" />
                                    <text fill="#ff3c00" font-size="2" letter-spacing="1.5" font-family="'Inter', sans-serif" font-weight="900" style="text-transform: uppercase;">
                                        <textPath href="#circlePath">AUTHENTIC & PERFECTLY BAKED PIZZA • AUTHENTIC & PERFECTLY BAKED PIZZA •&nbsp;</textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Cinematic Content (Right Aligned) -->
                    <div class="masterpiece-column" style="display: flex; flex-direction: column; gap: 3.5rem; justify-content: center; min-height: 400px;">
                        <div class="masterpiece-info">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2.5rem;">
                                <span id="masterpiece-num" style="font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #ff3c00;">01</span>
                                <div style="width: 80px; height: 1px; background: rgba(255,255,255,0.15);"></div>
                                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5em; color: rgba(255,255,255,0.4);">Signature Series</span>
                            </div>

                            <h2 id="masterpiece-title" style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 4.5vw, 4.8rem); line-height: 0.9; margin: 0; color: #fff;"></h2>
                            <p id="masterpiece-desc" style="font-size: 1.15rem; color: rgba(255,255,255,0.5); line-height: 1.9; margin-top: 2rem; max-width: 420px; font-weight: 300;"></p>
                        </div>

                        <div class="masterpiece-btn-wrap" style="margin-top: 1rem;">
                            <a href="#/menu" class="btn-premium" style="display: inline-block; padding: 1.3rem 3.5rem; background: #fff; color: #000; text-decoration: none; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.25em; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);">View All Creations</a>
                        </div>
                    </div>

                </div>

                <style>
                    @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .m-nav-item:hover { opacity: 1 !important; transform: translateY(-5px); }
                    .m-nav-item.active { opacity: 1 !important; }
                    .m-nav-item.active img { filter: contrast(1.2) brightness(1.1); }
                    .btn-premium:hover { background: #ff3c00; color: #fff; box-shadow: 0 15px 40px rgba(255,60,0,0.4); }
                </style>
            </section>

            <!-- SECTION: DESTINATION PORTFOLIO -->
            <section class="featured-section reveal" style="padding: 8vw 5% 4vw; background: #0a0a0a; border-top: 1px solid rgba(255,255,255,0.02);">
                <div style="text-align: center; margin-bottom: 6vw;">
                    <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(3rem, 6vw, 6rem); text-transform: uppercase; letter-spacing: -0.04em; color: #fff; font-weight: 900; line-height: 0.8;">OUR</h2>
                    <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(3.5rem, 8vw, 8rem); color: #ff3c00; font-style: italic; font-weight: 400; margin-top: 5px;">Outlets</h2>
                </div>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem;">
                    ${W.slice(0,4).map((f,g)=>`
                        <div class="destination-card reveal" data-tilt style="position: relative; height: 75vh; overflow: hidden; border-radius: 4px; cursor: pointer;">
                            <img src="${f.images.hero}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);" alt="${f.name}">
                            <div class="card-overlay"></div>
                            <div class="card-content-inner" style="position: absolute; bottom: 4rem; left: 4rem; right: 4rem;">
                                <div style="color: #ff3c00; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.6em; margin-bottom: 12px; font-weight: 800;">Destination 0${g+1}</div>
                                <h3 style="font-family: 'Playfair Display', serif; font-size: 3.5rem; color: #fff; margin-bottom: 0.8rem; line-height: 1;">${f.name.split(" ").pop()}</h3>
                                <p style="color: rgba(255,255,255,0.6); font-size: 0.9rem; letter-spacing: 0.05em; max-width: 300px; line-height: 1.6;">${f.address}</p>
                                <div style="margin-top: 2.5rem;">
                                    <a href="#/outlet/${f.id}" class="btn-premium-outline" style="padding: 1rem 2rem; font-size: 0.75rem; background: rgba(255,255,255,0.05); backdrop-filter: blur(5px);">Explore Outlet</a>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
                <div style="text-align: center; margin-top: 4vw;">
                    <a href="#/locations" class="btn-premium">View All Outlets</a>
                </div>
            </section>

            <!-- SECTION: FINAL CTA -->
            <section class="cta-section reveal" style="position: relative; padding: 8vw 5% 12vw; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #000; overflow: hidden;">
                <!-- FIRE EMBER CANVAS -->
                <canvas id="cta-embers" style="position: absolute; top:0; left:0; width:100%; height:100%; z-index: 1; pointer-events: none; opacity: 0.6;"></canvas>
                
                <!-- GRADIENT OVERLAYS -->
                <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255, 60, 0, 0.15) 0%, transparent 80%); z-index: 2; pointer-events: none;"></div>
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, #000 0%, transparent 30%, transparent 70%, #000 100%); z-index: 2; pointer-events: none;"></div>

                <div style="position: relative; z-index: 3;">
                    <div style="color: #ff3c00; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.6em; margin-bottom: 2.5rem; font-weight: 800;">Authentic Taste</div>
                    <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(5rem, 12vw, 12rem); color: #fff; line-height: 0.9; font-weight: 400; letter-spacing: -0.04em;">FEEL THE <br><em style="font-style: italic; color: #ff3c00;">HEAT.</em></h2>
                    <div class="cta-btns" style="margin-top: 4vw;">
                        <a href="#/locations" class="btn-primary" style="padding: 1.5rem 4rem; font-size: 0.9rem;">Order Now</a>
                    </div>
                </div>
            </section>
        </div>
    `}function J(){const f=window.innerWidth<=768;V(),j();const g=document.getElementById("heritage-img-wrap"),v=document.getElementById("heritage-card-3d");g&&v&&(g.addEventListener("mousemove",t=>{const i=g.getBoundingClientRect(),e=(t.clientX-i.left)/i.width-.5,r=(t.clientY-i.top)/i.height-.5;v.style.animation="none",v.style.transform=`rotateX(${-r*18}deg) rotateY(${e*18}deg) translateY(-8px)`}),g.addEventListener("touchstart",t=>{const i=t.touches[0],e=g.getBoundingClientRect(),r=(i.clientX-e.left)/e.width-.5,n=(i.clientY-e.top)/e.height-.5;v.style.animation="none",v.style.transform=`rotateX(${-n*22}deg) rotateY(${r*22}deg) translateY(-12px)`},{passive:!0}),g.addEventListener("mouseleave",()=>{v.style.animation="float3d 6s ease-in-out infinite",v.style.transform=""}),g.addEventListener("touchend",()=>{v.style.animation="float3d 6s ease-in-out infinite",v.style.transform=""},{passive:!0})),document.querySelectorAll(".destination-card").forEach(t=>{t.addEventListener("mousemove",i=>{const e=t.getBoundingClientRect(),r=(i.clientX-e.left)/e.width-.5,n=(i.clientY-e.top)/e.height-.5,m=t.querySelector("img"),y=t.querySelector(".card-content-inner");m&&(m.style.transform=`scale(1.15) translate(${-r*30}px, ${-n*30}px) rotate(${r*2}deg)`),y&&(y.style.transform=`translate3d(${r*25}px, ${n*25}px, 50px)`),t.style.transform=`rotateX(${-n*10}deg) rotateY(${r*10}deg)`}),t.addEventListener("touchstart",i=>{const e=i.touches[0],r=t.getBoundingClientRect(),n=(e.clientX-r.left)/r.width-.5,m=(e.clientY-r.top)/r.height-.5,y=t.querySelector("img"),l=t.querySelector(".card-content-inner");t.classList.add("touch-active"),y&&(y.style.transform=`scale(1.2) translate(${-n*40}px, ${-m*40}px) rotate(${n*4}deg)`),l&&(l.style.transform=`translate3d(${n*35}px, ${m*35}px, 60px)`),t.style.transform=`rotateX(${-m*15}deg) rotateY(${n*15}deg) scale(1.02)`},{passive:!0}),t.addEventListener("mouseleave",()=>{const i=t.querySelector("img"),e=t.querySelector(".card-content-inner");i&&(i.style.transform=""),e&&(e.style.transform=""),t.style.transform=""}),t.addEventListener("touchend",()=>{const i=t.querySelector("img"),e=t.querySelector(".card-content-inner");t.classList.remove("touch-active"),i&&(i.style.transform=""),e&&(e.style.transform=""),t.style.transform=""},{passive:!0})});const h=document.getElementById("cta-embers");if(h){let t=function(){const c=h.parentElement.getBoundingClientRect();r=h.width=c.width,n=h.height=c.height},i=function(){document.getElementById("cta-embers")&&(e.clearRect(0,0,r,n),e.shadowBlur=0,m.forEach(c=>{c.update(),c.draw()}),requestAnimationFrame(i))};const e=h.getContext("2d");let r,n;const m=[];window.addEventListener("resize",t),t();class y{constructor(){this.reset()}reset(){this.x=Math.random()*r,this.y=n+50,this.vx=(Math.random()-.5)*2,this.vy=-Math.random()*3-2,this.size=Math.random()*(f?2.5:3.5)+1,this.alpha=Math.random()*.7+.3,this.life=Math.random()*(f?150:250)+100,this.color=Math.random()>.5?"#ff3c00":"#ff9d00"}update(){this.x+=this.vx+Math.sin(this.y*.01)*.5,this.y+=this.vy,this.life--,this.alpha-=f?.004:.002,(this.life<=0||this.alpha<=0||this.y<-20)&&this.reset()}draw(){e.globalAlpha=this.alpha,e.fillStyle=this.color,f||(e.shadowBlur=12,e.shadowColor=this.color),e.beginPath(),e.arc(this.x,this.y,this.size,0,Math.PI*2),e.fill()}}const l=f?200:750;for(let c=0;c<l;c++)m.push(new y);i()}const w=document.getElementById("masterpiece-showcase");if(w){let t=function(a){const d=G[a];if(!d)return;l=a,b&&clearTimeout(b);const s=document.querySelector(".masterpiece-info");s&&(s.style.opacity="0",s.style.transform="translateY(15px)",s.style.transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"),n&&(n.style.opacity="0",n.style.transform="scale(0.92) rotate(-8deg)",n.style.transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"),b=setTimeout(()=>{if(i&&(i.textContent=d.name),e&&(e.textContent=d.description),r&&(r.textContent=`0${a+1}`),n){const p=new Image;p.src=d.image,p.onload=()=>{n.src=d.image,s&&(s.style.opacity="1",s.style.transform="translateY(0)"),n&&(n.style.opacity="1",n.style.transform="scale(1) rotate(0deg)")}}},200),m&&(m.style.transform=`translateX(${(a-1)*-15}vw) translateZ(0)`),y&&(y.style.transform=`translate(${(a-1)*-80}px, ${(a-1)*50}px) rotate(${(a-1)*15}deg) translateZ(0)`)};const i=document.getElementById("masterpiece-title"),e=document.getElementById("masterpiece-desc"),r=document.getElementById("masterpiece-num"),n=document.getElementById("masterpiece-img"),m=document.getElementById("masterpiece-bg-text"),y=document.getElementById("masterpiece-ingredients");let l=0,c=0,x=!1,b=null,z=0,E=0;const S=()=>{if(!document.getElementById("masterpiece-showcase"))return;if(x&&document.body.style.overflow!=="hidden"&&(document.body.style.overflow="hidden"),x){Math.abs(window.scrollY-E)>10&&window.scrollTo(0,E);return}if(Date.now()-z<1e3)return;const d=w.getBoundingClientRect(),s=window.pageYOffset+d.top,p=f?window.innerHeight*.5:window.innerHeight*.4;if(d.top<p&&d.top>-p){if(x=!0,E=s,f){const u=document.querySelector(".navbar");u&&u.classList.add("nav-hidden")}document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",window.scrollTo(0,s)}},T=a=>{if(!document.getElementById("masterpiece-showcase")){x&&(x=!1,document.body.style.overflow="");return}if(!x)return;const d=Date.now(),s=a.deltaY>0,p=a.deltaY<0;if(l===0&&p||l===2&&s)if(d-c>1100){x=!1;const u=document.querySelector(".navbar");u&&u.classList.remove("nav-hidden"),z=d,document.body.style.overflow="",document.documentElement.style.overflow="";return}else{a.preventDefault();return}a.preventDefault(),!(d-c<1300)&&(s&&l<2?(c=d,t(l+1)):p&&l>0&&(c=d,t(l-1)))};window.removeEventListener("scroll",window._homeScrollHandler),window.removeEventListener("wheel",window._homeWheelHandler),window._homeScrollHandler=S,window._homeWheelHandler=T,window.addEventListener("scroll",S),window.addEventListener("wheel",T,{passive:!1});let A=0;w.addEventListener("touchstart",a=>{A=a.touches[0].clientY},{passive:!0}),w.addEventListener("touchmove",a=>{document.getElementById("masterpiece-showcase")&&x&&a.preventDefault()},{passive:!1}),w.addEventListener("touchend",a=>{if(!x)return;const d=a.changedTouches[0].clientY,s=A-d,p=Date.now();if(Math.abs(s)<40)return;const u=s>0,I=s<0,o=f?600:1300;if((l===0&&I||l===2&&u)&&p-c>o){x=!1;const C=document.querySelector(".navbar");C&&C.classList.remove("nav-hidden"),z=p,document.body.style.overflow="",document.documentElement.style.overflow="";return}p-c<o||(u&&l<2?(c=p,t(l+1)):I&&l>0&&(c=p,t(l-1)))}),f||w.addEventListener("mousemove",a=>{const{clientX:d,clientY:s}=a,p=(d/window.innerWidth-.5)*40,u=(s/window.innerHeight-.5)*40;pizzaWrap&&(pizzaWrap.style.transform=`translate3d(${p}px, ${u}px, 0) rotateX(${-u/2}deg) rotateY(${p/2}deg)`),m&&(m.style.transform=`translate(${-p/2}px, ${-u/2}px)`)}),t(0)}}export{J as init,Q as renderHome};
