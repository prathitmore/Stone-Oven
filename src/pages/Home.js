import { renderHero, initHero } from '../components/Hero';
import { outlets } from '../data/outlets';
import { initTilt } from '../utils/tilt';
import { Pizza3D, HeroPizza3D } from '../utils/Pizza3D';

const signatureDishes = [
    {
        id: 'dish-1',
        name: 'Butter Chicken Pizza',
        description: 'Tender tandoori chicken in rich makhani sauce on a stone-fired base.',
        image: 'masterpiece_pizza_1.png'
    },
    {
        id: 'dish-2',
        name: 'Mexican Paneer Pizza',
        description: 'Spicy paneer chunks, jalapeños, and bell peppers.',
        image: 'masterpiece_pizza_2.png'
    },
    {
        id: 'dish-3',
        name: 'BBQ Chicken Pizza',
        description: 'Smoky BBQ sauce reduction, soft paneer chunks.',
        image: 'masterpiece_pizza_3.png'
    }
];

export function renderHome() {
    const baseUrl = import.meta.env.BASE_URL;
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
                <div id="heritage-img-wrap" style="position: relative; perspective: 1200px;">
                    <div id="heritage-card-3d" style="position: relative; border-radius: 4px; overflow: visible; transform-style: preserve-3d; animation: float3d 6s ease-in-out infinite; transition: transform 0.1s ease;">
                        <img src="virar_drink.jpg" style="width: 100%; height: 60vh; object-fit: cover; border-radius: 4px; display: block; filter: brightness(0.85) contrast(1.1);" alt="Stone Oven Virar Outlet Drink">
                        <!-- Cinematic color grade overlay -->
                        <div style="position: absolute; inset: 0; border-radius: 4px; background: linear-gradient(135deg, rgba(255,60,0,0.12) 0%, transparent 50%, rgba(0,0,0,0.4) 100%); pointer-events: none;"></div>
                        <!-- Shimmer scan line -->
                        <div class="heritage-shimmer" style="position: absolute; inset: 0; border-radius: 4px; overflow: hidden; pointer-events: none;">
                            <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%); animation: shimmer-scan 4s ease-in-out infinite;"></div>
                        </div>
                        <!-- Badge -->
                        <div style="position: absolute; top: 1.5rem; left: 1.5rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255,60,0,0.4); padding: 0.4rem 1rem; border-radius: 2px;">
                            <span style="color: #ff3c00; font-size: 0.6rem; font-weight: 800; letter-spacing: 0.3em; text-transform: uppercase;">Virar Outlet</span>
                        </div>
                    </div>
                    <!-- Accent corners -->
                    <div style="position: absolute; top: -12px; right: -12px; width: 80px; height: 80px; border-top: 2px solid #ff3c00; border-right: 2px solid #ff3c00; opacity: 0.6; border-radius: 0 4px 0 0; z-index: 2; pointer-events:none;"></div>
                    <div style="position: absolute; bottom: -12px; left: -12px; width: 80px; height: 80px; border-bottom: 2px solid #ff3c00; border-left: 2px solid #ff3c00; opacity: 0.6; border-radius: 0 0 0 4px; z-index: 2; pointer-events:none;"></div>
                    <!-- Glow shadow -->
                    <div style="position: absolute; inset: 0; border-radius: 4px; box-shadow: 0 30px 80px rgba(255,60,0,0.2), 0 0 0 1px rgba(255,255,255,0.04); pointer-events: none;"></div>
                </div>
                <style>
                    @keyframes float3d {
                        0%, 100% { transform: rotateX(2deg) rotateY(-3deg) translateY(0px); }
                        33% { transform: rotateX(-1deg) rotateY(3deg) translateY(-12px); }
                        66% { transform: rotateX(3deg) rotateY(1deg) translateY(-6px); }
                    }
                    @keyframes shimmer-scan {
                        0% { transform: translateX(-100%) translateY(-100%); }
                        100% { transform: translateX(100%) translateY(100%); }
                    }
                </style>
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

            <!-- SECTION: THE MASTERPIECE SHOWCASE (CINEMATIC 2D) -->
            <section id="masterpiece-showcase" style="position: relative; width: 100%; min-height: 100vh; background: #050505; overflow: hidden; display: flex; align-items: center; justify-content: center; color: #fff;">
                
                <!-- Background Large Typo (Parallax Layer 1) -->
                <div id="masterpiece-bg-text" style="position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index: 1; pointer-events: none; opacity: 0.03; transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);">
                    <h1 style="font-family: 'Playfair Display', serif; font-size: 35vw; text-transform: uppercase;">Craft</h1>
                </div>

                <!-- Floating Ingredients (Parallax Layer 2) -->
                <div id="masterpiece-ingredients" style="position: absolute; inset: 0; z-index: 2; pointer-events: none; opacity: 0.4; transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);">
                    <img src="ingredients_flying.png" style="position: absolute; top: -5%; left: -5%; width: 50vw; transform: rotate(-10deg); filter: blur(2px);">
                    <img src="ingredients_flying.png" style="position: absolute; bottom: -5%; right: -5%; width: 50vw; transform: scale(-1) rotate(10deg); filter: blur(4px);">
                </div>

                <!-- Content Container (Strict Editorial Grid) -->
                <div style="position: relative; width: 100%; max-width: 1600px; height: 100%; z-index: 3; display: grid; grid-template-columns: minmax(300px, 1fr) minmax(350px, 1fr); gap: 10vw; align-items: center; padding: 0 10%;">
                    
                    <!-- Left Column: Masterpiece showcase (Left Aligned) -->
                    <div style="display: flex; align-items: center; justify-content: flex-start; min-height: 50vh;">
                        <div id="hero-pizza-wrap" style="position: relative; width: 100%; max-width: 480px; transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);">
                            <!-- The Main Pizza -->
                            <img id="masterpiece-img" src="masterpiece_pizza_1.png" style="width: 100%; border-radius: 50%; box-shadow: 0 40px 80px rgba(0,0,0,0.9), 0 0 120px rgba(255,60,0,0.1); transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
                            
                            <!-- Ornament: Rotating Text Ring (Tighter & Cleaner) -->
                            <div class="masterpiece-circle-svg-wrap" style="position: absolute; inset: -10%; border-radius: 50%; transform-origin: center; animation: spin-slow 35s linear infinite; pointer-events: none;">
                                <svg viewBox="0 0 120 120" class="masterpiece-circle-svg" style="width: 100%; height: 100%; position: absolute; inset: 0; overflow: visible; opacity: 0.6;">
                                    <path id="circlePath" d="M 60, 60 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0" fill="transparent" />
                                    <text fill="#ff3c00" font-size="2" letter-spacing="1.5" font-family="'Inter', sans-serif" font-weight="900" style="text-transform: uppercase;">
                                        <textPath href="#circlePath">AUTHENTIC & PERFECTLY BAKED PIZZA • AUTHENTIC & PERFECTLY BAKED PIZZA •&nbsp;</textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Cinematic Content (Right Aligned) -->
                    <div class="masterpiece-column" style="display: flex; flex-direction: column; gap: 3.5rem; justify-content: center; min-height: 400px;">
                        <div class="masterpiece-info">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2.5rem;">
                                <span id="masterpiece-num" style="font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #ff3c00;">01</span>
                                <div style="width: 80px; height: 1px; background: rgba(255,255,255,0.15);"></div>
                                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5em; color: rgba(255,255,255,0.4);">Signature Series</span>
                            </div>

                            <h2 id="masterpiece-title" style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 4.5vw, 4.8rem); line-height: 0.9; margin: 0; color: #fff;"></h2>
                            <p id="masterpiece-desc" style="font-size: 1.15rem; color: rgba(255,255,255,0.5); line-height: 1.9; margin-top: 2rem; max-width: 420px; font-weight: 300;"></p>
                        </div>

                        <div class="masterpiece-btn-wrap" style="margin-top: 1rem;">
                            <a href="#/menu" class="btn-premium" style="display: inline-block; padding: 1.3rem 3.5rem; background: #fff; color: #000; text-decoration: none; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.25em; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);">View All Creations</a>
                        </div>
                    </div>

                </div>

                <style>
                    @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .m-nav-item:hover { opacity: 1 !important; transform: translateY(-5px); }
                    .m-nav-item.active { opacity: 1 !important; }
                    .m-nav-item.active img { filter: contrast(1.2) brightness(1.1); }
                    .btn-premium:hover { background: #ff3c00; color: #fff; box-shadow: 0 15px 40px rgba(255,60,0,0.4); }
                </style>
            </section>

            <!-- SECTION: DESTINATION PORTFOLIO -->
            <section class="featured-section reveal" style="padding: 8vw 5% 4vw; background: #0a0a0a; border-top: 1px solid rgba(255,255,255,0.02);">
                <div style="text-align: center; margin-bottom: 6vw;">
                    <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(3rem, 6vw, 6rem); text-transform: uppercase; letter-spacing: -0.04em; color: #fff; font-weight: 900; line-height: 0.8;">OUR</h2>
                    <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(3.5rem, 8vw, 8rem); color: #ff3c00; font-style: italic; font-weight: 400; margin-top: 5px;">Outlets</h2>
                </div>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem;">
                    ${outlets.slice(0, 4).map((outlet, i) => `
                        <div class="destination-card reveal" data-tilt style="position: relative; height: 75vh; overflow: hidden; border-radius: 4px; cursor: pointer;">
                            <img src="${outlet.images.hero}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);" alt="${outlet.name}">
                            <div class="card-overlay"></div>
                            <div class="card-content-inner" style="position: absolute; bottom: 4rem; left: 4rem; right: 4rem;">
                                <div style="color: #ff3c00; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.6em; margin-bottom: 12px; font-weight: 800;">Destination 0${i+1}</div>
                                <h3 style="font-family: 'Playfair Display', serif; font-size: 3.5rem; color: #fff; margin-bottom: 0.8rem; line-height: 1;">${outlet.name.split(' ').pop()}</h3>
                                <p style="color: rgba(255,255,255,0.6); font-size: 0.9rem; letter-spacing: 0.05em; max-width: 300px; line-height: 1.6;">${outlet.address}</p>
                                <div style="margin-top: 2.5rem;">
                                    <a href="#/outlet/${outlet.id}" class="btn-premium-outline" style="padding: 1rem 2rem; font-size: 0.75rem; background: rgba(255,255,255,0.05); backdrop-filter: blur(5px);">Explore Outlet</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: center; margin-top: 4vw;">
                    <a href="#/locations" class="btn-premium">View All Outlets</a>
                </div>
            </section>

            <!-- SECTION: FINAL CTA -->
            <section class="cta-section reveal" style="position: relative; padding: 8vw 5% 12vw; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #000; overflow: hidden;">
                <!-- FIRE EMBER CANVAS -->
                <canvas id="cta-embers" style="position: absolute; top:0; left:0; width:100%; height:100%; z-index: 1; pointer-events: none; opacity: 0.6;"></canvas>
                
                <!-- GRADIENT OVERLAYS -->
                <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255, 60, 0, 0.15) 0%, transparent 80%); z-index: 2; pointer-events: none;"></div>
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, #000 0%, transparent 30%, transparent 70%, #000 100%); z-index: 2; pointer-events: none;"></div>

                <div style="position: relative; z-index: 3;">
                    <div style="color: #ff3c00; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.6em; margin-bottom: 2.5rem; font-weight: 800;">Authentic Taste</div>
                    <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(5rem, 12vw, 12rem); color: #fff; line-height: 0.9; font-weight: 400; letter-spacing: -0.04em;">FEEL THE <br><em style="font-style: italic; color: #ff3c00;">HEAT.</em></h2>
                    <div class="cta-btns" style="margin-top: 4vw;">
                        <a href="#/locations" class="btn-primary" style="padding: 1.5rem 4rem; font-size: 0.9rem;">Order Now</a>
                    </div>
                </div>
            </section>
        </div>
    `;
}

export function init() {
    const isMobile = window.innerWidth <= 768;
    initHero();
    initTilt();

    const wrap = document.getElementById('heritage-img-wrap');
    const card = document.getElementById('heritage-card-3d');
    if (wrap && card) {
        wrap.addEventListener('mousemove', (e) => {
            const rect = wrap.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.animation = 'none';
            card.style.transform = `rotateX(${-y * 18}deg) rotateY(${x * 18}deg) translateY(-8px)`;
        });
        
        // Mobile Touch support for Heritage Card
        wrap.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            const rect = wrap.getBoundingClientRect();
            const x = (touch.clientX - rect.left) / rect.width - 0.5;
            const y = (touch.clientY - rect.top) / rect.height - 0.5;
            card.style.animation = 'none';
            card.style.transform = `rotateX(${-y * 22}deg) rotateY(${x * 22}deg) translateY(-12px)`;
        }, { passive: true });

        wrap.addEventListener('mouseleave', () => {
            card.style.animation = 'float3d 6s ease-in-out infinite';
            card.style.transform = '';
        });

        wrap.addEventListener('touchend', () => {
            card.style.animation = 'float3d 6s ease-in-out infinite';
            card.style.transform = '';
        }, { passive: true });
    }

    // Destination Cards Tilt Interaction
    const destCards = document.querySelectorAll('.destination-card');
    destCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            const img = card.querySelector('img');
            const inner = card.querySelector('.card-content-inner');
            
            if (img) img.style.transform = `scale(1.15) translate(${-x * 30}px, ${-y * 30}px) rotate(${x * 2}deg)`;
            if (inner) inner.style.transform = `translate3d(${x * 25}px, ${y * 25}px, 50px)`;
            card.style.transform = `rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
        });

        // Mobile Touch Support for Destination Cards
        card.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            const rect = card.getBoundingClientRect();
            const x = (touch.clientX - rect.left) / rect.width - 0.5;
            const y = (touch.clientY - rect.top) / rect.height - 0.5;
            const img = card.querySelector('img');
            const inner = card.querySelector('.card-content-inner');
            
            card.classList.add('touch-active');
            if (img) img.style.transform = `scale(1.2) translate(${-x * 40}px, ${-y * 40}px) rotate(${x * 4}deg)`;
            if (inner) inner.style.transform = `translate3d(${x * 35}px, ${y * 35}px, 60px)`;
            card.style.transform = `rotateX(${-y * 15}deg) rotateY(${x * 15}deg) scale(1.02)`;
        }, { passive: true });

        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            const inner = card.querySelector('.card-content-inner');
            if (img) img.style.transform = '';
            if (inner) inner.style.transform = '';
            card.style.transform = '';
        });

        card.addEventListener('touchend', () => {
            const img = card.querySelector('img');
            const inner = card.querySelector('.card-content-inner');
            card.classList.remove('touch-active');
            if (img) img.style.transform = '';
            if (inner) inner.style.transform = '';
            card.style.transform = '';
        }, { passive: true });
    });

    // --- CTA EMBER ANIMATION ---
    const ctaCanvas = document.getElementById('cta-embers');
    if (ctaCanvas) {
        const ctx = ctaCanvas.getContext('2d');
        let width, height;
        const particles = [];

        function resizeCta() {
            const rect = ctaCanvas.parentElement.getBoundingClientRect();
            width = ctaCanvas.width = rect.width;
            height = ctaCanvas.height = rect.height;
        }
        window.addEventListener('resize', resizeCta);
        resizeCta();

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * width;
                this.y = height + 50;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = -Math.random() * 3 - 2;
                this.size = Math.random() * (isMobile ? 2.5 : 3.5) + 1;
                this.alpha = Math.random() * 0.7 + 0.3;
                this.life = Math.random() * (isMobile ? 150 : 250) + 100;
                this.color = Math.random() > 0.5 ? '#ff3c00' : '#ff9d00';
            }
            update() {
                this.x += this.vx + Math.sin(this.y * 0.01) * 0.5; // Turbulence
                this.y += this.vy;
                this.life--;
                this.alpha -= isMobile ? 0.004 : 0.002;
                if (this.life <= 0 || this.alpha <= 0 || this.y < -20) this.reset();
            }
            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                if (!isMobile) {
                    ctx.shadowBlur = 12;
                    ctx.shadowColor = this.color;
                }
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Extreme density: 750 particles for desktop, 200 for mobile
        const pCount = isMobile ? 200 : 750;
        for (let i = 0; i < pCount; i++) particles.push(new Particle());

        function animateCta() {
            if (!document.getElementById('cta-embers')) return;
            ctx.clearRect(0, 0, width, height);
            ctx.shadowBlur = 0; // Reset for performance
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateCta);
        }
        animateCta();
    }

    // MASTERPIECE SHOWCASE LOGIC (ULTRA-RELIABLE SCROLL LOCK)
    const masterpiece = document.getElementById('masterpiece-showcase');
    if (masterpiece) {
        const titleEl = document.getElementById('masterpiece-title');
        const descEl = document.getElementById('masterpiece-desc');
        const numEl = document.getElementById('masterpiece-num');
        const imgEl = document.getElementById('masterpiece-img');
        const bgText = document.getElementById('masterpiece-bg-text');
        const ingredients = document.getElementById('masterpiece-ingredients');
        let currentIdx = 0;
        let lastInteractionTime = 0;
        let isLocked = false;
        let masterpieceTransitionTimeout = null;

        function updateMasterpiece(idx) {
            const pizza = signatureDishes[idx];
            if (!pizza) return;
            currentIdx = idx;

            // Clear any pending transitions to prevent collision
            if (masterpieceTransitionTimeout) {
                clearTimeout(masterpieceTransitionTimeout);
            }

            // 1. Start Fade Out Phase
            const info = document.querySelector('.masterpiece-info');
            if (info) {
                info.style.opacity = '0';
                info.style.transform = 'translateY(15px)';
                info.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            }

            if (imgEl) {
                imgEl.style.opacity = '0';
                imgEl.style.transform = 'scale(0.92) rotate(-8deg)';
                imgEl.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            }

            // 2. Data Swap Phase (Mid-Transition) - Accelerated from 400ms to 200ms
            masterpieceTransitionTimeout = setTimeout(() => {
                if (titleEl) titleEl.textContent = pizza.name;
                if (descEl) descEl.textContent = pizza.description;
                if (numEl) numEl.textContent = `0${idx + 1}`;
                
                if (imgEl) {
                    const tempImg = new Image();
                    tempImg.src = pizza.image;
                    tempImg.onload = () => {
                        imgEl.src = pizza.image;
                        
                        // 3. Fade In Phase
                        if (info) {
                            info.style.opacity = '1';
                            info.style.transform = 'translateY(0)';
                        }
                        if (imgEl) {
                            imgEl.style.opacity = '1';
                            imgEl.style.transform = 'scale(1) rotate(0deg)';
                        }
                    };
                }
            }, 200);

            // 4. Background Parallax (Instant)
            if (bgText) bgText.style.transform = `translateX(${(idx - 1) * -15}vw) translateZ(0)`;
            if (ingredients) ingredients.style.transform = `translate(${(idx - 1) * -80}px, ${(idx - 1) * 50}px) rotate(${(idx - 1) * 15}deg) translateZ(0)`;
        }

        // --- THE ENGINE: MASTER SCROLL LOCK (HUMAN-CENTRIC GESTURE LOGIC) ---
        let lastExitTime = 0;
        let lockedScrollPos = 0;

        const onScroll = () => {
            if (!document.getElementById('masterpiece-showcase')) return;
            
            // EMERGENCY CLEANUP: If we're locked but body overflow isn't hidden (rare state desync)
            if (isLocked && document.body.style.overflow !== 'hidden') {
                document.body.style.overflow = 'hidden';
            }

            if (isLocked) {
                // Force-stick to the locked position if any micro-scrolling occurs
                if (Math.abs(window.scrollY - lockedScrollPos) > 10) {
                    window.scrollTo(0, lockedScrollPos);
                }
                return;
            }

            const now = Date.now();
            if (now - lastExitTime < 1000) return; // Slightly faster re-snap (1s instead of 1.5s)

            const rect = masterpiece.getBoundingClientRect();
            const sectionTop = window.pageYOffset + rect.top;
            
            // INCREASED SENSITIVITY FOR MOBILE SNAP (50% instead of 40%)
            const triggerZone = isMobile ? window.innerHeight * 0.5 : window.innerHeight * 0.4;

            // SNAP IN LOGIC
            if (rect.top < triggerZone && rect.top > -triggerZone) {
                isLocked = true;
                lockedScrollPos = sectionTop;
                
                if (isMobile) {
                    const nav = document.querySelector('.navbar');
                    if (nav) nav.classList.add('nav-hidden');
                }
                
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden';
                
                window.scrollTo(0, sectionTop);
            }
        };

        const onWheel = (e) => {
            if (!document.getElementById('masterpiece-showcase')) {
                // AUTO-CLEANUP: If we navigate away while locked, release the lock
                if (isLocked) {
                    isLocked = false;
                    document.body.style.overflow = '';
                }
                return;
            }
            if (!isLocked) return;

            const now = Date.now();
            const isScrollingDown = e.deltaY > 0;
            const isScrollingUp = e.deltaY < 0;

            if ((currentIdx === 0 && isScrollingUp) || (currentIdx === 2 && isScrollingDown)) {
                if (now - lastInteractionTime > 1100) {
                    isLocked = false;
                    const nav = document.querySelector('.navbar');
                    if (nav) nav.classList.remove('nav-hidden');
                    lastExitTime = now;
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = ''; // Unlock both
                    return;
                } else {
                    e.preventDefault();
                    return;
                }
            }

            e.preventDefault();
            if (now - lastInteractionTime < 1300) return; 

            if (isScrollingDown && currentIdx < 2) {
                lastInteractionTime = now;
                updateMasterpiece(currentIdx + 1);
            } else if (isScrollingUp && currentIdx > 0) {
                lastInteractionTime = now;
                updateMasterpiece(currentIdx - 1);
            }
        };

        // Attach to window but with clear identification
        window.removeEventListener('scroll', window._homeScrollHandler);
        window.removeEventListener('wheel', window._homeWheelHandler);
        
        window._homeScrollHandler = onScroll;
        window._homeWheelHandler = onWheel;

        window.addEventListener('scroll', onScroll);
        window.addEventListener('wheel', onWheel, { passive: false });

        // --- MOBILE TOUCH SWIPE ENGINE ---
        let touchStartY = 0;
        masterpiece.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        masterpiece.addEventListener('touchmove', (e) => {
            if (!document.getElementById('masterpiece-showcase')) return;
            if (!isLocked) return;
            e.preventDefault(); // Block default scroll when locked
        }, { passive: false });

        masterpiece.addEventListener('touchend', (e) => {
            if (!isLocked) return;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;
            const now = Date.now();

            if (Math.abs(deltaY) < 40) return; // Sensitivity

            const isScrollingDown = deltaY > 0;
            const isScrollingUp = deltaY < 0;

            const interactionCooldown = isMobile ? 600 : 1300;

            if ((currentIdx === 0 && isScrollingUp) || (currentIdx === 2 && isScrollingDown)) {
                if (now - lastInteractionTime > interactionCooldown) {
                    isLocked = false;
                    const nav = document.querySelector('.navbar');
                    if (nav) nav.classList.remove('nav-hidden');
                    lastExitTime = now;
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = ''; // Unlock both
                    return;
                }
            }

            if (now - lastInteractionTime < interactionCooldown) return;

            if (isScrollingDown && currentIdx < 2) {
                lastInteractionTime = now;
                updateMasterpiece(currentIdx + 1);
            } else if (isScrollingUp && currentIdx > 0) {
                lastInteractionTime = now;
                updateMasterpiece(currentIdx - 1);
            }
        });

        // Mouse Tilt Interaction (Disable if mobile)
        if (!isMobile) {
            masterpiece.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 40;
                const y = (clientY / window.innerHeight - 0.5) * 40;
                if (pizzaWrap) pizzaWrap.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${-y/2}deg) rotateY(${x/2}deg)`;
                if (bgText) bgText.style.transform = `translate(${-x/2}px, ${-y/2}px)`;
            });
        }

        updateMasterpiece(0);
    }
}
