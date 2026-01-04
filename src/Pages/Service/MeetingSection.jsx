import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Sparkles } from 'lucide-react';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const ThreeChair = ({ position, rotation, delay }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(350, 350);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    camera.position.set(2, 3, 5);
    camera.lookAt(0, 0, 0);

    const chairGroup = new THREE.Group();

    // Red leather material
    const seatMaterial = new THREE.MeshStandardMaterial({
      color: 0x8B0000,
      roughness: 0.4,
      metalness: 0.1
    });

    // Dark red frame
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a0000,
      roughness: 0.6,
      metalness: 0.3
    });

    // Seat cushion - rounded
    const seatGeo = new THREE.BoxGeometry(2.2, 0.4, 2);
    const seat = new THREE.Mesh(seatGeo, seatMaterial);
    seat.position.y = 0.5;
    seat.castShadow = true;
    seat.receiveShadow = true;
    chairGroup.add(seat);

    // Seat front curve
    const seatFrontGeo = new THREE.CylinderGeometry(0.2, 0.2, 2.2, 16);
    const seatFront = new THREE.Mesh(seatFrontGeo, seatMaterial);
    seatFront.rotation.z = Math.PI / 2;
    seatFront.position.set(0, 0.5, 1);
    seatFront.castShadow = true;
    chairGroup.add(seatFront);

    // Backrest
    const backGeo = new THREE.BoxGeometry(2, 2, 0.3);
    const back = new THREE.Mesh(backGeo, seatMaterial);
    back.position.set(0, 1.3, -0.9);
    back.rotation.x = -0.1;
    back.castShadow = true;
    back.receiveShadow = true;
    chairGroup.add(back);

    // Backrest top curve
    const backTopGeo = new THREE.CylinderGeometry(0.2, 0.2, 2, 16);
    const backTop = new THREE.Mesh(backTopGeo, seatMaterial);
    backTop.rotation.z = Math.PI / 2;
    backTop.position.set(0, 2.3, -0.9);
    backTop.castShadow = true;
    chairGroup.add(backTop);

    // Metal legs - angled
    const legGeo = new THREE.CylinderGeometry(0.12, 0.15, 1.2, 12);
    const legPositions = [
      { x: -0.9, z: 0.8, angle: 0.2 },
      { x: 0.9, z: 0.8, angle: -0.2 },
      { x: -0.8, z: -0.7, angle: 0.15 },
      { x: 0.8, z: -0.7, angle: -0.15 }
    ];

    legPositions.forEach(pos => {
      const leg = new THREE.Mesh(legGeo, frameMaterial);
      leg.position.set(pos.x, -0.1, pos.z);
      leg.rotation.z = pos.angle;
      leg.castShadow = true;
      chairGroup.add(leg);
    });

    chairGroup.position.set(...position);
    scene.add(chairGroup);

    // Ground plane for shadows
    const groundGeo = new THREE.PlaneGeometry(20, 20);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.3 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(0xff0000, 0.8);
    fillLight.position.set(-3, 3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xff3333, 0.6);
    rimLight.position.set(3, 2, -3);
    scene.add(rimLight);

    // Rotate chair 45 degrees (half side, half front)
    setTimeout(() => {
      gsap.to(chairGroup.rotation, {
        y: rotation,
        duration: 1.5,
        ease: 'power2.out'
      });
    }, delay);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [position, rotation, delay]);

  return <div ref={mountRef} className="w-[350px] h-[350px]" />;
};

