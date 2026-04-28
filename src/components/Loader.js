export function renderLoader() {
    const baseUrl = import.meta.env.BASE_URL;
    return `
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

    const isMobile = window.innerWidth <= 768;
    let progress = 0;
    let transitionStarted = false;
    let isPageLoaded = document.readyState === 'complete';
    let stallSafetyCounter = 0;

    window.addEventListener('load', () => { isPageLoaded = true; });

    // Force high-priority loading
    video.load();
    video.play().catch(e => console.log("Video autoplay blocked", e));

    setTimeout(() => { if(fade) fade.style.opacity = '0'; }, 100);

    const updateProgress = () => {
        if (transitionStarted && progress >= 100) return;

        // 1. TIMED PROGRESS (Guaranteed movement)
        // Increment by a small amount every frame
        const increment = isMobile ? 0.8 : 0.4; 
        progress += increment;

        // 2. VIDEO SYNC (Optional overlay)
        if (video.readyState >= 3 && video.duration > 0) {
            const videoProgress = (video.currentTime / video.duration) * 100;
            // If video is further ahead, jump to its progress
            if (videoProgress > progress) progress = videoProgress;
            if (loadStatus) loadStatus.innerText = '● AUTHENTIC CRAFT';
            if (video.paused) video.play().catch(() => {});
        } else {
            if (loadStatus) loadStatus.innerText = '● BUFFERING...';
        }

        // 3. CAP AT 99% UNTIL 3D IS READY
        if (progress >= 99.5) {
            const is3DReady = window.hero3DReady || false;
            if (is3DReady || progress >= 100) {
                progress = 100;
            } else {
                progress = 99.5;
            }
        }

        if (progress >= 100) {
            if (!transitionStarted) {
                transitionStarted = true;
                startTransition();
            }
        }

        if (percEl) percEl.innerText = Math.floor(Math.min(progress, 100));
        if (progBar) progBar.style.width = `${Math.min(progress, 100)}%`;
        if (progDot) progDot.style.left = `${Math.min(progress, 100)}%`;

        if (progress < 100 || !transitionStarted) {
            requestAnimationFrame(updateProgress);
        }
    };

    setTimeout(updateProgress, 400);

    // SAFETY BYPASS: If stuck at 0% for too long (video failed)
    setTimeout(() => {
        if (progress < 10) {
            console.warn("Loader safety bypass triggered: Video may have failed to load.");
            progress = 100;
            if (!transitionStarted) {
                transitionStarted = true;
                startTransition();
            }
        }
    }, 5000);

    function startTransition() {
        if (loaderUi) { loaderUi.style.opacity = '0'; loaderUi.style.transform = 'translateY(10px)'; }
        if (uiTL) uiTL.style.opacity = '0';
        if (uiTR) uiTR.style.opacity = '0';

        video.style.transform = 'translate(-50%, -50%) scale(10)';
        video.style.filter = 'blur(15px) brightness(1.8)';

        setTimeout(() => {
            if (onComplete) onComplete();
            container.style.transition = 'opacity 1s ease-out';
            container.style.opacity = '0';
            setTimeout(() => { container.remove(); }, 1000);
        }, 1500); 
    }
}
