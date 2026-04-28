import{W as b,S as y,P as z,a as w,b as k,D as x,f as _,M as S,o as C}from"./three.module-CioQiq5y.js";import{i as P}from"./tilt-fQ6J8_vA.js";function f(r){const c=document.getElementById(r);if(!c)return;const l=c.parentElement,s=new b({canvas:c,alpha:!0,antialias:!1}),o=l.getBoundingClientRect();s.setSize(o.width,o.height),s.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const d=new y,e=new z(75,o.width/o.height,.1,1e3);e.position.z=30;const i=new w(o.width*.15,o.height*.15,32,32),t=new k({uniforms:{uTime:{value:0},uColor:{value:new _(16731392)}},vertexShader:`
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
        `,fragmentShader:`
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
        `,transparent:!0,side:x}),n=new S(i,t);n.rotation.x=-Math.PI*.2,d.add(n);const a=new ResizeObserver(h=>{for(let u of h){const{width:g,height:v}=u.contentRect;s.setSize(g,v),e.aspect=g/v,e.updateProjectionMatrix()}});a.observe(l);let p;function m(h){t.uniforms.uTime.value=h*.001,s.render(d,e),p=requestAnimationFrame(m)}return m(0),()=>{cancelAnimationFrame(p),a.disconnect(),i.dispose(),t.dispose(),s.dispose()}}function j(){const r="/Stone-Oven/",c=["Pizza","Pasta","Italian","Mexican","Chinese","Sandwiches","Salads","Specialties","Risotto","Desserts","Beverages"],l={"BBQ Chicken Pizza":{desc:"Smoky BBQ reduction paired with perfectly grilled chicken over an open flame.",image:"/Stone-Oven/dishes/bbq_chicken_pizza.png"},"Peri Peri Chicken Pizza":{desc:"Spicy peri peri sauce base, topped with tender grilled chicken and mozzarella cheese.",image:"/Stone-Oven/dishes/peri_peri_chicken_pizza.png"},Margherita:{desc:"Classic margherita with fresh basil and mozzarella.",image:"/Stone-Oven/dishes/margherita_pizza.png"},"Butter Chicken Pizza":{desc:"A fusion masterpiece with rich makhani sauce.",image:"/Stone-Oven/dishes/butter_chicken_pizza.png"},"Mexican Paneer Pizza":{desc:"Spicy paneer chunks, jalapeños, and bell peppers.",image:"/Stone-Oven/dishes/mexican_paneer_pizza.png"},"Tandoori Chicken Pizza":{desc:"Indian spiced tandoori chicken chunks and mozzarella.",image:"/Stone-Oven/dishes/tandoori_chicken_pizza.png"},"Meat Feast Pizza":{desc:"Loaded with pepperoni, sausage, grilled chicken, and mozzarella.",image:"/Stone-Oven/dishes/meat_feast_pizza.png"},"Cheese Corn Paradise":{desc:"Golden sweet corn kernels baked into a thick layer of stringy mozzarella.",image:"/Stone-Oven/dishes/cheese_corn_pizza.png"},"Peri Peri Paneer":{desc:"Spicy peri peri sauce base, topped with paneer cubes.",image:"/Stone-Oven/dishes/peri_peri_paneer_pizza.png"},"Pesto Chicken Pizza":{desc:"Green basil pesto sauce base, topped with grilled chicken.",image:"/Stone-Oven/dishes/pesto_chicken_pizza.jpg"},"BBQ Paneer Pizza":{desc:"Smoky BBQ sauce reduction, soft paneer chunks.",image:"/Stone-Oven/dishes/bbq_paneer_pizza.jpg"},"Veg Cherry Tomato Pizza":{desc:"Fresh cherry tomatoes and basil.",image:"/Stone-Oven/dishes/veg_cherry_tomato_pizza.jpg"},"Chicken Lasagna":{desc:"Classic baked lasagna with rich chicken bolognese.",image:"/Stone-Oven/dishes/chicken_lasagna.jpg"},"White Sauce Pasta":{desc:"Creamy parmesan white sauce tossed with pasta.",image:"/Stone-Oven/dishes/white_sauce_pasta.jpg"},Nachos:{desc:"Crispy tortillas loaded with cheese, jalapeños, and salsa.",image:"/Stone-Oven/dishes/nachos.jpg"},Tacos:{desc:"Hard shell tacos with fresh fillings and tangy salsa.",image:"/Stone-Oven/dishes/tacos.jpg"},"Fried Rice":{desc:"Wok-tossed aromatic fried rice with vegetables.",image:"/Stone-Oven/dishes/fried_rice.jpg"},"Chilly Garlic Noodles":{desc:"Spicy wok-tossed noodles with burnt garlic.",image:"/Stone-Oven/dishes/chilly_garlic_noodles.jpg"},"Chicken Chilly Garlic Fried Rice":{desc:"Spicy fried rice with chicken chunks.",image:"/Stone-Oven/dishes/chicken_chilly_garlic_fried_rice.jpg"},"Veg Manchurian":{desc:"Vegetable dumplings in a spicy dark soy sauce.",image:"/Stone-Oven/dishes/veg_manchurian.jpg"},"BBQ Chicken Sandwich":{desc:"Grilled chicken in smoky BBQ sauce between fresh bread.",image:"/Stone-Oven/dishes/bbq_chicken_sandwich.jpg"},"Garden Vegetable Sandwich":{desc:"Fresh crisp vegetables and mayo layered perfectly.",image:"/Stone-Oven/dishes/garden_vegetable_sandwich.jpg"},"Asian Chicken Salad":{desc:"Fresh greens with grilled chicken and Asian dressing.",image:"/Stone-Oven/dishes/asian_chicken_salad.jpg"},"Classic Caesar":{desc:"Crisp romaine, parmesan, croutons, and caesar dressing.",image:"/Stone-Oven/dishes/classic_caesar.jpg"},"Chocolate Brownie":{desc:"Warm gooey chocolate brownie.",image:"/Stone-Oven/dishes/chocolate_brownie.jpg"},Shakes:{desc:"Thick, creamy, and indulgent milkshakes.",image:"/Stone-Oven/dishes/shakes.jpg"},Bruschetta:{desc:"Classic toasted bread topped with fresh tomato, garlic, and basil.",image:"/Stone-Oven/dishes/bruschetta.jpg"},"Garlic Bread":{desc:"Toasted bread infused with garlic butter and herbs.",image:"/Stone-Oven/dishes/garlic_bread.jpg"},"Korean Fried Bao":{desc:"Soft buns with crispy fried filling and Korean glazes.",image:"/Stone-Oven/dishes/korean_fried_bao.jpg"},"Pineapple & Watermelon Chatpata":{desc:"Refreshing fruit blend with tangy Indian spices.",image:"/Stone-Oven/dishes/pineapple_watermelon_chatpata.jpg"},"Risotto in Pesto Sauce":{desc:"Creamy risotto cooked in aromatic basil pesto.",image:"/Stone-Oven/dishes/risotto_pesto.jpg"},"Mushroom Risotto":{desc:"Rich and earthy risotto with sautéed forest mushrooms.",image:"/Stone-Oven/dishes/mushroom_risotto.jpg"},"Chicken Supreme Pizza":{desc:"Loaded with grilled chicken, black olives, and mozzarella.",image:"/Stone-Oven/dishes/chicken_supreme_pizza.png"},"Chicken Alfredo Pasta":{desc:"Creamy pasta with tender chicken and alfredo sauce.",image:"/Stone-Oven/dishes/white_sauce_pasta.jpg"},"Pink Sauce Pasta":{desc:"Fusion of creamy white and tangy red sauces.",image:"/Stone-Oven/dishes/pink_sauce_pasta.png"},"Chicken Sizzler":{desc:"Smoking hot sizzler with grilled chicken and veggies.",image:"/Stone-Oven/dishes/chicken_sizzler.png"},"Chocolate Lava Cake":{desc:"Molten chocolate center in a soft cake.",image:"/Stone-Oven/dishes/chocolate_lava_cake.png"},"Belgian Chocolate Waffle":{desc:"Crispy waffle topped with rich Belgian chocolate.",image:"/Stone-Oven/dishes/belgian_chocolate_waffle.png"},"Blue Lagoon Mocktail":{desc:"Refreshing blue citrus cooler.",image:"/Stone-Oven/dishes/blue_lagoon_mocktail.png"},"Cold Coffee with Ice Cream":{desc:"Chilled coffee topped with vanilla ice cream.",image:"/Stone-Oven/dishes/cold_coffee_ice_cream.png"}},s=c.map(e=>{const i=new Set;return C.forEach(t=>{const n=t.menu.find(a=>a.category===e||a.category===e.toLowerCase());n&&n.items.forEach(a=>i.add(a))}),i.size===0?"":`
            <div class="menu-brand-section most-rated-wrapper" style="margin-bottom: 3rem;">
                <canvas id="menu-heat-flow-${e.toLowerCase()}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.25; filter: blur(3px);"></canvas>
                <h2 style="position: relative; z-index: 2; color: #ff3c00; font-size: 2rem; border-bottom: 1px solid rgba(255,60,0,0.15); padding-bottom: 10px; margin-bottom: 30px; display: inline-block;">${e}</h2>
                <div class="menu-items-grid" style="position: relative; z-index: 2; display: grid; gap: 24px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
                    ${Array.from(i).map((t,n)=>{const a=l[t]||{desc:"Handcrafted signature recipe.",image:r+"logo.png"};return`
                        <div style="animation: floatingCard ${5+n%3}s ease-in-out infinite; animation-delay: ${n*.2}s; height: 100%;">
                            <div class="menu-item premium-card premium-dish-card">
                                <div style="width: 100%; height: 180px; overflow: hidden; border-radius: 8px; margin-bottom: 15px; position: relative;">
                                    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); z-index: 1;"></div>
                                    <img src="${a.image}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);" class="dish-img-hover" alt="${t}" loading="lazy">
                                </div>
                                <h3 style="margin: 0 0 10px 0; font-size: 1.25rem; color: #fff; font-family: 'Playfair Display', serif; text-shadow: 0 2px 4px rgba(0,0,0,0.5); position: relative; z-index: 2;">${t}</h3>
                                <p style="margin: 0 0 15px 0; font-size: 0.9rem; color: rgba(255,255,255,0.65); line-height: 1.6; flex-grow: 1; font-family: 'Inter', sans-serif; position: relative; z-index: 2;">${a.desc}</p>
                            </div>
                        </div>
                        `}).join("")}
                </div>
            </div>
        `}).join("");return`
        <div class="menu-page container">
            <header class="page-header">
                <h1>Our Master Menu</h1>
                <p>Handcrafted flavors served across all our outlets.</p>
                <div class="menu-note">Note: Availability may vary by location.</div>
            </header>
            <div class="brand-menu-container">
                ${`
        <style>
            .most-rated-wrapper {
                position: relative;
                margin-bottom: 4rem;
                padding: 3rem;
                border-radius: 16px;
                background: #0a0a0a; /* deep charcoal base */
                overflow: hidden;
                /* section entry transition */
                opacity: 0;
                transform: translateY(15px);
                animation: ratedEntry 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.2s;
                border: 1px solid rgba(255, 60, 0, 0.03);
            }

            /* Subtle stone texture noise overlay */
            .most-rated-wrapper::after {
                content: '';
                position: absolute;
                inset: 0;
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E");
                pointer-events: none;
                z-index: 1;
            }

            /* Card enhancements */
            .premium-dish-card {
                position: relative;
                z-index: 2;
                display: flex;
                flex-direction: column;
                padding: 24px;
                background: rgba(20, 15, 12, 0.35); /* slight transparency */
                border-radius: 12px;
                backdrop-filter: blur(12px); /* subtle blur effect */
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.03);
                /* soft shadow & light warm edge glow */
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 60, 0, 0.04);
                text-align: left;
                transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.3s ease, background 0.3s ease;
                height: 100%;
            }

            .premium-dish-card:hover {
                background: rgba(25, 18, 14, 0.5);
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 60, 0, 0.25); /* glow increases subtly */
            }
            
            .premium-dish-card:hover .dish-img-hover {
                transform: scale(1.08);
            }

            /* Ambient Particles */
            .ember-dot {
                position: absolute;
                bottom: -20px;
                width: 3px;
                height: 3px;
                background: #ff7300;
                border-radius: 50%;
                box-shadow: 0 0 10px #ff3c00;
                opacity: 0;
                z-index: 2;
                pointer-events: none;
                animation: floatEmber linear infinite;
            }

            @keyframes ratedEntry {
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes floatEmber {
                0% { transform: translateY(0) scale(1); opacity: 0; }
                20% { opacity: 0.5; }
                80% { opacity: 0.1; }
                100% { transform: translateY(-120px) scale(0.5); opacity: 0; }
            }
            @keyframes floatingCard {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
                100% { transform: translateY(0px); }
            }
        </style>

        <div class="menu-brand-section most-rated-wrapper">
            <!-- 3D HEAT FLOW CANVAS -->
            <canvas id="menu-heat-flow-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.4; filter: blur(3px);"></canvas>
            
            <!-- Minimal ember particles -->
            <div class="ember-dot" style="left: 15%; animation-duration: 9s; animation-delay: 0s;"></div>
            <div class="ember-dot" style="left: 35%; animation-duration: 14s; animation-delay: 3s;"></div>
            <div class="ember-dot" style="left: 65%; animation-duration: 11s; animation-delay: 1s;"></div>
            <div class="ember-dot" style="left: 85%; animation-duration: 16s; animation-delay: 4s;"></div>
            
            <h2 style="position: relative; z-index: 2; color: #ff3c00; font-size: 2rem; border-bottom: 1px solid rgba(255,60,0,0.15); padding-bottom: 10px; margin-bottom: 30px; display: inline-block;">★ Most Rated Dishes</h2>
            <div class="menu-items-grid" style="position: relative; z-index: 2; display: grid; gap: 24px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
                ${[{name:"Butter Chicken Pizza",desc:"A fusion masterpiece with rich makhani sauce and tender tandoori chicken.",availability:"Virar • Palghar • Boisar • Vasai • Thane",image:"/Stone-Oven/dishes/butter_chicken_pizza.png"},{name:"Chicken Supreme Pizza",desc:"Loaded with grilled chicken, black olives, and premium mozzarella cheese.",availability:"Virar • Palghar • Boisar • Vasai • Thane",image:"/Stone-Oven/dishes/chicken_supreme_pizza.png"},{name:"Mexican Paneer Pizza",desc:"Spicy paneer chunks, jalapeños, and bell peppers with a bold Mexican seasoning.",availability:"Palghar • Boisar • Thane",image:"/Stone-Oven/dishes/mexican_paneer_pizza.png"},{name:"BBQ Chicken Pizza",desc:"Smoky BBQ reduction paired with perfectly grilled chicken over an open flame.",tag:"Popular",availability:"Virar • Boisar • Vasai",image:"/Stone-Oven/dishes/bbq_chicken_pizza.png"},{name:"Chicken Alfredo Pasta",desc:"Classic creamy parmesan alfredo sauce tossed with tender chicken breast.",availability:"Palghar • Boisar • Thane",image:"/Stone-Oven/dishes/white_sauce_pasta.jpg"},{name:"Pink Sauce Pasta",desc:"The perfect blend of creamy white sauce and tangy tomato arrabbiata.",availability:"Virar • Palghar • Vasai",image:"/Stone-Oven/dishes/pink_sauce_pasta.png"},{name:"Chicken Sizzler",desc:"Aromatic, smoking hot sizzler platter with signature sauces and veggies.",availability:"Virar • Vasai",image:"/Stone-Oven/dishes/chicken_sizzler.png"},{name:"Chocolate Lava Cake",desc:"Warm, gooey molten chocolate center surrounded by a soft, rich sponge.",availability:"Virar • Palghar • Boisar • Vasai • Thane",image:"/Stone-Oven/dishes/chocolate_lava_cake.png"},{name:"Belgian Chocolate Waffle",desc:"Crispy golden waffle draped generously in premium melted Belgian chocolate.",availability:"Virar • Palghar • Boisar",image:"/Stone-Oven/dishes/belgian_chocolate_waffle.png"},{name:"Blue Lagoon Mocktail",desc:"A refreshing and vibrant citrus and blue curaçao cooler over ice.",availability:"Virar • Palghar • Boisar • Vasai • Thane",image:"/Stone-Oven/dishes/blue_lagoon_mocktail.png"},{name:"Cold Coffee with Ice Cream",desc:"Rich blended espresso and milk topped with a scoop of vanilla ice cream.",availability:"Virar • Palghar • Boisar • Vasai • Thane",image:"/Stone-Oven/dishes/cold_coffee_ice_cream.png"}].map((e,i)=>`
                    <!-- Float Wrapper -->
                    <div style="animation: floatingCard ${5+i%3}s ease-in-out infinite; animation-delay: ${i*.2}s; height: 100%;">
                        <!-- 3D Tilt Card -->
                        <div class="menu-item premium-card premium-dish-card">
                            <div style="width: 100%; height: 180px; overflow: hidden; border-radius: 8px; margin-bottom: 15px; position: relative;">
                                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); z-index: 1;"></div>
                                <img src="${e.image}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);" class="dish-img-hover" alt="${e.name}" loading="lazy">
                            </div>
                            <h3 style="margin: 0 0 10px 0; font-size: 1.25rem; color: #fff; font-family: 'Playfair Display', serif; text-shadow: 0 2px 4px rgba(0,0,0,0.5); position: relative; z-index: 2;">${e.name}</h3>
                            <p style="margin: 0 0 15px 0; font-size: 0.9rem; color: rgba(255,255,255,0.65); line-height: 1.6; flex-grow: 1; font-family: 'Inter', sans-serif; position: relative; z-index: 2;">${e.desc}</p>
                            <div style="font-size: 0.75rem; color: #ff5722; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; position: relative; z-index: 2;">
                                📍 ${e.availability}
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `}
                ${s}
            </div>
        </div>
    `}function M(){P(),setTimeout(()=>{f("menu-heat-flow-canvas"),["pizza","pasta","italian","mexican","chinese","sandwiches","salads","specialties","risotto","desserts","beverages"].forEach(r=>{f("menu-heat-flow-"+r)})},100)}export{M as init,j as renderMenu};
