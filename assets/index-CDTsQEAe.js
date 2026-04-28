const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BWSjP1Tt.js","assets/three.module-DRDOGXzl.js","assets/tilt-fQ6J8_vA.js","assets/Locations-DfPlOt67.js","assets/HeatFlow-nij2Dcjl.js","assets/Menu-DmBCb0xB.js","assets/About-CqXCqtbN.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function x(){return`
        <div id="splash-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #000; z-index: 10000; display: flex; align-items: center; justify-content: center; overflow: hidden; opacity: 1; transition: opacity 1s ease;">
            <!-- EMBER BACKGROUND CANVAS -->
            <canvas id="splash-embers" style="position: absolute; top:0; left:0; width:100%; height:100%;"></canvas>
            
            <!-- LOGO -->
            <div id="splash-logo-wrap" style="position: relative; z-index: 2; opacity: 0; transform: scale(0.9); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);">
                <img src="logo.png" alt="Stone Oven" style="width: clamp(300px, 40vw, 550px); height: auto; filter: drop-shadow(0 0 50px rgba(255, 60, 0, 0.4));">
            </div>

            <!-- GLOW OVERLAY -->
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255, 60, 0, 0.08) 0%, transparent 70%); pointer-events: none; z-index: 1;"></div>
        </div>
    `}function L(o){const e=document.getElementById("splash-container"),n=document.getElementById("splash-logo-wrap"),t=document.getElementById("splash-embers");if(!e||!n||!t){o&&o();return}const i=t.getContext("2d");let r,f;const c=[];function l(){r=t.width=window.innerWidth,f=t.height=window.innerHeight}window.addEventListener("resize",l),l();class m{constructor(){this.reset()}reset(){this.x=Math.random()*r,this.y=f+100,this.vx=(Math.random()-.5)*2.5,this.vy=-Math.random()*4-2,this.size=Math.random()*3+1,this.alpha=Math.random()*.6+.3,this.life=Math.random()*150+50}update(){this.x+=this.vx,this.y+=this.vy,this.life--,this.alpha-=.003,(this.life<=0||this.alpha<=0)&&this.reset()}draw(){i.fillStyle=`rgba(255, ${80+Math.random()*120}, 0, ${this.alpha})`,i.beginPath(),i.arc(this.x,this.y,this.size,0,Math.PI*2),i.fill()}}for(let a=0;a<160;a++)c.push(new m);let s;function u(){i.clearRect(0,0,r,f),c.forEach(a=>{a.update(),a.draw()}),s=requestAnimationFrame(u)}u(),setTimeout(()=>{n.style.opacity="1",n.style.transform="scale(1)"},100),setTimeout(()=>{n.style.opacity="0",n.style.transform="scale(1.05)",n.style.filter="blur(15px)"},2200),setTimeout(()=>{o&&o(),e.style.opacity="0",setTimeout(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",l),e.parentNode&&e.remove()},1e3)},3e3)}function T(){return`
        <div id="loader-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #0c0b0a; z-index: 9999; overflow: hidden; font-family: 'Inter', sans-serif;">
            <div id="loader-fade" style="position: absolute; top:0; left:0; width:100%; height:100%; background:#0c0b0a; z-index: 10; pointer-events:none; transition: opacity 1s ease;"></div>
            
            <!-- CINEMATIC VIDEO BACKGROUND -->
            <video id="loader-video" muted playsinline preload="auto" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%) scale(1.01); transition: transform 3.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease; z-index: 1;">
                <source src="stone.mp4" type="video/mp4">
            </video>

            <!-- DARK OVERLAY -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%); z-index: 2; pointer-events: none;"></div>

            <!-- LOGO IN LOADER -->
            <div class="loader-logo-container" style="position: absolute; top: 2rem; left: 8%; z-index: 4;">
                <img src="logo.png" alt="Stone Oven" class="loader-logo-img" style="width: clamp(100px, 20vw, 140px); height: auto; opacity: 0.9; filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));">
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
    `}function I(o){const e=document.getElementById("loader-video"),n=document.getElementById("loader-container"),t=document.getElementById("loader-fade"),i=document.getElementById("loader-perc"),r=document.getElementById("loader-progress"),f=document.getElementById("loader-dot"),c=document.getElementById("loader-ui"),l=document.getElementById("ui-top-left"),m=document.getElementById("ui-top-right"),s=document.getElementById("load-status");if(!e)return;const u=window.innerWidth<=768;let a=0,d=!1,y=0;window.addEventListener("load",()=>{}),e.load(),e.play().catch(v=>console.log("Video autoplay blocked",v)),setTimeout(()=>{t&&(t.style.opacity="0")},100);const p=()=>{if(!(d&&a>=100)){if(u){if(e.readyState<2){requestAnimationFrame(p);return}e.paused&&e.play().catch(()=>{}),a+=Math.random()*.8+.4}else{if(e.readyState<3){s&&(s.innerText="● BUFFERING..."),requestAnimationFrame(p);return}e.paused&&e.play().catch(()=>{}),s&&(s.innerText="● AUTHENTIC CRAFT"),e.duration>0?(a=Math.max(a,e.currentTime/e.duration*100),(e.ended||e.currentTime>=e.duration-.1)&&(a=100)):a+=.3}if(a>=100){d||(d=!0,w());const v=window.hero3DReady||!1;y++,v||y>120?a=100:(a=99.9,s&&(s.innerText="● PREPARING..."))}i&&(i.innerText=Math.floor(a)),r&&(r.style.width=`${a}%`),f&&(f.style.left=`${a}%`),(a<100||!d)&&requestAnimationFrame(p)}};setTimeout(p,400),setTimeout(()=>{a<10&&(console.warn("Loader safety bypass triggered: Video may have failed to load."),a=100,d||(d=!0,w()))},5e3);function w(){c&&(c.style.opacity="0",c.style.transform="translateY(10px)"),l&&(l.style.opacity="0"),m&&(m.style.opacity="0"),e.style.transform="translate(-50%, -50%) scale(10)",e.style.filter="blur(15px) brightness(1.8)",setTimeout(()=>{o&&o(),n.style.transition="opacity 1s ease-out",n.style.opacity="0",setTimeout(()=>{n.remove()},1e3)},1500)}}const O="modulepreload",M=function(o){return"/Stone-Oven/"+o},b={},h=function(e,n,t){let i=Promise.resolve();if(n&&n.length>0){let m=function(s){return Promise.all(s.map(u=>Promise.resolve(u).then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))};var f=m;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");i=m(n.map(s=>{if(s=M(s),s in b)return;b[s]=!0;const u=s.endsWith(".css"),a=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":O,u||(d.as="script"),d.crossOrigin="",d.href=s,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((y,p)=>{d.addEventListener("load",y),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return i.then(c=>{for(const l of c||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};function E(){const o={threshold:.1},e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&i.target.classList.add("active")})},o);document.querySelectorAll(".reveal").forEach(t=>e.observe(t))}function A(){const o=()=>{const e=window.location.hash.slice(1)||"/",n=document.getElementById("app"),t=document.querySelector(".navbar");document.body.style.overflow="",document.documentElement.style.overflow="",t&&t.classList.remove("nav-hidden"),window.scrollTo(0,0),e==="/"?g("home"):e==="/locations"?g("locations"):e==="/menu"?g("menu"):e==="/gallery"?g("gallery"):e==="/about"?g("about"):n.innerHTML="<h1>404 - Page Not Found</h1>"};window.addEventListener("hashchange",o),o()}async function g(o,e){const n=document.getElementById("app");try{let t;o==="home"?(t=await h(()=>import("./Home-BWSjP1Tt.js"),__vite__mapDeps([0,1,2])),n.innerHTML=t.renderHome()):o==="locations"?(t=await h(()=>import("./Locations-DfPlOt67.js"),__vite__mapDeps([3,1,2,4])),n.innerHTML=t.renderLocations()):o==="menu"?(t=await h(()=>import("./Menu-DmBCb0xB.js"),__vite__mapDeps([5,1,2])),n.innerHTML=t.renderMenu()):o==="gallery"?(t=await h(()=>import("./Gallery-fc_yI4cI.js"),[]),n.innerHTML=t.renderGallery()):o==="about"&&(t=await h(()=>import("./About-CqXCqtbN.js"),__vite__mapDeps([6,1,4])),n.innerHTML=t.renderAbout()),t&&t.init&&t.init(),t&&t.initGallery&&t.initGallery(),E()}catch(t){console.error("Failed to load page:",t),n.innerHTML="<h1>Error loading page</h1>"}}function S(){const o=document.getElementById("navbar");o.innerHTML=`
        <nav class="navbar">
            <div class="nav-container">
                <a href="#/" class="logo">
                    <img src="logo.png" alt="Stone Oven Logo" class="nav-logo-img">
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
    `;const e=document.getElementById("mobile-toggle"),n=document.getElementById("nav-links"),t=n.querySelectorAll("a");e&&e.addEventListener("click",()=>{e.classList.toggle("active"),n.classList.toggle("active"),document.body.style.overflow=n.classList.contains("active")?"hidden":""}),t.forEach(i=>{i.addEventListener("click",()=>{e.classList.remove("active"),n.classList.remove("active"),document.body.style.overflow=""})}),window.addEventListener("scroll",()=>{const i=o.querySelector(".navbar");i&&(window.scrollY>50?i.classList.add("scrolled"):i.classList.remove("scrolled"))})}function B(){const o=document.getElementById("footer");o.innerHTML=`
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <img src="logo.png" alt="Stone Oven Logo" class="footer-logo-img">
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
    `}document.addEventListener("DOMContentLoaded",()=>{if(window.hasLoaded)return;window.hasLoaded=!0;const o=document.getElementById("loader-root");o&&(o.innerHTML=x(),L(()=>{o.innerHTML=T(),S(),B();const e=window.innerWidth<=768;setTimeout(()=>{A()},e?100:2500),I(()=>{document.body.style.overflow="",document.getElementById("app").classList.add("loaded"),document.getElementById("navbar").classList.add("loaded"),document.getElementById("footer").classList.add("loaded"),setTimeout(()=>{E()},50)})})),document.body.style.overflow="hidden"});
