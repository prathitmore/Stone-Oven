import { outlets } from './data/outlets';
import { initAnimations } from './utils/animations';

// Simple Router for Vanilla JS
export function initRouter() {
    const handleRoute = () => {
        const path = window.location.hash.slice(1) || '/';
        const app = document.getElementById('app');
        
        // Scroll to top on route change
        window.scrollTo(0, 0);

        if (path === '/') {
            renderPage('home');
        } else if (path === '/locations') {
            renderPage('locations');
        } else if (path.startsWith('/outlet/')) {
            const outletId = path.split('/')[2];
            renderPage('outlet-detail', outletId);
        } else {
            app.innerHTML = '<h1>404 - Page Not Found</h1>';
        }
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Initial load
}

async function renderPage(pageId, params) {
    const app = document.getElementById('app');
    app.innerHTML = '<div class="loading">Loading...</div>';

    try {
        let module;
        if (pageId === 'home') {
            module = await import('./pages/Home');
            app.innerHTML = module.renderHome();
        } else if (pageId === 'locations') {
            module = await import('./pages/Locations');
            app.innerHTML = module.renderLocations();
        } else if (pageId === 'outlet-detail') {
            module = await import('./pages/OutletDetail');
            app.innerHTML = module.renderOutletDetail(params);
        }
        
        // Trigger any page-specific post-render logic
        if (module && module.init) module.init();
        
        // Re-initialize reveal animations for new content
        initAnimations();
        
    } catch (err) {
        console.error('Failed to load page:', err);
        app.innerHTML = '<h1>Error loading page</h1>';
    }
}
