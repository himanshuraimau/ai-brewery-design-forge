
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Complex3DAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 20;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(
      containerRef.current.clientWidth, 
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x8B5CF6, 2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0xEC4899, 2);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Materials
    const purpleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8B5CF6,
      metalness: 0.5,
      roughness: 0.2,
      transmission: 0.5,
      reflectivity: 0.5,
    });
    
    const pinkMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xEC4899,
      metalness: 0.7,
      roughness: 0.2,
      transmission: 0.7,
      reflectivity: 0.7,
    });
    
    const blueMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3B82F6,
      metalness: 0.6,
      roughness: 0.2,
      transmission: 0.6,
      reflectivity: 0.6,
    });

    // Create complex objects
    // Torus Knot
    const torusKnotGeometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 16, 2, 3);
    const torusKnot = new THREE.Mesh(torusKnotGeometry, purpleMaterial);
    scene.add(torusKnot);

    // Floating particles
    const particleCount = 100;
    const particleGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const particles = new THREE.Group();

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(
        particleGeometry,
        i % 3 === 0 ? purpleMaterial : (i % 3 === 1 ? pinkMaterial : blueMaterial)
      );
      
      // Random position in a sphere around the torus knot
      const radius = 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      particle.position.x = radius * Math.sin(phi) * Math.cos(theta);
      particle.position.y = radius * Math.sin(phi) * Math.sin(theta);
      particle.position.z = radius * Math.cos(phi);
      
      // Store initial position for animation
      particle.userData = {
        initialPos: {
          x: particle.position.x,
          y: particle.position.y,
          z: particle.position.z
        },
        speed: Math.random() * 0.02 + 0.01,
        amplitude: Math.random() * 1 + 0.5,
        offset: Math.random() * Math.PI * 2
      };
      
      particles.add(particle);
    }
    
    scene.add(particles);

    // Octahedron
    const octahedronGeometry = new THREE.OctahedronGeometry(2, 0);
    const octahedron = new THREE.Mesh(octahedronGeometry, blueMaterial);
    octahedron.position.set(-8, -4, 3);
    scene.add(octahedron);

    // Dodecahedron
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(1.5, 0);
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, pinkMaterial);
    dodecahedron.position.set(8, 4, -2);
    scene.add(dodecahedron);

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Add mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth camera movement based on mouse position
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      // Rotate torus knot
      torusKnot.rotation.x += 0.003;
      torusKnot.rotation.y += 0.005;
      
      // Rotate octahedron and dodecahedron
      octahedron.rotation.x += 0.01;
      octahedron.rotation.y += 0.02;
      dodecahedron.rotation.x -= 0.015;
      dodecahedron.rotation.z += 0.01;
      
      // Animate particles
      const time = Date.now() * 0.001;
      particles.children.forEach((particle: THREE.Mesh, i) => {
        const data = particle.userData;
        const offset = data.offset;
        const amplitude = data.amplitude;
        const speed = data.speed;
        
        particle.position.x = data.initialPos.x + Math.sin(time * speed + offset) * amplitude;
        particle.position.y = data.initialPos.y + Math.cos(time * speed + offset) * amplitude;
        particle.position.z = data.initialPos.z + Math.sin(time * speed * 0.5 + offset) * amplitude;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="w-full h-full min-h-[400px]">
      {/* Canvas will be added here by Three.js */}
      <div className="absolute inset-0 bg-gradient-radial from-brewery-primary-purple/5 to-transparent opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default Complex3DAnimation;
