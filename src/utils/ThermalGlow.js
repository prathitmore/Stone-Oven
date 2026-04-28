export function initThermalGlow(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w, h;
    let blobs = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class GlowBlob {
        constructor() {
            this.init();
        }

        init() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.radius = Math.random() * (w * 0.4) + (w * 0.2);
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            // Very subtle warm tones
            const tones = [
                { r: 255, g: 60, b: 0, a: 0.03 }, // Brand Orange
                { r: 40, g: 10, b: 0, a: 0.05 },  // Deep Ember
                { r: 20, g: 5, b: 0, a: 0.08 }    // Shadow Warmth
            ];
            this.tone = tones[Math.floor(Math.random() * tones.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < -this.radius) this.x = w + this.radius;
            if (this.x > w + this.radius) this.x = -this.radius;
            if (this.y < -this.radius) this.y = h + this.radius;
            if (this.y > h + this.radius) this.y = -this.radius;
        }

        draw() {
            const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            grad.addColorStop(0, `rgba(${this.tone.r}, ${this.tone.g}, ${this.tone.b}, ${this.tone.a})`);
            grad.addColorStop(1, 'rgba(12, 11, 10, 0)');
            
            ctx.fillStyle = grad;
            ctx.globalCompositeOperation = 'screen';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create a small number of large, soft blobs
    for (let i = 0; i < 6; i++) {
        blobs.push(new GlowBlob());
    }

    function animate() {
        // Clear with the base background color
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#0c0b0a';
        ctx.fillRect(0, 0, w, h);

        blobs.forEach(b => {
            b.update();
            b.draw();
        });
        
        requestAnimationFrame(animate);
    }

    animate();
}
