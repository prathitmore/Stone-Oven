export function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <img src="/logo.png" alt="Stone Oven Logo" class="footer-logo-img">
                    <p>Experience the warmth of authentic stone-oven baking across Maharashtra.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/locations">Locations</a></li>
                        <li><a href="#/menu">Our Menu</a></li>
                    </ul>
                </div>
                <div class="footer-locations">
                    <h4>Our Outlets</h4>
                    <ul>
                        <li>Virar</li>
                        <li>Palghar</li>
                        <li>Boisar</li>
                        <li>Vasai</li>
                        <li>Thane</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Stone Oven Multi-Outlet. All rights reserved.</p>
            </div>
        </footer>
    `;
}
