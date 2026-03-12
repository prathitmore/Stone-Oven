export function renderNavbar() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="#/" class="logo">
                    <img src="/logo.png" alt="Stone Oven Logo" class="nav-logo-img">
                </a>
                
                <ul class="nav-links">
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/locations">Destinations</a></li>
                    <li><a href="#/menu">Menu</a></li>
                    <li><a href="#/gallery">Gallery</a></li>
                </ul>

                <div class="nav-cta">
                    <a href="#/locations" class="btn-primary">Order Now</a>
                </div>
            </div>
        </nav>
    `;

    // Add scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.querySelector('.navbar').classList.add('scrolled');
        } else {
            nav.querySelector('.navbar').classList.remove('scrolled');
        }
    });
}
