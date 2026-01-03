import { useState } from "react";
import profileImg from "../assets/profile.jpg";

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [avatarHover, setAvatarHover] = useState(false);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a, #020617)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Avatar */}
      <a
        href="https://www.linkedin.com/in/sanjitha-r-a88416380"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setAvatarHover(true)}
        onMouseLeave={() => setAvatarHover(false)}
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            border: "2px solid #3b82f6",
            overflow: "hidden", // 🔥 MOST IMPORTANT FIX
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            cursor: "pointer",
            boxShadow: avatarHover
              ? "0 0 25px rgba(59,130,246,0.6)"
              : "none",
            transform: avatarHover ? "scale(1.05)" : "scale(1)",
            transition: "all 0.3s ease",
          }}
        >
          <img
            src={profileImg}
            alt="R Sanjitha"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      </a>

      {/* Name */}
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        R Sanjitha
      </h1>

      {/* Role */}
      <p style={{ fontSize: "18px", opacity: 0.8 }}>
        AI & Data Science Student
      </p>

      {/* Buttons */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Explore */}
        <button
          onClick={scrollToAbout}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            borderRadius: "25px",
            border: "none",
            backgroundColor: isHovered ? "#2563eb" : "#3b82f6",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Explore My Journey
        </button>

        {/* Contact */}
        <button
          onClick={scrollToContact}
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            borderRadius: "25px",
            border: "2px solid #3b82f6",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          Get in Touch
        </button>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            borderRadius: "25px",
            border: "2px solid #3b82f6",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Download Resume
        </a>
      </div>

      {/* LinkedIn label */}
      <div style={{ marginTop: "25px", opacity: 0.8 }}>
        💼 LinkedIn
      </div>
    </div>
  );
}

export default HeroSection;
