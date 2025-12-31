import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero3D() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // ==================== MAIN HERO ELEMENT ====================
    // Large metallic sphere - silver/white
    const mainGeom = new THREE.IcosahedronGeometry(2, 8);
    const mainMat = new THREE.MeshStandardMaterial({
      color: 0xe5e7eb,
      metalness: 0.85,
      roughness: 0.1,
      emissive: 0xfafafa,
      emissiveIntensity: 0.1,
    });
    const mainSphere = new THREE.Mesh(mainGeom, mainMat);
    mainSphere.position.z = 0;
    scene.add(mainSphere);

    // ==================== SLEEK RINGS ====================
    // Minimalist chrome rings
    const createRings = () => {
      const group = new THREE.Group();

      const rings = [
        { radius: 3.2, thickness: 0.06, rotAxis: [1, 0.2, 0], speed: 0.0012 },
        { radius: 3.8, thickness: 0.05, rotAxis: [0, 1, 0.3], speed: -0.001 },
        { radius: 2.6, thickness: 0.07, rotAxis: [0.2, 0, 1], speed: 0.0014 },
      ];

      rings.forEach((ringData) => {
        const torusGeom = new THREE.TorusGeometry(
          ringData.radius,
          ringData.thickness,
          32,
          200
        );
        const torusMat = new THREE.MeshStandardMaterial({
          color: 0xd1d5db,
          metalness: 0.9,
          roughness: 0.05,
        });
        const torus = new THREE.Mesh(torusGeom, torusMat);
        torus.rotation.set(...ringData.rotAxis);
        torus.userData = {
          rotAxis: ringData.rotAxis,
          speed: ringData.speed,
        };
        group.add(torus);
      });

      return group;
    };

    const ringsGroup = createRings();
    scene.add(ringsGroup);

    // ==================== ELEGANT FLOATING NODES ====================
    const createNodes = () => {
      const group = new THREE.Group();

      const nodePositions = [
        { pos: [-3.5, 2, 0], size: 0.3 },
        { pos: [3.5, -1.5, 0], size: 0.25 },
        { pos: [-1, -3, 0.5], size: 0.28 },
        { pos: [2.5, 2.5, -0.5], size: 0.32 },
      ];

      nodePositions.forEach((item) => {
        const nodeGeom = new THREE.SphereGeometry(item.size, 32, 32);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: 0xa3a3a3,
          metalness: 0.7,
          roughness: 0.2,
        });
        const node = new THREE.Mesh(nodeGeom, nodeMat);
        node.position.set(...item.pos);
        node.userData = {
          originalPos: [...item.pos],
          floatSpeed: Math.random() * 0.008 + 0.004,
          floatAmount: Math.random() * 0.25 + 0.15,
          phase: Math.random() * Math.PI * 2,
        };
        group.add(node);
      });

      return group;
    };

    const nodesGroup = createNodes();
    scene.add(nodesGroup);

    // ==================== SUBTLE PARTICLE SYSTEM ====================
    const particleGeom = new THREE.BufferGeometry();
    const particleCount = 40;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 4.5 + 2;
      particlePositions[i] = Math.cos(angle) * distance;
      particlePositions[i + 1] = (Math.random() - 0.5) * 2.5;
      particlePositions[i + 2] = Math.sin(angle) * distance;
    }

    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xb4b4b4,
      size: 0.06,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // ==================== PROFESSIONAL LIGHTING ====================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
    keyLight.position.set(10, 10, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf5f5f5, 0.4);
    fillLight.position.set(-8, -8, 5);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0xfafafa, 0.6);
    pointLight.position.set(0, 0, 6);
    scene.add(pointLight);

    // ==================== INTERACTION ====================
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // ==================== ANIMATION LOOP ====================
    let time = 0;
    const animate = () => {
      time += 0.016;
      requestAnimationFrame(animate);

      // Gentle rotation of main sphere
      mainSphere.rotation.x += 0.0001;
      mainSphere.rotation.y += 0.00025;

      // Very subtle pulse
      const pulse = Math.sin(time * 0.6) * 0.03 + 1;
      mainSphere.scale.set(pulse, pulse, pulse);

      // Rotate rings smoothly
      ringsGroup.children.forEach((ring) => {
        const axis = new THREE.Vector3(...ring.userData.rotAxis).normalize();
        ring.rotateOnWorldAxis(axis, ring.userData.speed);
      });

      // Animate floating nodes
      nodesGroup.children.forEach((node) => {
        const newY =
          node.userData.originalPos[1] +
          Math.sin(time * node.userData.floatSpeed + node.userData.phase) *
            node.userData.floatAmount;
        node.position.y = newY;
        node.rotation.x += 0.008;
        node.rotation.y += 0.012;
      });

      // Smooth mouse interaction
      mainSphere.rotation.x +=
        (mouseRef.current.y * 0.25 - mainSphere.rotation.x) * 0.04;
      mainSphere.rotation.y +=
        (mouseRef.current.x * 0.25 - mainSphere.rotation.y) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* 3D Canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pointer-events-none sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 pointer-events-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 transition-colors border border-gray-700 rounded-full bg-gray-900/40 backdrop-blur-sm hover:border-gray-600">
              <Sparkles className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium text-gray-300">
                Premium Web Excellence
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl animate-fade-in-delayed">
            Elevate Your Digital Presence
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto mb-8 text-lg font-light leading-relaxed text-gray-400 sm:text-xl animate-fade-in-delayed-2">
            Premium web solutions crafted for discerning brands. We deliver
            sophisticated, high-performance digital experiences that command
            attention and drive exceptional results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pointer-events-auto sm:flex-row animate-fade-in-delayed-3">
            <a
              href="#"
              className="relative px-8 py-4 overflow-hidden font-semibold text-black transition-all bg-white rounded-lg group hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95"
            >
              <span className="relative flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="#"
              className="px-8 py-4 font-semibold text-white transition-all border border-gray-700 rounded-lg hover:border-gray-500 hover:bg-gray-900/50 hover:scale-105 active:scale-95"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 mt-16 border-t border-gray-800 animate-fade-in-delayed-4">
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                200+
              </div>
              <p className="mt-2 text-sm font-light text-gray-500">
                Premium Projects
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                99%
              </div>
              <p className="mt-2 text-sm font-light text-gray-500">
                Client Retention
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                15yrs
              </div>
              <p className="mt-2 text-sm font-light text-gray-500">
                Excellence Track Record
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-2 {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-3 {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-4 {
          animation: fadeIn 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
