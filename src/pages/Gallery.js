import { outlets } from '../data/outlets';

export function renderGallery() {
    // Collect all unique images from all outlets
    const allImages = outlets.flatMap(o => [
        { url: o.images.hero, outlet: o.name },
        ...o.images.gallery.map(img => ({ url: img, outlet: o.name }))
    ]);

    const galleryHtml = allImages.map(img => `
        <div class="gallery-item premium-card">
            <div class="gallery-img" style="background-image: url('${img.url}')"></div>
            <div class="gallery-overlay">
                <span>${img.outlet}</span>
            </div>
        </div>
    `).join('');

    return `
        <div class="gallery-page container">
            <header class="page-header">
                <h1>Visual Experience</h1>
                <p>A glimpse into the warmth and flavor of Stone Oven.</p>
            </header>
            <div class="gallery-grid">
                ${galleryHtml}
            </div>
        </div>
    `;
}

export function init() {
    console.log('Gallery Initialized');
}
