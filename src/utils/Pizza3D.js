import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class Pizza3D {
    constructor(containerId, dishName) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, this.container.offsetWidth / this.container.offsetHeight, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        this.scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 2);
        spotLight.position.set(5, 5, 5);
        this.scene.add(spotLight);

        // Interactive states
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetRotationX = 0;
        this.targetRotationY = 0;

        this.loadModel();
        this.setupEvents();
        this.animate();
    }

    loadModel() {
        // Fallback procedural pizza if GLB fails
        const geometry = new THREE.CylinderGeometry(2, 2, 0.2, 32);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0xe6a119, // Crust color
            roughness: 0.8
        });
        this.pizza = new THREE.Mesh(geometry, material);
        this.pizza.rotation.x = Math.PI / 6;
        this.scene.add(this.pizza);

        // Topping (cheese layer)
        const toppingGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.1, 32);
        const toppingMat = new THREE.MeshStandardMaterial({ 
            color: 0xffd700, // Cheese yellow
            emissive: 0xff4500,
            emissiveIntensity: 0.1
        });
        const topping = new THREE.Mesh(toppingGeo, toppingMat);
        topping.position.y = 0.1;
        this.pizza.add(topping);
    }

    setupEvents() {
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouseX = (e.clientX - rect.left) / rect.width - 0.5;
            this.mouseY = (e.clientY - rect.top) / rect.height - 0.5;
            
            this.targetRotationY = this.mouseX * 2;
            this.targetRotationX = this.mouseY * 2;
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.pizza) {
            this.pizza.rotation.y += 0.005; // Idle rotation
            
            // Interaction smooth damp
            this.pizza.rotation.y += (this.targetRotationY - (this.pizza.rotation.y % (Math.PI * 2))) * 0.05;
            this.pizza.rotation.x += (this.targetRotationX + Math.PI/6 - this.pizza.rotation.x) * 0.05;
        }

        this.renderer.render(this.scene, this.camera);
    }
}
