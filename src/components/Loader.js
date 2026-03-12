export function renderLoader() {
    return `
        <div id="loader-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #0c0b0a; z-index: 9999; overflow: hidden; font-family: 'Inter', sans-serif;">
            <div id="loader-fade" style="position: absolute; top:0; left:0; width:100%; height:100%; background:#0c0b0a; z-index: 10; pointer-events:none; transition: opacity 1s ease;"></div>
            
            <!-- CINEMATIC VIDEO BACKGROUND -->
            <video id="loader-video" muted playsinline loop style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%) scale(1.01); transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease; z-index: 1;">
                <source src="/stone.mp4" type="video/mp4">
            </video>

            <!-- DARK OVERLAY TO MATCH MOCKUP SHADOWS -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%); z-index: 2; pointer-events: none;"></div>

            <!-- LOGO IN LOADER -->
            <div class="loader-logo-container" style="position: absolute; top: 1.5rem; left: 2rem; z-index: 4;">
                <img src="/logo.png" alt="Stone Oven" class="nav-logo-img">
            </div>

            <!-- PREMIUM UI RECREATION -->
            <div id="ui-top-left" style="position: absolute; top: 10%; left: 8%; z-index: 3; color: #fff; pointer-events: none; opacity: 0.8; transition: opacity 0.5s ease;">
                <div style="color: #f46a25; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 5px; opacity: 0.6;">Surface Material</div>
                <div style="color: #ffffff; font-size: 1.1rem; font-weight: 300; letter-spacing: 0.05em; font-family: 'Space Grotesk', sans-serif;">Hand-Hammered Raw Copper</div>
            </div>

            <div id="ui-top-right" style="position: absolute; top: 10%; right: 8%; z-index: 3; color: #fff; pointer-events: none; text-align: right; opacity: 0.8; transition: opacity 0.5s ease;">
                <div style="color: #f46a25; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 5px; opacity: 0.6;">Heritage</div>
                <div style="color: #ffffff; font-size: 1.1rem; font-weight: 300; letter-spacing: 0.05em; font-family: 'Space Grotesk', sans-serif;">Baking Since 2018</div>
            </div>
            
            <div id="loader-ui" style="position: absolute; bottom: 8%; left: 8%; width: 84%; z-index: 3; color: #fff; pointer-events: none; transition: all 1s ease;">
                <div style="color: #f46a25; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 15px; opacity: 0.8;">Maharashtra's Finest</div>
                <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px;">
                    <h1 style="font-family: 'Space Grotesk', sans-serif; font-weight: 400; font-size: clamp(2rem, 5vw, 4.5rem); margin: 0; letter-spacing: -0.04em; line-height: 0.9;">Baking<span style="color: #f46a25; font-weight: 700;">.</span></h1>
                    <div style="font-size: 4rem; font-weight: 200; line-height: 0.8; font-family: 'Space Grotesk', sans-serif;"><span id="loader-perc">0</span><span style="font-size: 1.5rem; color: #f46a25; font-weight: 700; margin-left: 5px;">%</span></div>
                </div>
                
                <div style="width: 100%; height: 1px; background: rgba(255,255,255,0.05); position: relative; margin-bottom: 25px;">
                    <div id="loader-progress" style="position: absolute; top: -1px; left: 0; height: 3px; width: 0%; background: #f46a25; box-shadow: 0 0 15px rgba(244,106,37,0.6); transition: width 0.1s linear;"></div>
                    <div id="loader-dot" style="position: absolute; top: 0px; left: 0%; width: 10px; height: 10px; background: #fff; border-radius: 50%; transform: translate(-50%, -50%); box-shadow: 0 0 20px #f46a25, 0 0 40px rgba(244,106,37,0.4); transition: left 0.1s linear;"></div>
                </div>

                <div style="display: flex; gap: 50px; font-size: 0.65rem; font-weight: 800; letter-spacing: 0.15em; color: #666; font-family: 'Space Grotesk', sans-serif;">
                    <div><span style="color: #f46a25; margin-right: 8px;">●</span> CINEMATIC OVERVIEW</div>
                    <div><span id="load-status" style="color: #333; margin-right: 8px;">●</span> AUTHENTIC CRAFT</div>
                </div>
            </div>

                SCENE RENDER V.6.0 - PREMIUM CINEMATIC PIPELINE
            </div>
        </div>
    `;
}

export function initLoader(onComplete) {
    const video = document.getElementById('loader-video');
    const container = document.getElementById('loader-container');
    const fade = document.getElementById('loader-fade');
    const percEl = document.getElementById('loader-perc');
    const progBar = document.getElementById('loader-progress');
    const progDot = document.getElementById('loader-dot');
    const loaderUi = document.getElementById('loader-ui');
    const uiTL = document.getElementById('ui-top-left');
    const uiTR = document.getElementById('ui-top-right');
    const loadStatus = document.getElementById('load-status');

    if (!video) return;

    // Start video playback
    video.play().catch(e => console.log("Video autoplay blocked", e));

    setTimeout(() => {
        if(fade) fade.style.opacity = '0';
    }, 100);

    let progress = 0;
    let transitionStarted = false;

    const interval = setInterval(() => {
        progress += Math.random() * 2.5;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            if (!transitionStarted) {
                transitionStarted = true;
                startTransition();
            }
        }
        
        percEl.innerText = Math.floor(progress);
        progBar.style.width = `${progress}%`;
        progDot.style.left = `${progress}%`;
    }, 40);

    function startTransition() {
        loadStatus.style.color = '#f46a25';
        
        setTimeout(() => {
            // 1. Hide UI elements
            loaderUi.style.opacity = '0';
            loaderUi.style.transform = 'translateY(10px)';
            uiTL.style.opacity = '0';
            uiTR.style.opacity = '0';

            // 2. Cinematic Deep Zoom into the fire
            video.style.transition = 'transform 3s cubic-bezier(0.16, 1, 0.3, 1), filter 3s ease';
            video.style.transform = 'translate(-50%, -50%) scale(8)';
            video.style.filter = 'blur(5px) brightness(1.5)';

            // 3. Initiate Landing Page rendering underneath (mid-zoom)
            setTimeout(() => {
                if(onComplete) onComplete();
            }, 800);

            // 4. Smoothly fade the entire loader to reveal the rendered landing page
            setTimeout(() => {
                container.style.transition = 'opacity 1.5s ease-out';
                container.style.opacity = '0';
                container.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    container.remove();
                }, 1500);
            }, 1000);
        }, 500);
    }
}
