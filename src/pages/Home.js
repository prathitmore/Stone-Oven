import { renderHero, initHero } from '../components/Hero';
import { outlets } from '../data/outlets';
import { initTilt } from '../utils/tilt';
import { Pizza3D } from '../utils/Pizza3D';

const signatureDishes = [
    {
        id: 'dish-1',
        name: 'Butter Chicken Pizza',
        description: 'Tender tandoori chicken chunks in a rich, creamy makhani sauce.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
    },
    {
        id: 'dish-2',
        name: 'Mexican Paneer Pizza',
        description: 'Spicy paneer, bell peppers, and jalapeños with a zesty Mexican twist.',
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800'
    },
    {
        id: 'dish-3',
        name: 'BBQ Chicken Pizza',
        description: 'Smoky BBQ sauce drizzled over succulent grilled chicken and red onions.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800'
    },
    {
        id: 'dish-4',
        name: 'Pasta Alfredo',
        description: 'Classic creamy white sauce pasta with a touch of garlic and parmesan.',
        image: 'https://images.unsplash.com/photo-1645112481338-3012582f5936?w=800'
    },
    {
        id: 'dish-5',
        name: 'Loaded Nachos',
        description: 'Crispy tortilla chips topped with cheese, olives, and signature salsa.',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800'
    },
    {
        id: 'dish-6',
        name: 'Chocolate Waffles',
        description: 'Freshly baked waffles drizzled with Belgium chocolate and sprinkles.',
        image: 'https://images.unsplash.com/photo-1581024314480-bd943fcf3e8e?w=800'
    }
];

