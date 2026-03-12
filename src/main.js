import './style.css';
import { renderLoader, initLoader } from './components/Loader';
import { initRouter } from './router';
import { renderNavbar } from './components/Navbar';
import { renderFooter } from './components/Footer';
import { initAnimations } from './utils/animations';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mount Loader
    const loaderRoot = document.getElementById('loader-root');
    if (loaderRoot) {
        loaderRoot.innerHTML = renderLoader();
    }

    // 2. Hide body overflow during load
    document.body.style.overflow = 'hidden';

    // 3. Start Loader and wait for completion
    initLoader(() => {
        // Allow scrolling again
        document.body.style.overflow = '';
        
        // Render main app
        renderNavbar();
        renderFooter();
        initRouter();
        
        // Give a tiny tick for DOM to update before initializing animations
        setTimeout(() => {
            initAnimations();
        }, 50);
    });
});
