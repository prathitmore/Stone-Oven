const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-ZG-5VlEH.js","assets/three.module-CioQiq5y.js","assets/tilt-fQ6J8_vA.js","assets/Locations-C-sAqqnK.js","assets/HeatFlow-DmNcmK1_.js","assets/Menu-DVYdAiiv.js","assets/About-CF-pjFCu.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function x(){return`
        <div id="splash-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #000; z-index: 10000; display: flex; align-items: center; justify-content: center; overflow: hidden; opacity: 1; transition: opacity 1s ease;">
            <!-- EMBER BACKGROUND CANVAS -->
            <canvas id="splash-embers" style="position: absolute; top:0; left:0; width:100%; height:100%;"></canvas>
            
            <!-- LOGO -->
            <div id="splash-logo-wrap" style="position: relative; z-index: 2; opacity: 0; transform: scale(0.9); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);">
                <img src="/Stone-Oven/logo.png" alt="Stone Oven" style="width: clamp(300px, 40vw, 550px); height: auto; filter: drop-shadow(0 0 50px rgba(255, 60, 0, 0.4));">
            </div>

            <!-- GLOW OVERLAY -->
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255, 60, 0, 0.08) 0%, transparent 70%); pointer-events: none; z-index: 1;"></div>
        </div>
    `}function L(i){const e=document.getElementById("splash-container"),n=document.getElementById("splash-logo-wrap"),t=document.getElementById("splash-embers");if(!e||!n||!t){i&&i();return}const o=t.getContext("2d");let a,f;const c=[];function l(){a=t.width=window.innerWidth,f=t.height=window.innerHeight}window.addEventListener("resize",l),l();class m{constructor(){this.reset()}reset(){this.x=Math.random()*a,this.y=f+100,this.vx=(Math.random()-.5)*2.5,this.vy=-Math.random()*4-2,this.size=Math.random()*3+1,this.alpha=Math.random()*.6+.3,this.life=Math.random()*150+50}update(){this.x+=this.vx,this.y+=this.vy,this.life--,this.alpha-=.003,(this.life<=0||this.alpha<=0)&&this.reset()}draw(){o.fillStyle=`rgba(255, ${80+Math.random()*120}, 0, ${this.alpha})`,o.beginPath(),o.arc(this.x,this.y,this.size,0,Math.PI*2),o.fill()}}for(let s=0;s<160;s++)c.push(new m);let r;function u(){o.clearRect(0,0,a,f),c.forEach(s=>{s.update(),s.draw()}),r=requestAnimationFrame(u)}u(),setTimeout(()=>{n.style.opacity="1",n.style.transform="scale(1)"},100),setTimeout(()=>{n.style.opacity="0",n.style.transform="scale(1.05)",n.style.filter="blur(15px)"},2200),setTimeout(()=>{i&&i(),e.style.opacity="0",setTimeout(()=>{cancelAnimationFrame(r),window.removeEventListener("resize",l),e.parentNode&&e.remove()},1e3)},3e3)}function T(){const i="/Stone-Oven/";return`
        <div id="loader-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #0c0b0a; z-index: 9999; overflow: hidden; font-family: 'Inter', sans-serif;">
            <div id="loader-fade" style="position: absolute; top:0; left:0; width:100%; height:100%; background:#0c0b0a; z-index: 10; pointer-events:none; transition: opacity 1s ease;"></div>
            
            <!-- CINEMATIC VIDEO BACKGROUND -->
            <video id="loader-video" muted playsinline preload="auto" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%) scale(1.01); transition: transform 3.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease; z-index: 1;">
                <source src="${i}stone.mp4" type="video/mp4">
            </video>

            <!-- DARK OVERLAY -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%); z-index: 2; pointer-events: none;"></div>

            <!-- LOGO IN LOADER -->
            <div class="loader-logo-container" style="position: absolute; top: 2rem; left: 8%; z-index: 4;">
                <img src="${i}logo.png" alt="Stone Oven" class="loader-logo-img" style="width: clamp(100px, 20vw, 140px); height: auto; opacity: 0.9; filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));">
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
    `}function I(i){const e=document.getElementById("loader-video"),n=document.getElementById("loader-container"),t=document.getElementById("loader-fade"),o=document.getElementById("loader-perc"),a=document.getElementById("loader-progress"),f=document.getElementById("loader-dot"),c=document.getElementById("loader-ui"),l=document.getElementById("ui-top-left"),m=document.getElementById("ui-top-right"),r=document.getElementById("load-status");if(!e)return;const u=window.innerWidth<=768;let s=0,d=!1,g=0;window.addEventListener("load",()=>{}),e.load(),e.play().catch(y=>console.log("Video autoplay blocked",y)),setTimeout(()=>{t&&(t.style.opacity="0")},100);const p=()=>{if(!(d&&s>=100)){if(u){if(e.readyState<2){requestAnimationFrame(p);return}e.paused&&e.play().catch(()=>{}),s+=Math.random()*.8+.4}else{if(e.readyState<3){r&&(r.innerText="● BUFFERING..."),requestAnimationFrame(p);return}e.paused&&e.play().catch(()=>{}),r&&(r.innerText="● AUTHENTIC CRAFT"),e.duration>0?(s=Math.max(s,e.currentTime/e.duration*100),(e.ended||e.currentTime>=e.duration-.1)&&(s=100)):s+=.3}if(s>=100){d||(d=!0,b());const y=window.hero3DReady||!1;g++,y||g>120?s=100:(s=99.9,r&&(r.innerText="● PREPARING..."))}o&&(o.innerText=Math.floor(s)),a&&(a.style.width=`${s}%`),f&&(f.style.left=`${s}%`),(s<100||!d)&&requestAnimationFrame(p)}};setTimeout(p,400),setTimeout(()=>{s<10&&(console.warn("Loader safety bypass triggered: Video may have failed to load."),s=100,d||(d=!0,b()))},5e3);function b(){c&&(c.style.opacity="0",c.style.transform="translateY(10px)"),l&&(l.style.opacity="0"),m&&(m.style.opacity="0"),e.style.transform="translate(-50%, -50%) scale(10)",e.style.filter="blur(15px) brightness(1.8)",setTimeout(()=>{i&&i(),n.style.transition="opacity 1s ease-out",n.style.opacity="0",setTimeout(()=>{n.remove()},1e3)},1500)}}const O="modulepreload",M=function(i){return"/Stone-Oven/"+i},w={},h=function(e,n,t){let o=Promise.resolve();if(n&&n.length>0){let m=function(r){return Promise.all(r.map(u=>Promise.resolve(u).then(s=>({status:"fulfilled",value:s}),s=>({status:"rejected",reason:s}))))};var f=m;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");o=m(n.map(r=>{if(r=M(r),r in w)return;w[r]=!0;const u=r.endsWith(".css"),s=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":O,u||(d.as="script"),d.crossOrigin="",d.href=r,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((g,p)=>{d.addEventListener("load",g),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})}))}function a(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return o.then(c=>{for(const l of c||[])l.status==="rejected"&&a(l.reason);return e().catch(a)})};function E(){const i={threshold:.1},e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("active")})},i);document.querySelectorAll(".reveal").forEach(t=>e.observe(t))}function A(){const i=()=>{const e=window.location.hash.slice(1)||"/",n=document.getElementById("app"),t=document.querySelector(".navbar");document.body.style.overflow="",document.documentElement.style.overflow="",t&&t.classList.remove("nav-hidden"),window.scrollTo(0,0),e==="/"?v("home"):e==="/locations"?v("locations"):e==="/menu"?v("menu"):e==="/gallery"?v("gallery"):e==="/about"?v("about"):n.innerHTML="<h1>404 - Page Not Found</h1>"};window.addEventListener("hashchange",i),i()}async function v(i,e){const n=document.getElementById("app");try{let t;i==="home"?(t=await h(()=>import("./Home-ZG-5VlEH.js"),__vite__mapDeps([0,1,2])),n.innerHTML=t.renderHome()):i==="locations"?(t=await h(()=>import("./Locations-C-sAqqnK.js"),__vite__mapDeps([3,1,2,4])),n.innerHTML=t.renderLocations()):i==="menu"?(t=await h(()=>import("./Menu-DVYdAiiv.js"),__vite__mapDeps([5,1,2])),n.innerHTML=t.renderMenu()):i==="gallery"?(t=await h(()=>import("./Gallery-KPPiTxMX.js"),[]),n.innerHTML=t.renderGallery()):i==="about"&&(t=await h(()=>import("./About-CF-pjFCu.js"),__vite__mapDeps([6,1,4])),n.innerHTML=t.renderAbout()),t&&t.init&&t.init(),t&&t.initGallery&&t.initGallery(),E()}catch(t){console.error("Failed to load page:",t),n.innerHTML="<h1>Error loading page</h1>"}}function S(){const i="/Stone-Oven/",e=document.getElementById("navbar");e.innerHTML=`
        <nav class="navbar">
            <div class="nav-container">
                <a href="#/" class="logo">
                    <img src="${i}logo.png" alt="Stone Oven Logo" class="nav-logo-img">
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
    `;const n=document.getElementById("mobile-toggle"),t=document.getElementById("nav-links"),o=t.querySelectorAll("a");n&&n.addEventListener("click",()=>{n.classList.toggle("active"),t.classList.toggle("active"),document.body.style.overflow=t.classList.contains("active")?"hidden":""}),o.forEach(a=>{a.addEventListener("click",()=>{n.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""})}),window.addEventListener("scroll",()=>{const a=e.querySelector(".navbar");a&&(window.scrollY>50?a.classList.add("scrolled"):a.classList.remove("scrolled"))})}function B(){const i="/Stone-Oven/",e=document.getElementById("footer");e.innerHTML=`
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <img src="${i}logo.png" alt="Stone Oven Logo" class="footer-logo-img">
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
    `}document.addEventListener("DOMContentLoaded",()=>{if(window.hasLoaded)return;window.hasLoaded=!0;const i=document.getElementById("loader-root");i&&(i.innerHTML=x(),L(()=>{i.innerHTML=T(),S(),B();const e=window.innerWidth<=768;setTimeout(()=>{A()},e?100:2500),I(()=>{document.body.style.overflow="",document.getElementById("app").classList.add("loaded"),document.getElementById("navbar").classList.add("loaded"),document.getElementById("footer").classList.add("loaded"),setTimeout(()=>{E()},50)})})),document.body.style.overflow="hidden"});
