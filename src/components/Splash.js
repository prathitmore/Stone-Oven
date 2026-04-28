export function renderSplash() {
    return `
        <div id="splash-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #000; z-index: 10000; display: flex; align-items: center; justify-content: center; overflow: hidden; opacity: 1; transition: opacity 1s ease;">
            <!-- EMBER BACKGROUND CANVAS -->
            <canvas id="splash-embers" style="position: absolute; top:0; left:0; width:100%; height:100%;"></canvas>
            
            <!-- LOGO -->
            <div id="splash-logo-wrap" style="position: relative; z-index: 2; opacity: 0; transform: scale(0.9); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);">
                <img src="logo.png" alt="Stone Oven" style="width: clamp(300px, 40vw, 550px); height: auto; filter: drop-shadow(0 0 50px rgba(255, 60, 0, 0.4));">
            </div>

            <!-- GLOW OVERLAY -->
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255, 60, 0, 0.08) 0%, transparent 70%); pointer-events: none; z-index: 1;"></div>
        </div>
    `;
}

export function initSplash(onComplete) {
    const container = document.getElementById('splash-container');
    const logoWrap = document.getElementById('splash-logo-wrap');
    const canvas = document.getElementById('splash-embers');
    
    if (!container || !logoWrap || !canvas) {
        if (onComplete) onComplete();
        return;
    }

    // --- ENHANCED EMBER ANIMATION LOGIC ---
    const ctx = canvas.getContext('2d');
    let width, height;
    const particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = height + 100;
            this.vx = (Math.random() - 0.5) * 2.5;
            this.vy = -Math.random() * 4 - 2;
            this.size = Math.random() * 3 + 1;
            this.alpha = Math.random() * 0.6 + 0.3;
            this.life = Math.random() * 150 + 50;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;
            this.alpha -= 0.003;
            if (this.life <= 0 || this.alpha <= 0) this.reset();
        }
        draw() {
            ctx.fillStyle = `rgba(255, ${80 + Math.random() * 120}, 0, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // High Density: 160 particles
    for (let i = 0; i < 160; i++) particles.push(new Particle());

    let animationId;
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animationId = requestAnimationFrame(animate);
    }
    animate();

    // --- TIGHT 3-SECOND TRANSITION SEQUENCE ---
    // 0s-1.2s: Logo appears
    setTimeout(() => {
        logoWrap.style.opacity = '1';
        logoWrap.style.transform = 'scale(1)';
    }, 100);

    // 2.2s: Logo starts fading out
    setTimeout(() => {
        logoWrap.style.opacity = '0';
        logoWrap.style.transform = 'scale(1.05)';
        logoWrap.style.filter = 'blur(15px)';
    }, 2200);

    // 3.0s: Call onComplete immediately for the loading screen to take over
    setTimeout(() => {
        if (onComplete) onComplete();
        
        // Clean up visual elements
        container.style.opacity = '0';
        setTimeout(() => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            if (container.parentNode) container.remove();
        }, 1000);
    }, 3000);
}
