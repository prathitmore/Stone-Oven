import { outlets } from '../data/outlets';

export function renderMenu() {
    // Collect all items by category across all outlets for a brand-wide menu
    const categories = ['Pizza', 'Pasta', 'Mexican', 'Chinese', 'Sandwiches', 'Salads', 'Desserts', 'Beverages'];
    
    const menuSections = categories.map(cat => {
        // Find all items in this category across all outlets
        const items = new Set();
        outlets.forEach(o => {
            const catData = o.menu.find(m => m.category === cat || m.category === cat.toLowerCase());
            if (catData) catData.items.forEach(i => items.add(i));
        });

        if (items.size === 0) return '';

        return `
            <div class="menu-brand-section">
                <h2>${cat}</h2>
                <div class="menu-items-grid">
                    ${Array.from(items).map(item => `<div class="menu-item">${item}</div>`).join('')}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="menu-page container">
            <header class="page-header">
                <h1>Our Master Menu</h1>
                <p>Handcrafted flavors served across all our outlets.</p>
                <div class="menu-note">Note: Availability may vary by location.</div>
            </header>
            <div class="brand-menu-container">
                ${menuSections}
            </div>
        </div>
    `;
}

export function init() {
    console.log('Menu Page Initialized');
}
