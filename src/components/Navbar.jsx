import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "achievements",
        "skills",
        "projects",
        "focus",
        "contact",
      ];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(2, 6, 23, 0.9)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        zIndex: 1000,
        borderBottom: "1px solid #1e293b",
      }}
    >
      {/* Logo / Home */}
      <button
        onClick={() => scrollToSection("home")}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Sanjitha
      </button>

      {/* Nav Items */}
      <div style={{ display: "flex", gap: "26px" }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              ...navBtnStyle,
              color: activeSection === item.id ? "#3b82f6" : "white",
              fontWeight: activeSection === item.id ? "600" : "400",
              opacity: activeSection === item.id ? 1 : 0.7,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "focus", label: "Focus" },
  { id: "contact", label: "Contact" },
];

const navBtnStyle = {
  background: "none",
  border: "none",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

export default Navbar;
