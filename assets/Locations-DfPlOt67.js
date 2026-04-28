import{o as d}from"./three.module-DRDOGXzl.js";import{i as p}from"./tilt-fQ6J8_vA.js";import{i as c}from"./HeatFlow-nij2Dcjl.js";const n={Phone:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',Map:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',Clock:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',Chevron:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion-chevron" style="transition: transform 0.4s ease;"><polyline points="6 9 12 15 18 9"></polyline></svg>'};function f(){return`
        <div class="locations-page" style="position: relative; overflow: hidden; background: #0c0b0a;">
            <!-- INTERACTIVE 3D HEAT FLOW -->
            <canvas id="heat-flow-canvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.6;"></canvas>

            <!-- CINEMATIC HEADER -->
            <header class="page-header container reveal" style="text-align: left; position: relative; z-index: 1; padding-top: 150px;">
                <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 3rem;">
                    <div style="width: 50px; height: 1px; background: #ff3c00;"></div>
                    <span style="color: #ff3c00; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.6em; font-weight: 800;">Our Portfolio</span>
                </div>
                <h1 style="font-family: 'Playfair Display', serif; font-size: clamp(2.8rem, 10vw, 8rem); line-height: 0.85; margin: 0; color: #fff; letter-spacing: -0.04em;">
                    REGIONAL <br>
                    <em style="color: #ff3c00; font-style: italic;">PRESENCE</em>
                </h1>
                <p style="font-size: 1.2rem; color: rgba(255,255,255,0.5); max-width: 600px; margin-top: 3rem; font-weight: 300; line-height: 1.6;">
                    Explore our collection of authentic stone-oven destinations strategically situated in Maharashtra's finest culinary hubs. Click on any outlet to view its unique atmosphere and offerings.
                </p>
            </header>
            
            <!-- ACCORDION LIST GRID -->
            <section class="container" style="padding: 0 5% 12rem; position: relative; z-index: 1; max-width: 1200px;">
                <div style="border-top: 1px solid rgba(255,255,255,0.1); margin-top: 5rem;">
                    ${d.map((e,i)=>{const t=[];e.images&&e.images.hero&&t.push(e.images.hero),e.images&&e.images.gallery&&e.images.gallery.forEach(o=>t.push(o));const r=t.length>0?t[0]:"";return`
        <div class="outlet-accordion-item reveal" style="border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 1rem;">
            
            <!-- Accordion Header (Clickable) -->
            <div class="outlet-header" data-index="${i}" style="display: grid; grid-template-columns: 80px 1fr auto; align-items: center; padding: 2.5rem 0; cursor: pointer; transition: background 0.3s ease;">
                <div style="font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #ff3c00; opacity: 0.6;">0${i+1}</div>
                <div>
                    <h3 style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem); margin: 0; color: #fff; line-height: 1;">${e.name.split(" ").pop()}</h3>
                    <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(255,179,0,0.6); margin-top: 12px; display: flex; align-items: center; gap: 10px;">
                        <span>★ ${e.rating}</span>
                        <span style="opacity: 0.5;">|</span>
                        <span>${e.reviewCount} Reviews</span>
                    </div>
                </div>
                <div style="color: rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2);">
                    ${n.Chevron}
                </div>
            </div>
            
            <!-- Accordion Details (Hidden by Default) -->
            <div class="outlet-body" id="outlet-body-${i}" style="max-height: 0; overflow: hidden; transition: max-height 0.6s cubic-bezier(0.19, 1, 0.22, 1), padding 0.6s ease; background: rgba(0,0,0,0.2); border-radius: 12px;">
                <div style="padding: 3rem; display: flex; flex-wrap: wrap; gap: 4rem;">
                    
                    <!-- Info Column -->
                    <div style="flex: 1; min-width: 300px;">
                        <h4 style="color: #ff3c00; font-family: 'Playfair Display', serif; font-size: 2rem; margin-top: 0; margin-bottom: 1.5rem;">Experience ${e.name.split(" ").pop()}</h4>
                        
                        <p style="color: rgba(255,255,255,0.7); font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
                            ${e.address}
                        </p>
                        
                        <div style="margin-bottom: 1rem; color: #fff; font-size: 0.95rem; display: flex; align-items: center; gap: 12px;">
                            ${n.Clock.replace('width="24" height="24"','width="18" height="18"')} 
                            <span style="color: rgba(255,255,255,0.6);">Timing:</span> ${e.hours}
                        </div>
                        
                        ${e.phone?`
                        <div style="margin-bottom: 2rem; color: #fff; font-size: 0.95rem; display: flex; align-items: center; gap: 12px;">
                            ${n.Phone.replace('width="24" height="24"','width="18" height="18"')} 
                            <span style="color: rgba(255,255,255,0.6);">Contact:</span> ${e.phone}
                        </div>
                        `:'<div style="margin-bottom: 2rem;"></div>'}
                        
                        <div style="margin-bottom: 3rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                            <a href="${e.mapUrl}" target="_blank" class="btn-premium" style="display: inline-flex; align-items: center; gap: 10px; padding: 1rem 2rem; font-size: 0.85rem; background: #ff3c00; color: #fff; text-decoration: none; border-radius: 4px;">
                                ${n.Map.replace('width="24" height="24"','width="16" height="16"')} 
                                Open in Google Maps
                            </a>
                            ${e.zomatoUrl?`
                            <a href="${e.zomatoUrl==="coming_soon"?"javascript:void(0)":e.zomatoUrl}" target="${e.zomatoUrl==="coming_soon"?"_self":"_blank"}" class="btn-premium" style="display: inline-flex; align-items: center; gap: 10px; padding: 1rem 2rem; font-size: 0.85rem; background: transparent; color: #fff; text-decoration: none; border-radius: 4px; border: 1px solid #ff3c00; ${e.zomatoUrl==="coming_soon"?"opacity: 0.5; cursor: default;":""}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                ${e.zomatoUrl==="coming_soon"?"Coming Soon":"Order on Zomato"}
                            </a>
                            `:""}
                        </div>
                        
                        <!-- Menu Highlights -->
                        ${e.menu&&e.menu.length>0?`
                        <div>
                            <strong style="color: #fff; display: block; margin-bottom: 1rem; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.15em; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">Signature Offerings</strong>
                            <div style="display: grid; gap: 1rem;">
                                ${e.menu.map(o=>`
                                    <div>
                                        <span style="color: #ff3c00; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 4px;">${o.category}</span>
                                        <span style="color: rgba(255,255,255,0.6); font-size: 0.95rem;">${o.items.join(", ")}</span>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                        `:""}
                    </div>
                    
                    <!-- Photos Column -->
                    <div style="flex: 1.5; min-width: 300px;">
                        <div style="border-radius: 12px; overflow: hidden; height: 350px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                            <img src="${r}" alt="${e.name} Location" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" class="loc-img-hover">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        `}).join("")}
                </div>
            </section>
        </div>
        
        <style>
            .loc-img-hover:hover {
                transform: scale(1.05);
            }
        </style>
    `}function y(){p(),c("heat-flow-canvas"),document.querySelectorAll(".outlet-header").forEach(e=>{e.addEventListener("click",()=>{const i=e.getAttribute("data-index"),t=document.getElementById(`outlet-body-${i}`),r=e.querySelector(".accordion-chevron");document.querySelectorAll(".outlet-body").forEach((o,a)=>{if(a.toString()!==i&&o.style.maxHeight!=="0px"){o.style.maxHeight="0px",o.style.paddingTop="0px",o.style.paddingBottom="0px",o.style.marginBottom="0px";const s=document.querySelectorAll(".outlet-header")[a].querySelector(".accordion-chevron");s&&(s.style.transform="rotate(0deg)")}}),t.style.maxHeight==="0px"||!t.style.maxHeight?(t.style.maxHeight=t.scrollHeight+150+"px",t.style.paddingTop="1rem",t.style.paddingBottom="1rem",t.style.marginBottom="2rem",r&&(r.style.transform="rotate(180deg)"),setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})},300)):(t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px",t.style.marginBottom="0px",r&&(r.style.transform="rotate(0deg)"))})})}export{y as init,f as renderLocations};
