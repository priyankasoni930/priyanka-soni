
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  icon: React.ReactNode;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

interface ProjectCard3DProps {
  projects: Project[];
  activeIndex: number;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ projects, activeIndex }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cardsRef = useRef<THREE.Mesh[]>([]);
  const texturesRef = useRef<THREE.Texture[]>([]);
  const frameRef = useRef<number | null>(null);
  const targetRotationRef = useRef<number>(0);
  const currentRotationRef = useRef<number>(0);

  // Create and set up the 3D scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Load project textures
    const textureLoader = new THREE.TextureLoader();
    const textures = projects.map(project => {
      // Placeholder texture while image loads
      const texture = textureLoader.load(project.image);
      texture.encoding = THREE.sRGBEncoding;
      return texture;
    });
    texturesRef.current = textures;

    // Create project cards
    const cards: THREE.Mesh[] = [];
    projects.forEach((project, index) => {
      const geometry = new THREE.PlaneGeometry(2, 1.5);
      
      // Create a material with the project texture
      const material = new THREE.MeshStandardMaterial({
        map: textures[index],
        side: THREE.DoubleSide,
        transparent: true,
        roughness: 0.8,
      });
      
      const card = new THREE.Mesh(geometry, material);
      
      // Position cards in a circle
      const angle = (index / projects.length) * Math.PI * 2;
      const radius = 3;
      card.position.set(
        Math.sin(angle) * radius,
        0,
        Math.cos(angle) * radius
      );
      
      // Face the center
      card.lookAt(0, 0, 0);
      
      scene.add(card);
      cards.push(card);
    });
    cardsRef.current = cards;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      // Smoothly animate between rotations
      currentRotationRef.current += (targetRotationRef.current - currentRotationRef.current) * 0.1;
      
      scene.rotation.y = currentRotationRef.current;
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      cards.forEach(card => {
        scene.remove(card);
        card.geometry.dispose();
        if (card.material instanceof THREE.Material) {
          card.material.dispose();
        } else if (Array.isArray(card.material)) {
          card.material.forEach(material => material.dispose());
        }
      });
      
      textures.forEach(texture => {
        texture.dispose();
      });
    };
  }, [projects]);

  // Update rotation when active project changes
  useEffect(() => {
    if (projects.length === 0) return;
    
    const angle = -(activeIndex / projects.length) * Math.PI * 2;
    targetRotationRef.current = angle;
  }, [activeIndex, projects.length]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full rounded-lg overflow-hidden watercolor-border"
    />
  );
};

export default ProjectCard3D;
