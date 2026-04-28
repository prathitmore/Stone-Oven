import './style.css';
import { renderSplash, initSplash } from './components/Splash';
import { renderLoader, initLoader } from './components/Loader';
import { initRouter } from './router';
import { renderNavbar } from './components/Navbar';
import { renderFooter } from './components/Footer';
import { initAnimations } from './utils/animations';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Prevent re-loading if already in an SPA session
    if (window.hasLoaded) return;
    window.hasLoaded = true;

    // 2. Mount & Start Splash
    const loaderRoot = document.getElementById('loader-root');
    if (loaderRoot) {
        loaderRoot.innerHTML = renderSplash();
        
        initSplash(() => {
            // 3. Start Loader
            loaderRoot.innerHTML = renderLoader();
            
            // 4. PRE-RENDER APP IN BACKGROUND (Staggered to prevent lag)
            // Start Navbar/Footer immediately
            renderNavbar();
            renderFooter();
            
            // Delay the heavy 3D engine (Pushed later on desktop to ensure video smoothness)
            const isMobile = window.innerWidth <= 768;
            setTimeout(() => {
                initRouter();
            }, isMobile ? 100 : 2500); 
            
            initLoader(() => {
                // Done loading - Reveal the rendered app (which is now ready in the background)
                document.body.style.overflow = '';
                
                setTimeout(() => {
                    initAnimations();
                }, 50);
            });
        });
    }

    // 4. Hide body overflow during load
    document.body.style.overflow = 'hidden';
});
