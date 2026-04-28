export function initHeatParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.init();
        }

        init() {
            this.x = Math.random() * w;
            this.y = h + Math.random() * 100;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedY = Math.random() * 0.8 + 0.2;
            this.speedX = Math.random() * 1 - 0.5;
            this.life = 0;
            this.maxLife = Math.random() * 200 + 100;
            this.opacity = 0;
            // Warm palette: orange, amber, dim red
            const colors = ['#ff3c00', '#ff8400', '#4a1200', '#f46a25'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            this.life++;

            if (this.life < 100) {
                this.opacity += 0.01;
            } else if (this.life > this.maxLife - 100) {
                this.opacity -= 0.01;
            }

            if (this.life >= this.maxLife || this.y < -50) {
                this.init();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = Math.max(0, Math.min(this.opacity, 0.4)); // Soft opacity
            ctx.fill();
            
            // Subtle glow for larger particles
            if (this.size > 1.5) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
            } else {
                ctx.shadowBlur = 0;
            }
        }
    }

    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        
        // Dark atmosphere gradient
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#0c0b0a');
        grad.addColorStop(1, '#160d0a');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}
