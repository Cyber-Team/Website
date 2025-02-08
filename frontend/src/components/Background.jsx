import * as THREE from 'three';

class ParticleBackground {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    
    this.particlesCount = 500;
    this.particles = null;
    this.speeds = new Float32Array(this.particlesCount);
    
    this.init();
    this.createParticles();
    this.animate();
  }
  
  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x111827); // gray-900
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add canvas to page
    this.renderer.domElement.style.position = 'fixed';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.zIndex = '-1';
    document.body.appendChild(this.renderer.domElement);
    
    // Set camera position
    this.camera.position.z = 5;
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }
  
  createParticles() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particlesCount * 3);
    
    for (let i = 0; i < this.particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      this.speeds[i] = Math.random() * 0.02;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x4fd1c5, // cyan-500
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });
    
    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }
  
  updateParticles() {
    const positions = this.particles.geometry.attributes.position.array;
    
    for (let i = 0; i < this.particlesCount; i++) {
      positions[i * 3 + 1] -= this.speeds[i];
      
      if (positions[i * 3 + 1] < -5) {
        positions[i * 3 + 1] = 5;
      }
    }
    
    this.particles.geometry.attributes.position.needsUpdate = true;
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    this.updateParticles();
    this.renderer.render(this.scene, this.camera);
  }
}

export default ParticleBackground;