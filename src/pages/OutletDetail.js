import { outlets } from '../data/outlets';

export function renderOutletDetail(id) {
    const outlet = outlets.find(o => o.id === id);
    if (!outlet) return '<h1>Outlet Not Found</h1>';

    const menuHtml = outlet.menu.map(cat => `
        <div class="menu-category">
            <h3>${cat.category}</h3>
            <ul>
                ${cat.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    return `
        <div class="outlet-detail">
            <section class="outlet-hero" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('${outlet.images.hero}')">
                <div class="container">
                    <h1>${outlet.name}</h1>
                    <p>${outlet.address}</p>
                    <div class="outlet-actions">
                        <a href="tel:${outlet.phone}" class="btn-primary">Call Now</a>
                        <a href="#/locations" class="btn-outline">Back to Locations</a>
                    </div>
                </div>
            </section>
            
            <section class="outlet-info container reveal">
                <div class="info-grid">
                    <div class="menu-section">
                        <h2>Our Menu</h2>
                        <div class="menu-grid">${menuHtml}</div>
                    </div>
                    <div class="side-info">
                        <div class="hours-card premium-card">
                            <h3>Opening Hours</h3>
                            <p>${outlet.hours}</p>
                        </div>
                        <div class="location-card premium-card">
                            <h3>Find Us</h3>
                            <div class="map-placeholder">
                                <iframe src="${outlet.mapUrl}" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}

export function init() {
    console.log('Outlet Detail Initialized');
}
