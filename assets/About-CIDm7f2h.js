import{o as i}from"./index-DemXuxsN.js";import{i as o}from"./HeatFlow-B6VKY3vj.js";import"./three.module-CfHucll0.js";function d(){return`
        <div class="about-page" style="position: relative; overflow: hidden; background: #0c0b0a; color: #fff;">
            <!-- INTERACTIVE 3D HEAT FLOW -->
            <canvas id="about-heat-canvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.4;"></canvas>

            <div class="container" style="position: relative; z-index: 1; padding-top: 160px; padding-bottom: 100px; max-width: 1200px; margin: 0 auto; padding-left: 5%; padding-right: 5%;">
                
                <!-- CINEMATIC HEADER -->
                <header class="reveal" style="margin-bottom: 6rem;">
                    <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 2rem;">
                        <div style="width: 50px; height: 1px; background: #ff3c00;"></div>
                        <span style="color: #ff3c00; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.6em; font-weight: 800;">Our Legacy</span>
                    </div>
                    <h1 style="font-family: 'Playfair Display', serif; font-size: clamp(3.5rem, 12vw, 9rem); line-height: 0.85; margin: 0; letter-spacing: -0.04em;">
                        CRAFTING <br>
                        <em style="color: #ff3c00; font-style: italic;">MOMENTS</em>
                    </h1>
                </header>

                <!-- STORY CONTENT -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 5rem; margin-bottom: 10rem;">
                    <div class="reveal">
                        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.8rem; margin-bottom: 2rem; color: #fff; line-height: 1.2;">A Symphony of Heat and Stone</h2>
                        <p style="color: rgba(255,255,255,0.7); font-size: 1.15rem; line-height: 1.9; margin-bottom: 1.5rem;">
                            At Stone Oven, we believe that great food is an art form. Our journey began with a simple vision: to bring the authentic, rustic charm of stone-oven cooking to our local communities. Each of our outlets is designed to be more than just a restaurant—it's a gathering place for those who appreciate the finer details of culinary craft.
                        </p>
                    </div>
                    <div class="reveal" style="display: flex; align-items: center;">
                        <div style="border-left: 2px solid #ff3c00; padding-left: 2.5rem;">
                            <p style="color: rgba(255,255,255,0.5); font-size: 1.05rem; line-height: 1.9; font-style: italic; margin-bottom: 2rem;">
                                "We don't just cook; we ignite experiences. The crackle of the fire, the aroma of fresh dough, and the vibrant colors of our ingredients all come together in a dance of authenticity."
                            </p>
                            <p style="color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8;">
                                From our signature wood-fired pizzas to our innovative continental and fusion dishes, every item on our menu is a testament to our commitment to quality and tradition.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- OUTLETS CONTACT SECTION -->
                <section style="margin-top: 5rem;">
                    <div class="reveal" style="text-align: center; margin-bottom: 6rem;">
                        <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 1.5rem;">Connect With Us</h2>
                        <div style="width: 80px; height: 2px; background: #ff3c00; margin: 0 auto 2rem;"></div>
                        <p style="color: rgba(255,255,255,0.5); font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Select an outlet below to reach us directly for reservations, feedback, or any inquiries.</p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem;">
                        ${i.map((e,t)=>`
        <div class="contact-card reveal" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 2.5rem; transition: transform 0.4s ease, border-color 0.4s ease; cursor: default; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -20px; right: -20px; font-size: 8rem; color: rgba(255, 255, 255, 0.02); font-family: 'Playfair Display', serif; z-index: 0; pointer-events: none;">0${t+1}</div>
            <div style="position: relative; z-index: 1;">
                <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #fff; margin-top: 0; margin-bottom: 1rem;">${e.name.split(" ").pop()}</h3>
                <p style="color: rgba(255,255,255,0.6); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; min-height: 3em;">${e.address}</p>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 12px; color: #ff3c00; font-weight: 600; font-size: 1.1rem;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        ${e.phone}
                    </div>
                    <a href="tel:${e.phone.replace(/\s+/g,"")}" class="call-btn" style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: #ff3c00; color: #fff; text-decoration: none; padding: 1rem; border-radius: 8px; font-weight: 600; transition: all 0.3s ease; margin-top: 0.5rem;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Call Us Now
                    </a>
                </div>
            </div>
        </div>
    `).join("")}
                    </div>
                </section>

                <!-- FOOTER BRANDING -->
                <div class="reveal" style="margin-top: 12rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 6rem;">
                    <img src="/Stone-Oven/logo.png" alt="Stone Oven" style="height: 60px; opacity: 0.3; filter: grayscale(1); margin-bottom: 2rem;">
                    <p style="color: rgba(255,255,255,0.3); font-size: 0.8rem; letter-spacing: 0.4em; text-transform: uppercase;">Est. 2018 • Premium Dining</p>
                </div>

            </div>
        </div>

        <style>
            .contact-card {
                background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%) !important;
            }
            .contact-card:hover {
                transform: translateY(-12px);
                border-color: rgba(255, 60, 0, 0.4) !important;
                background: rgba(255, 60, 0, 0.04) !important;
                box-shadow: 0 30px 60px rgba(0,0,0,0.5);
            }
            .call-btn {
                position: relative;
                overflow: hidden;
            }
            .call-btn:hover {
                background: #e63600 !important;
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(255, 60, 0, 0.3);
            }
            @media (max-width: 768px) {
                .about-page .container { padding-top: 140px; }
            }
        </style>
    `}function p(){o("about-heat-canvas")}export{p as init,d as renderAbout};