const ThreeLaptop = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    camera.position.set(0, 4, 6);
    camera.lookAt(0, 0, 0);

    const laptopGroup = new THREE.Group();

    // Laptop screen
    const screenGeo = new THREE.BoxGeometry(2.5, 2, 0.15);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.3,
      metalness: 0.7
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1, -0.9);
    screen.rotation.x = -0.2;
    screen.castShadow = true;
    laptopGroup.add(screen);

    // Screen display (glowing)
    const displayGeo = new THREE.BoxGeometry(2.3, 1.8, 0.08);
    const displayMat = new THREE.MeshBasicMaterial({ color: 0x2a5a8f });
    const display = new THREE.Mesh(displayGeo, displayMat);
    display.position.set(0, 1, -0.82);
    display.rotation.x = -0.2;
    laptopGroup.add(display);

    // Laptop base
    const baseGeo = new THREE.BoxGeometry(2.5, 0.15, 2);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.4,
      metalness: 0.6
    });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(0, 0, 0);
    base.castShadow = true;
    laptopGroup.add(base);

    laptopGroup.position.y = 1.3;
    scene.add(laptopGroup);

    // Table
    const tableGroup = new THREE.Group();

    const tableTopGeo = new THREE.BoxGeometry(5, 0.25, 3.5);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a3a,
      roughness: 0.5,
      metalness: 0.4
    });
    const tableTop = new THREE.Mesh(tableTopGeo, tableMat);
    tableTop.position.y = 0.8;
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    tableGroup.add(tableTop);

    // Table leg
    const legGeo = new THREE.CylinderGeometry(0.2, 0.4, 1.6, 16);
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.6,
      metalness: 0.5
    });
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.y = 0;
    leg.castShadow = true;
    tableGroup.add(leg);

    scene.add(tableGroup);

    // Ground
    const groundGeo = new THREE.PlaneGeometry(30, 30);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.3 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.8;
    ground.receiveShadow = true;
    scene.add(ground);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(5, 10, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    const redLight = new THREE.PointLight(0xff0000, 0.8);
    redLight.position.set(-4, 5, 4);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x3366ff, 0.5);
    blueLight.position.set(0, 3, 2);
    scene.add(blueLight);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-[400px] h-[400px]" />;
};

export default function MeetingSection() {
  const [meetingStarted, setMeetingStarted] = useState(false);
  const [calling, setCalling] = useState(false);
  const sectionRef = useRef(null);
  const chairRef = useRef(null);
  const buttonRef = useRef(null);

  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
          Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
      y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
      duration: Math.random() * 10 + 10,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
    })),
  []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(chairRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        scale: 0.8,
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      gsap.to(buttonRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMeetingClick = () => {
    setMeetingStarted(true);

    setTimeout(() => {
      setCalling(true);
      window.location.href = 'tel:01234567891';
    }, 3000);
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!meetingStarted ? (
            <motion.div
              key="initial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center gap-12"
            >
              <div ref={chairRef} className="relative">
                <motion.div className="text-center">
                  <ThreeChair position={[0, 0, 0]} rotation={Math.PI / 4} delay={0} />
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(239, 68, 68, 0.3)',
                        '0 0 40px rgba(239, 68, 68, 0.6)',
                        '0 0 20px rgba(239, 68, 68, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-red-500/30 rounded-full blur-xl"
                  />
                </motion.div>
              </div>

              <div ref={buttonRef}>
                <motion.button
                  onClick={handleMeetingClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-linear-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white px-12 py-6 rounded-2xl font-bold text-2xl flex items-center gap-4 border-2 border-red-400/50">
                    <Sparkles className="w-8 h-8" />
                    <span>Ready for a Meeting?</span>
                    <Sparkles className="w-8 h-8" />
                  </div>
                </motion.button>

                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-red-400 text-center mt-4 text-lg"
                >
                  Let&apos;s create something amazing together
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="meeting"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'backOut' }}
                className="relative flex items-center justify-center gap-8"
              >
                <motion.div
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <ThreeChair position={[0, 0, 0]} rotation={Math.PI / 3} delay={500} />
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <ThreeLaptop />
                </motion.div>

                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <ThreeChair position={[0, 0, 0]} rotation={-Math.PI / 3} delay={500} />
                </motion.div>
              </motion.div>

              {calling && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="inline-block mb-4"
                  >
                    <Phone className="w-16 h-16 text-red-500" />
                  </motion.div>
                  <h2 className="text-4xl font-bold text-white mb-2">Connecting...</h2>
                  <p className="text-red-400 text-xl">Calling: 01234567891</p>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mt-4 text-6xl"
                  >
                    📞
                  </motion.div>
                </motion.div>
              )}

              {!calling && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-center"
                >
                  <h2 className="text-4xl font-bold text-white mb-2">Perfect! 🎨</h2>
                  <p className="text-red-400 text-xl">Preparing to connect...</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-red-500/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-red-500/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-red-500/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-red-500/30" />
    </div>
  );
}