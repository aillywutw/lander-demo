import { useState } from "react";
import { motion } from "framer-motion";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const images = [
  "https://picsum.photos/seed/a/600/400",
  "https://picsum.photos/seed/b/600/400",
  "https://picsum.photos/seed/c/600/400",
];

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "white", fontFamily: "sans-serif" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", padding: "80px 20px 40px" }}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "3rem", marginBottom: "16px" }}
        >
          Welcome to Lander Demo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontSize: "1.2rem", color: "#aaa", marginBottom: "32px" }}
        >
          A beautiful React landing page with auth
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button onClick={() => setShowRegister(true)} style={btnStyle("#e91e8c")}>
            Join Now
          </button>
          <button onClick={() => setShowLogin(true)} style={btnStyle("#333")}>
            Sign In
          </button>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "40px 20px" }}>
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`photo-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            style={{ width: "280px", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
          />
        ))}
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </div>
  );
}

function btnStyle(bg) {
  return {
    background: bg,
    color: "white",
    border: "none",
    padding: "14px 32px",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    margin: "0 8px",
  };
}