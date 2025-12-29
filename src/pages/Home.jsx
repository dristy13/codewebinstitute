import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    gsap
      .timeline({ defaults: { ease: "power4.out" } })
      .from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
      })
      .from(
        ".hero-sub",
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.6"
      )
      .from(
        ".hero-btn",
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden text-white bg-black">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        {/* Base */}
        <div className="absolute inset-0 bg-black" />

        {/* Slow animated gradient */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 20%, rgba(250,204,21,0.12), transparent 60%),\
                 radial-gradient(60% 60% at 80% 70%, rgba(99,102,241,0.12), transparent 60%)",
            animation: "bgFloat 20s ease-in-out infinite alternate",
          }}
        />

        {/* Light beam sweep */}
        <div
          className="absolute -inset-x-40 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            transform: "rotate(-12deg)",
            animation: "beamMove 12s linear infinite",
          }}
        />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>
      {/* ================= END BACKGROUND ================= */}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight hero-title md:text-7xl">
          Building Digital <span className="text-yellow-400">Experiences</span>
          <br />
          That Grow Businesses
        </h1>

        <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-300 hero-sub md:text-xl">
          We build modern, fast and scalable websites & applications for real
          businesses.
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="py-4 font-semibold text-black bg-yellow-400 rounded-full shadow-lg hero-btn px-9 shadow-yellow-400/30"
          >
            Get Started
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="py-4 font-semibold text-white border rounded-full shadow-md hero-btn border-white/40 bg-white/5 px-9 backdrop-blur-md hover:bg-white/10"
          >
            View Work
          </motion.a>
        </div>
      </div>
      {/* ================= END CONTENT ================= */}
    </section>
  );
}
