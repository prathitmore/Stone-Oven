export function initLocatorBackground(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w, h;
    let particles = [];
    let lines = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    // Create a network of "Locator Nodes"
    for (let i = 0; i < 15; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            size: Math.random() * 2 + 1
        });
    }

    function drawGrid() {
        ctx.strokeStyle = 'rgba(255, 60, 0, 0.03)';
        ctx.lineWidth = 1;
        
        const spacing = 100;
        for (let x = 0; x < w; x += spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
        }
        for (let y = 0; y < h; y += spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }

    function drawGhostText() {
        ctx.save();
        ctx.font = '900 15vw "Playfair Display"';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
        ctx.lineWidth = 1;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Parallax effect based on scroll
        const scrollY = window.scrollY || 0;
        ctx.strokeText('LOCATIONS', w / 2, (h / 2) - (scrollY * 0.1));
        ctx.restore();
    }

    function animate() {
        ctx.fillStyle = '#0c0b0a';
        ctx.fillRect(0, 0, w, h);

        drawGrid();
        drawGhostText();

        ctx.fillStyle = 'rgba(255, 60, 0, 0.2)';
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Connect nearby nodes with thin architectural lines
            particles.forEach(p2 => {
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 300) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 60, 0, ${0.05 * (1 - dist / 300)})`;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
}