export function renderHome() {
    return `
        <div class="home-page">
            ${renderHero()}

            <!-- SECTION: DYNAMIC MARQUEE -->
            <div class="marquee-container" style="padding: 1.5rem 0; background: #ff3c00; overflow: hidden; white-space: nowrap; margin-top: -2px; position: relative; z-index: 10;">
                <div class="marquee-text" style="display: inline-block; font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.2rem; text-transform: uppercase; color: #000; letter-spacing: 0.2em; animation: scroll-left 25s linear infinite;">
                    <span>AUTHENTIC STONE-BAKED CRAFT &nbsp; // &nbsp; ITALIAN, MEXICAN & CHINESE CUISINE &nbsp; // &nbsp; MAHARASHTRA'S FINEST &nbsp; // &nbsp; BORN FROM FIRE &nbsp; // &nbsp; </span>
                    <span>AUTHENTIC STONE-BAKED CRAFT &nbsp; // &nbsp; ITALIAN, MEXICAN & CHINESE CUISINE &nbsp; // &nbsp; MAHARASHTRA'S FINEST &nbsp; // &nbsp; BORN FROM FIRE &nbsp; // &nbsp; </span>
                </div>
            </div>

            <!-- SECTION: THE HERITAGE (Factual Branding) -->
            <section class="heritage-section reveal" style="padding: 12vw 5%; background: #080808; display: grid; grid-template-columns: 1fr 1fr; gap: 8vw; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.03);">
                <div class="heritage-visual" style="position: relative;">
                    <img src="https://images.unsplash.com/photo-1517686469429-8bc88b9f907c?w=1000" style="width: 100%; height: 60vh; object-fit: cover; border-radius: 2px; filter: contrast(1.1) brightness(0.8);" alt="Stone Oven Interior">
                    <div style="position: absolute; top: -20px; right: -20px; width: 150px; height: 150px; border-top: 1px solid #ff3c00; border-right: 1px solid #ff3c00; opacity: 0.4;"></div>
                </div>
                <div class="heritage-content">
                    <div style="color: #ff3c00; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.4em; border-left: 2px solid #ff3c00; padding-left: 20px; margin-bottom: 2rem; font-weight: 800;">Our Regional Legacy</div>
                    <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(3rem, 6vw, 6rem); line-height: 1.1; margin-bottom: 2.5rem; color: #fff;">Premium Dining across <br><em style="font-style: italic; color: #ff3c00;">Maharashtra</em></h2>
                    <p style="font-size: 1.15rem; color: rgba(255,255,255,0.6); line-height: 1.8; margin-bottom: 3rem; font-weight: 300;">
                        Stone Oven began with a simple vision: to bring world-class stone-baked flavors to Maharashtra's most vibrant hubs. From the heart of Palghar to the bustling settings of Virar, Vasai, Thane, and Boisar, we celebrate the authentic warmth and character of traditional oven baking across every destination.
                    </p>
                    <div style="display: flex; gap: 40px;">
                        <div>
                            <div style="color: #fff; font-size: 1.5rem; font-family: 'Playfair Display', serif;">4+ Cuisines</div>
                            <div style="font-size: 0.6rem; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px;">Diverse Menu</div>
                        </div>
                        <div>
                            <div style="color: #fff; font-size: 1.5rem; font-family: 'Playfair Display', serif;">5 Outlets</div>
                            <div style="font-size: 0.6rem; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px;">Maharashtrian Roots</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION: SIGNATURE SELECTIONS (3D PIZZA INTERACTION) -->
            <section class="signature-section reveal" style="padding: 10vw 0; background: #000;">
                <div style="padding: 0 5%; margin-bottom: 5vw; display: flex; justify-content: space-between; align-items: flex-end;">
                    <div>
                        <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2rem, 5vw, 5rem); letter-spacing: -0.04em; margin: 0; text-transform: uppercase; color: #fff; font-weight: 900;">Curated</h2>
                        <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(3rem, 7vw, 7rem); color: #ff3c00; font-style: italic; font-weight: 400; margin-top: -10px;">Selections</h2>
                    </div>
                    <div style="max-width: 400px; text-align: right; margin-bottom: 1rem;">
                        <p style="color: rgba(255,255,255,0.4); font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Hover to see the craft in 3D details.</p>
                    </div>
                </div>
                
                <div class="mega-list">
                    ${signatureDishes.map((dish, i) => `
                        <div id="${dish.id}-item" class="mega-list-item reveal" style="padding: 4vw 5%; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: ${i === signatureDishes.length - 1 ? '1px' : '0'} solid rgba(255,255,255,0.05); display: grid; grid-template-columns: 1fr 300px 1fr; align-items: center; position: relative; overflow: visible; cursor: pointer; transition: all 0.4s ease;">
                            <div style="display: flex; align-items: baseline; gap: 30px; position: relative; z-index: 2;">
                                <span style="font-family: 'Playfair Display', serif; color: #ff3c00; font-style: italic; font-size: 1.5rem; opacity: 0.4;">0${i+1}</span>
                                <h3 style="font-family: 'Inter', sans-serif; font-size: clamp(1.8rem, 3.5vw, 3.5rem); font-weight: 900; text-transform: uppercase; letter-spacing: -0.03em; margin: 0; color: #fff;">${dish.name}</h3>
                            </div>
                            
                            <!-- 3D PIZZA CONTAINER -->
                            <div id="${dish.id}-canvas" class="pizza-3d-container" style="width: 300px; height: 300px; margin: 0 auto; opacity: 0; transform: scale(0.8); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); pointer-events: none;"></div>
                            
                            <p style="text-align: right; color: #777; font-size: 0.95rem; font-weight: 300; position: relative; z-index: 2;">${dish.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
            
            <!-- SECTION: DESTINATION PORTFOLIO -->
            <section class="featured-section reveal" style="padding: 12vw 5%; background: #0a0a0a; border-top: 1px solid rgba(255,255,255,0.02);">
                <div style="text-align: center; margin-bottom: 8vw;">
                    <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(3rem, 6vw, 6rem); text-transform: uppercase; letter-spacing: -0.04em; color: #fff; font-weight: 900; line-height: 0.8;">OUR</h2>
                    <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(3.5rem, 8vw, 8rem); color: #ff3c00; font-style: italic; font-weight: 400; margin-top: 5px;">Destinations</h2>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                    ${outlets.slice(0, 4).map((outlet, i) => `
                        <div class="destination-card reveal" style="position: relative; height: 70vh; overflow: hidden; border-radius: 2px; cursor: pointer;">
                            <img src="${outlet.images.hero}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);" alt="${outlet.name}">
                            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%);"></div>
                            <div style="position: absolute; bottom: 3rem; left: 3rem; right: 3rem;">
                                <div style="color: #ff3c00; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 10px; font-weight: 800;">Outlet 0${i+1}</div>
                                <h3 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #fff; margin-bottom: 0.5rem;">${outlet.name}</h3>
                                <p style="color: rgba(255,255,255,0.5); font-size: 0.85rem; letter-spacing: 0.05em;">${outlet.address}</p>
                                <div style="margin-top: 2rem;">
                                    <a href="#/outlet/${outlet.id}" class="btn-premium-outline" style="padding: 0.8rem 1.5rem; font-size: 0.7rem;">View Outlet</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: center; margin-top: 6vw;">
                    <a href="#/locations" class="btn-premium">View All Locations</a>
                </div>
            </section>

            <!-- SECTION: FINAL CTA -->
            <section class="cta-section reveal" style="padding: 15vw 5%; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(circle at center, rgba(255, 60, 0, 0.1), transparent 70%);">
                <div style="color: #ff3c00; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.6em; margin-bottom: 3rem; font-weight: 800;">Authentic Taste</div>
                <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(5rem, 12vw, 12rem); color: #fff; line-height: 0.9; font-weight: 400; letter-spacing: -0.04em;">FEEL THE <br><em style="font-style: italic; color: #ff3c00;">HEAT.</em></h2>
                <div class="cta-btns" style="margin-top: 5vw;">
                    <a href="#/locations" class="btn-primary" style="padding: 1.5rem 4rem; font-size: 0.9rem;">Order Now</a>
                </div>
            </section>
        </div>
    `;
}

export function init() {
    initHero();
    initTilt();
    
    // Initialize 3D Pizza interactions
    signatureDishes.forEach(dish => {
        const container = document.getElementById(`${dish.id}-canvas`);
        if (container) {
            new Pizza3D(`${dish.id}-canvas`, dish.name);
            
            const item = document.getElementById(`${dish.id}-item`);
            item.addEventListener('mouseenter', () => {
                container.style.opacity = '1';
                container.style.transform = 'scale(1)';
            });
            item.addEventListener('mouseleave', () => {
                container.style.opacity = '0';
                container.style.transform = 'scale(0.8)';
            });
        }
    });
}
