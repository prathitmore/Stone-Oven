import{W as l,S as d,P as x,a as m,b as u,D as w,f,V as h,M as y}from"./three.module-DRDOGXzl.js";function p(v){const n=document.getElementById(v);if(!n)return;const e=new l({canvas:n,alpha:!0,antialias:!1});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,1));const a=new d,o=new x(75,window.innerWidth/window.innerHeight,.1,1e3);o.position.z=30;const c=new m(100,100,64,64),i=new u({uniforms:{uTime:{value:0},uMouse:{value:new h(0,0)},uColor:{value:new f(16727040)}},vertexShader:`
            uniform float uTime;
            uniform vec2 uMouse;
            varying vec2 vUv;
            varying float vElevation;

            // Simplified 3D Noise for thermal flow
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy));
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m;
                m = m*m;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vUv = uv;
                
                // Mouse interaction - Attraction/Distortion
                float dist = distance(uv, uMouse);
                float strength = 1.0 - smoothstep(0.0, 0.6, dist);
                
                // Procedural thermal displacement (similar to Hero floor)
                float noise = snoise(uv * 1.5 + uTime * 0.1) * 2.0;
                float elevation = noise + (strength * 4.0);
                
                vElevation = elevation;
                
                vec3 newPos = position;
                newPos.z += elevation;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 uColor;
            varying vec2 vUv;
            varying float vElevation;

            void main() {
                // Glow intensity based on elevation peaks
                float intensity = vElevation * 0.15;
                vec3 glowColor = uColor * (0.1 + intensity);
                
                // Add soft edges to the plane
                float edge = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x) * 
                             smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
                
                gl_FragColor = vec4(glowColor, 0.3 * edge);
            }
        `,transparent:!0,side:w}),r=new y(c,i);r.rotation.x=-Math.PI*.35,a.add(r),window.addEventListener("mousemove",t=>{i.uniforms.uMouse.value.x=t.clientX/window.innerWidth,i.uniforms.uMouse.value.y=1-t.clientY/window.innerHeight}),window.addEventListener("resize",()=>{e.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix()});function s(t){i.uniforms.uTime.value=t*.001,e.render(a,o),requestAnimationFrame(s)}s(0)}export{p as i};
