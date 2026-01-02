import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <div
        id="about"
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "80px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          About Me
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: "1.7",
            opacity: 0.75,
          }}
        >
          I am a 2nd-year B.Tech student pursuing Artificial Intelligence and
          Data Science at SRM TRP Engineering College. I focus on building
          strong programming fundamentals and actively participate in
          inter-college events to improve my technical and communication skills.
        </p>
      </div>

      {/* Education Section */}
      <div
        id="education"
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "80px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Education
        </h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            onMouseEnter={() => setHoveredCard("education")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              backgroundColor: "#0f172a",
              padding: "30px",
              borderRadius: "18px",
              width: "420px",
              textAlign: "center",
              border:
                hoveredCard === "education"
                  ? "1px solid #3b82f6"
                  : "1px solid #1e293b",
              transform:
                hoveredCard === "education"
                  ? "translateY(-8px)"
                  : "translateY(0)",
              transition: "all 0.3s ease",
            }}
          >
            <h3>B.Tech – Artificial Intelligence & Data Science</h3>
            <p style={{ marginTop: "8px", opacity: 0.85 }}>
              SRM TRP Engineering College
            </p>
            <p style={{ marginTop: "6px", fontSize: "14px", opacity: 0.7 }}>
              Expected Graduation: 2028
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "80px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Skills
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {[
            { id: "python", title: "🐍 Python" },
            { id: "c", title: "💻 C" },
            { id: "cpp", title: "⚙️ C++" },
          ].map((skill) => (
            <div
              key={skill.id}
              onMouseEnter={() => setHoveredCard(skill.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: "#0f172a",
                padding: "25px",
                borderRadius: "16px",
                width: "280px",
                border:
                  hoveredCard === skill.id
                    ? "1px solid #3b82f6"
                    : "1px solid #1e293b",
                transform:
                  hoveredCard === skill.id
                    ? "translateY(-8px)"
                    : "translateY(0)",
                transition: "all 0.3s ease",
              }}
            >
              <h3>{skill.title}</h3>
              <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.7 }}>
                Beginner to intermediate level with strong foundational understanding.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section (COMPONENT) */}
      <Achievements />

      {/* Contact Section */}
      <div
        id="contact"
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h2>Contact</h2>
        <p style={{ marginTop: "20px", opacity: 0.75 }}>
          Feel free to reach out for collaboration or learning opportunities.
        </p>
        <p style={{ marginTop: "10px", opacity: 0.6 }}>
          Email and social links will be added soon.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
