import { outlets } from '../data/outlets';
import { initTilt } from '../utils/tilt';

export function renderLocations() {
    const outletCards = outlets.map(outlet => `
        <div class="outlet-card location-page-card premium-card reveal">
            <div class="card-img" style="background-image: url('${outlet.images.hero}')"></div>
            <div class="card-content">
                <div class="card-header">
                    <h3>${outlet.name}</h3>
                    <span class="rating">★ ${outlet.rating}</span>
                </div>
                <p class="address">${outlet.address}</p>
                <p class="hours">Open: ${outlet.hours}</p>
                
                <div class="card-actions">
                    <a href="tel:${outlet.phone || '#'}" class="btn-icon" title="Call Now">📞</a>
                    <a href="${outlet.mapUrl}" target="_blank" class="btn-icon" title="Directions">📍</a>
                    <a href="#/outlet/${outlet.id}" class="btn-text">View Menu</a>
                </div>
                
                <div class="card-footer-btns">
                    <a href="#/outlet/${outlet.id}" class="btn-primary-sm">View Details</a>
                    <button class="btn-outline-sm">Order Online</button>
                </div>
            </div>
            <div class="card-glow"></div>
        </div>
    `).join('');

    return `
        <div class="locations-page">
            <header class="page-header container">
                <h1>Our Outlets</h1>
                <p>Find the warmth of Stone Oven near you.</p>
            </header>
            
            <section class="locations-grid container">
                ${outletCards}
            </section>
        </div>
    `;
}

export function init() {
    initTilt();
}
