const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home.js","assets/three.module.js","assets/tilt.js","assets/Locations.js","assets/HeatFlow.js","assets/Menu.js","assets/About.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const h=i=>"/Stone-Oven/"+(i.startsWith("/")?i.slice(1):i);function x(){return`
        <div id="splash-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #000; z-index: 10000; display: flex; align-items: center; justify-content: center; overflow: hidden; opacity: 1; transition: opacity 1s ease;">
            <!-- EMBER BACKGROUND CANVAS -->
            <canvas id="splash-embers" style="position: absolute; top:0; left:0; width:100%; height:100%;"></canvas>
            
            <!-- LOGO -->
            <div id="splash-logo-wrap" style="position: relative; z-index: 2; opacity: 0; transform: scale(0.9); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);">
                <img src="${h("logo.png")}" alt="Stone Oven" style="width: clamp(300px, 40vw, 550px); height: auto; filter: drop-shadow(0 0 50px rgba(255, 60, 0, 0.4));">
            </div>

            <!-- GLOW OVERLAY -->
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255, 60, 0, 0.08) 0%, transparent 70%); pointer-events: none; z-index: 1;"></div>
        </div>
    `}function z(i){const e=document.getElementById("splash-container"),a=document.getElementById("splash-logo-wrap"),t=document.getElementById("splash-embers");if(!e||!a||!t){i&&i();return}const o=t.getContext("2d");let s,r;const l=[];function p(){s=t.width=window.innerWidth,r=t.height=window.innerHeight}window.addEventListener("resize",p),p();class d{constructor(){this.reset()}reset(){this.x=Math.random()*s,this.y=r+100,this.vx=(Math.random()-.5)*2.5,this.vy=-Math.random()*4-2,this.size=Math.random()*3+1,this.alpha=Math.random()*.6+.3,this.life=Math.random()*150+50}update(){this.x+=this.vx,this.y+=this.vy,this.life--,this.alpha-=.003,(this.life<=0||this.alpha<=0)&&this.reset()}draw(){o.fillStyle=`rgba(255, ${80+Math.random()*120}, 0, ${this.alpha})`,o.beginPath(),o.arc(this.x,this.y,this.size,0,Math.PI*2),o.fill()}}for(let n=0;n<160;n++)l.push(new d);let c;function m(){o.clearRect(0,0,s,r),l.forEach(n=>{n.update(),n.draw()}),c=requestAnimationFrame(m)}m(),setTimeout(()=>{a.style.opacity="1",a.style.transform="scale(1)"},100),setTimeout(()=>{a.style.opacity="0",a.style.transform="scale(1.05)",a.style.filter="blur(15px)"},2200),setTimeout(()=>{i&&i(),e.style.opacity="0",setTimeout(()=>{cancelAnimationFrame(c),window.removeEventListener("resize",p),e.parentNode&&e.remove()},1e3)},3e3)}function L(){return`
        <div id="loader-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #0c0b0a; z-index: 9999; overflow: hidden; font-family: 'Inter', sans-serif;">
            <div id="loader-fade" style="position: absolute; top:0; left:0; width:100%; height:100%; background:#0c0b0a; z-index: 10; pointer-events:none; transition: opacity 1s ease;"></div>
            
            <!-- TEMPORARILY DISABLED VIDEO TO REDUCE BUILD SIZE -->
            <!--
            <video id="loader-video" autoplay muted playsinline preload="auto" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%) scale(1.01); transition: transform 3.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease; z-index: 1;">
                <source src="${h("stone.mp4")}" type="video/mp4">
            </video>
            -->
            <div style="position: absolute; inset: 0; background: #0c0b0a; z-index: 1;"></div>

            <!-- DARK OVERLAY -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%); z-index: 2; pointer-events: none;"></div>

            <!-- LOGO IN LOADER -->
            <div class="loader-logo-container" style="position: absolute; top: 2rem; left: 8%; z-index: 4;">
                <img src="${h("logo.png")}" alt="Stone Oven" class="loader-logo-img" style="width: clamp(100px, 20vw, 140px); height: auto; opacity: 0.9; filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));">
            </div>

            <!-- PREMIUM UI RECREATION -->
            <div id="ui-top-left" class="loader-desktop-ui" style="position: absolute; top: 10%; left: 8%; z-index: 3; color: #fff; pointer-events: none; opacity: 0.8; transition: opacity 0.5s ease;">
                <div style="color: #f46a25; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 5px; opacity: 0.6;">Surface Material</div>
                <div style="color: #ffffff; font-size: 1.1rem; font-weight: 300; letter-spacing: 0.05em; font-family: 'Space Grotesk', sans-serif;">Authentic Firebrick & Stone</div>
            </div>

            <div id="ui-top-right" class="loader-desktop-ui" style="position: absolute; top: 10%; right: 8%; z-index: 3; color: #fff; pointer-events: none; text-align: right; opacity: 0.8; transition: opacity 0.5s ease;">
                <div style="color: #f46a25; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 5px; opacity: 0.6;">Heritage</div>
                <div style="color: #ffffff; font-size: 1.1rem; font-weight: 300; letter-spacing: 0.05em; font-family: 'Space Grotesk', sans-serif;">Baking Since 2018</div>
            </div>
            
            <div id="loader-ui" style="position: absolute; bottom: 8%; left: 8%; width: 84%; z-index: 3; color: #fff; pointer-events: none; transition: all 1s ease;">
                <div style="color: #f46a25; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 10px; opacity: 0.8;">Maharashtra's Finest</div>
                <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px;">
                    <h1 style="font-family: 'Space Grotesk', sans-serif; font-weight: 400; font-size: clamp(2.5rem, 8vw, 4.5rem); margin: 0; letter-spacing: -0.04em; line-height: 0.9;">Baking<span style="color: #f46a25; font-weight: 700;">.</span></h1>
                    <div style="font-size: clamp(2.5rem, 10vw, 4rem); font-weight: 200; line-height: 0.8; font-family: 'Space Grotesk', sans-serif;"><span id="loader-perc">0</span><span style="font-size: 1rem; color: #f46a25; font-weight: 700; margin-left: 2px;">%</span></div>
                </div>
                
                <div style="width: 100%; height: 1px; background: rgba(255,255,255,0.05); position: relative; margin-bottom: 25px;">
                    <div id="loader-progress" style="position: absolute; top: -1px; left: 0; height: 3px; width: 0%; background: #f46a25; box-shadow: 0 0 15px rgba(244,106,37,0.6); transition: width 0.1s linear;"></div>
                    <div id="loader-dot" style="position: absolute; top: 0px; left: 0%; width: 10px; height: 10px; background: #fff; border-radius: 50%; transform: translate(-50%, -50%); box-shadow: 0 0 20px #f46a25, 0 0 40px rgba(244,106,37,0.4); transition: left 0.1s linear;"></div>
                </div>

                <div style="display: flex; gap: 30px; font-size: 0.6rem; font-weight: 800; letter-spacing: 0.15em; color: #666; font-family: 'Space Grotesk', sans-serif;">
                    <div><span style="color: #f46a25; margin-right: 8px;">●</span> CINEMATIC OVERVIEW</div>
                    <div class="loader-desktop-ui"><span id="load-status" style="color: #333; margin-right: 8px;">●</span> AUTHENTIC CRAFT</div>
                </div>
            </div>

            <style>
                @media (max-width: 768px) {
                    .loader-desktop-ui { display: none !important; }
                    #loader-ui { bottom: 12% !important; }
                }
            </style>
        </div>
    `}function M(i){const e=document.getElementById("loader-video"),a=document.getElementById("loader-container"),t=document.getElementById("loader-fade"),o=document.getElementById("loader-perc"),s=document.getElementById("loader-progress"),r=document.getElementById("loader-dot"),l=document.getElementById("loader-ui"),p=document.getElementById("ui-top-left"),d=document.getElementById("ui-top-right"),c=document.getElementById("load-status");if(!e)return;const m=window.innerWidth<=768;let n=0,u=!1;window.addEventListener("load",()=>{}),e.load(),e.play().catch(b=>console.log("Video autoplay blocked",b)),setTimeout(()=>{t&&(t.style.opacity="0")},100);const v=()=>{if(u&&n>=100)return;if(n+=m?.8:.4,e.readyState>=3&&e.duration>0){const y=e.currentTime/e.duration*100;y>n&&(n=y),c&&(c.innerText="● AUTHENTIC CRAFT"),e.paused&&e.play().catch(()=>{})}else c&&(c.innerText="● BUFFERING...");n>=99.5&&(window.hero3DReady||!1||n>=100?n=100:n=99.5),n>=100&&(u||(u=!0,w())),o&&(o.innerText=Math.floor(Math.min(n,100))),s&&(s.style.width=`${Math.min(n,100)}%`),r&&(r.style.left=`${Math.min(n,100)}%`),(n<100||!u)&&requestAnimationFrame(v)};setTimeout(v,400),setTimeout(()=>{n<10&&(console.warn("Loader safety bypass triggered: Video may have failed to load."),n=100,u||(u=!0,w()))},5e3);function w(){l&&(l.style.opacity="0",l.style.transform="translateY(10px)"),p&&(p.style.opacity="0"),d&&(d.style.opacity="0"),e.style.transform="translate(-50%, -50%) scale(10)",e.style.filter="blur(15px) brightness(1.8)",setTimeout(()=>{i&&i(),a.style.transition="opacity 1s ease-out",a.style.opacity="0",setTimeout(()=>{a.remove()},1e3)},1500)}}const S="modulepreload",T=function(i){return"/Stone-Oven/"+i},E={},f=function(e,a,t){let o=Promise.resolve();if(a&&a.length>0){let p=function(d){return Promise.all(d.map(c=>Promise.resolve(c).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");o=p(a.map(d=>{if(d=T(d),d in E)return;E[d]=!0;const c=d.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":S,c||(n.as="script"),n.crossOrigin="",n.href=d,l&&n.setAttribute("nonce",l),document.head.appendChild(n),c)return new Promise((u,v)=>{n.addEventListener("load",u),n.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return o.then(r=>{for(const l of r||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},k=[{id:"virar",name:"Stone Oven Virar",address:"Cosmos Square, 2nd Floor, Rustomjee Global City, Virar West, Palghar",phone:"+91 7709900866",hours:"12:00 PM - 11:00 PM",rating:4.1,reviewCount:426,mapUrl:"https://www.google.com/maps/search/?api=1&query=Stone+Oven+Virar+West",images:{hero:h("virar.png"),gallery:[]},zomatoUrl:"https://www.zomato.com/mumbai/stone-oven-virar",menu:[{category:"Pizza",items:["BBQ Chicken Pizza","Peri Peri Chicken Pizza","Margherita"]},{category:"Pasta",items:["Chicken Lasagna","White Sauce Pasta"]},{category:"Mexican",items:["Nachos","Tacos"]},{category:"Chinese",items:["Fried Rice","Chilly Garlic Noodles"]}]},{id:"palghar",name:"Stone Oven Palghar",address:"Shop No.3, Nidhi Palace, Beside Raunak Dhaba, Near Ganpati Mandir Mahim, Vajulsar, Palghar",phone:"+91 7249392668",hours:"12:00 PM - 11:00 PM",rating:4.4,reviewCount:509,mapUrl:"https://www.google.com/maps/search/?api=1&query=Stone+Oven+Palghar",images:{hero:h("palghar.png"),gallery:[]},zomatoUrl:"https://www.zomato.com/mumbai/stone-oven-palghar/",menu:[{category:"Pizza",items:["Butter Chicken Pizza","Mexican Paneer Pizza","Tandoori Chicken Pizza"]},{category:"Italian",items:["Bruschetta","Garlic Bread"]}]},{id:"boisar",name:"Stone Oven Boisar",address:"Shop No. 11 & 12, Opposite Don Bosco School, Khodaram Baug, West, Boisar, Palghar",phone:"+91 8668372536",hours:"12:00 PM - 11:00 PM",rating:4.1,reviewCount:98,mapUrl:"https://maps.app.goo.gl/KGwJ4v3UrEPDogsR9",images:{hero:h("boisar1.jpg"),gallery:[]},zomatoUrl:"coming_soon",menu:[{category:"Pizza",items:["Meat Feast Pizza","Cheese Corn Paradise","Peri Peri Paneer"]},{category:"Sandwiches",items:["BBQ Chicken Sandwich","Garden Vegetable Sandwich"]},{category:"Salads",items:["Asian Chicken Salad","Classic Caesar"]}]},{id:"vasai",name:"Stone Oven Vasai",address:"Shop No-11, Pearl B Palm Infra, A Wing, opposite Chimaji Appa Ground, Koliwada, Vasai West",phone:"+91 9145321000",hours:"12:00 PM - 11:00 PM",rating:4.3,reviewCount:200,mapUrl:"https://www.google.com/maps/search/?api=1&query=Stone+Oven+Vasai+West",images:{hero:h("vasai.jpg"),gallery:[]},zomatoUrl:"https://www.zomato.com/mumbai/stone-oven-vasai/",menu:[{category:"Specialties",items:["Korean Fried Bao","Pineapple & Watermelon Chatpata"]},{category:"Chinese",items:["Chicken Chilly Garlic Fried Rice","Veg Manchurian"]},{category:"Pizza",items:["Peri Peri Chicken Pizza","Pesto Chicken Pizza"]}]},{id:"thane",name:"Stone Oven Thane",address:"Naupada, Near Malhar Talkies, Thane West, Maharashtra 400602",phone:"+91 7506036868",hours:"12:00 PM - 11:00 PM",rating:4.1,reviewCount:328,mapUrl:"https://maps.app.goo.gl/aHFgCrWnPMTWauda6",images:{hero:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",gallery:[]},zomatoUrl:"https://www.zomato.com/mumbai/stone-oven-1-naupada-thane-west",menu:[{category:"Pizza",items:["BBQ Paneer Pizza","Veg Cherry Tomato Pizza"]},{category:"Risotto",items:["Risotto in Pesto Sauce","Mushroom Risotto"]},{category:"Desserts",items:["Chocolate Brownie","Shakes"]}]}];function P(){const i={threshold:.1},e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("active")})},i);document.querySelectorAll(".reveal").forEach(t=>e.observe(t))}function O(){const i=()=>{const e=window.location.hash.slice(1)||"/",a=document.getElementById("app"),t=document.querySelector(".navbar");document.body.style.overflow="",document.documentElement.style.overflow="",t&&t.classList.remove("nav-hidden"),window.scrollTo(0,0),e==="/"?g("home"):e==="/locations"?g("locations"):e==="/menu"?g("menu"):e==="/gallery"?g("gallery"):e==="/about"?g("about"):a.innerHTML="<h1>404 - Page Not Found</h1>"};window.addEventListener("hashchange",i),i()}async function g(i,e){const a=document.getElementById("app");try{let t;i==="home"?(t=await f(()=>import("./Home.js"),__vite__mapDeps([0,1,2])),a.innerHTML=t.renderHome()):i==="locations"?(t=await f(()=>import("./Locations.js"),__vite__mapDeps([3,2,4,1])),a.innerHTML=t.renderLocations()):i==="menu"?(t=await f(()=>import("./Menu.js"),__vite__mapDeps([5,2,1])),a.innerHTML=t.renderMenu()):i==="gallery"?(t=await f(()=>import("./Gallery.js"),[]),a.innerHTML=t.renderGallery()):i==="about"&&(t=await f(()=>import("./About.js"),__vite__mapDeps([6,4,1])),a.innerHTML=t.renderAbout()),t&&t.init&&t.init(),t&&t.initGallery&&t.initGallery(),P()}catch(t){console.error("Failed to load page:",t),a.innerHTML="<h1>Error loading page</h1>"}}function B(){const i=document.getElementById("navbar");i.innerHTML=`
        <nav class="navbar">
            <div class="nav-container">
                <a href="#/" class="logo">
                    <img src="${h("logo.png")}" alt="Stone Oven Logo" class="nav-logo-img">
                </a>
                
                <div class="mobile-menu-toggle" id="mobile-toggle" style="display: none;">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul class="nav-links" id="nav-links">
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/locations">Our Outlets</a></li>
                    <li><a href="#/menu">Menu</a></li>
                    <li><a href="#/gallery">Gallery</a></li>
                    <li><a href="#/about">About Us</a></li>
                </ul>
            </div>
        </nav>
    `;const e=document.getElementById("mobile-toggle"),a=document.getElementById("nav-links"),t=a.querySelectorAll("a");e&&e.addEventListener("click",()=>{e.classList.toggle("active"),a.classList.toggle("active"),document.body.style.overflow=a.classList.contains("active")?"hidden":""}),t.forEach(o=>{o.addEventListener("click",()=>{e.classList.remove("active"),a.classList.remove("active"),document.body.style.overflow=""})}),window.addEventListener("scroll",()=>{const o=i.querySelector(".navbar");o&&(window.scrollY>50?o.classList.add("scrolled"):o.classList.remove("scrolled"))})}function I(){const i=document.getElementById("footer");i.innerHTML=`
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <img src="${h("logo.png")}" alt="Stone Oven Logo" class="footer-logo-img">
                    <p>Experience the warmth of authentic stone-oven baking across Maharashtra.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/locations">Locations</a></li>
                        <li><a href="#/menu">Our Menu</a></li>
                        <li><a href="#/about">About Us</a></li>
                    </ul>
                </div>
                <div class="footer-locations">
                    <h4>Our Outlets</h4>
                    <ul>
                        <li>Virar</li>
                        <li>Palghar</li>
                        <li>Boisar</li>
                        <li>Vasai</li>
                        <li>Thane</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Stone Oven Multi-Outlet. All rights reserved.</p>
            </div>
        </footer>
    `}document.addEventListener("DOMContentLoaded",()=>{if(window.hasLoaded)return;window.hasLoaded=!0;const i=document.getElementById("loader-root");i&&(i.innerHTML=x(),z(()=>{i.innerHTML=L(),B(),I();const e=window.innerWidth<=768;setTimeout(()=>{O()},e?100:2500),M(()=>{document.body.style.overflow="",document.getElementById("app").classList.add("loaded"),document.getElementById("navbar").classList.add("loaded"),document.getElementById("footer").classList.add("loaded"),setTimeout(()=>{P()},50)})})),document.body.style.overflow="hidden"});export{h as g,k as o};
