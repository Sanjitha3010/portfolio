import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

/* 🔗 YOUR REAL LINKS */
const GITHUB_URL = "https://github.com/Sanjitha3010";
const LINKEDIN_URL = "https://www.linkedin.com/in/sanjitha-r-a88416380";
const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=sanjitha3010@gmail.com";

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* About Section */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "100px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          About <span style={{ color: "#3b82f6" }}>Me</span>
        </h2>

        <p
          style={{
            textAlign: "center",
            opacity: 0.7,
            marginBottom: "60px",
            fontSize: "16px",
          }}
        >
          A passionate learner at the start of an exciting tech journey
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "50px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Left Content */}
          <div style={{ lineHeight: "1.8", opacity: 0.85 }}>
            <p>
              Hello! I’m <strong>R Sanjitha</strong>, a dedicated 2nd-year B.Tech
              student specializing in Artificial Intelligence and Data Science at
              SRM TRP Engineering College.
            </p>

            <p style={{ marginTop: "20px" }}>
              My journey in technology is driven by curiosity and a strong desire
              to learn. I believe in building solid foundations before taking on
              complex challenges, and I'm currently focused on mastering
              programming fundamentals while exploring the fascinating world
              of AI.
            </p>

            <p style={{ marginTop: "20px" }}>
              What sets me apart is my{" "}
              <span style={{ color: "#22d3ee" }}>
                consistency, willingness to learn, and genuine curiosity
              </span>{" "}
              about how technology can solve real-world problems.I'm at the 
              beginning of my journey, and I'm excited about where it will lead.
            </p>
          </div>

          {/* Right Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={aboutCardStyle}>
              <div style={iconStyle}>📘</div>
              <div>
                <p style={cardLabel}>2nd Year Student</p>
                <h4>B.Tech AI & DS</h4>
              </div>
            </div>

            <div style={aboutCardStyle}>
              <div style={iconStyle}>💻</div>
              <div>
                <p style={cardLabel}>Languages</p>
                <h4>Python, C, C++</h4>
              </div>
            </div>

            <div style={aboutCardStyle}>
              <div style={iconStyle}>✨</div>
              <div>
                <p style={cardLabel}>Focus</p>
                <h4>AI & Data Science</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
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

      {/* Achievements */}
      <Achievements />

      {/* Skills */}
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
                Beginner to intermediate level with strong foundational
                understanding.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "80px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Projects
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {[
            {
              id: "p1",
              title: "Attendance Management System",
              desc:
                "Built an offline attendance system to understand data handling, logic building, and program flow.",
              tech: "Python / C++",
            },
            {
              id: "p2",
              title: "AI & DS Mini Projects",
              desc:
                "Worked on small learning-based projects related to AI and Data Science concepts.",
              tech: "Python, Basics of ML",
            },
            {
              id: "p3",
              title: "Prompt Engineering Tasks",
              desc:
                "Practiced structured prompt design and experimentation during competitions and learning sessions.",
              tech: "Prompt Design, Logical Thinking",
            },
          ].map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: "#0f172a",
                padding: "25px",
                borderRadius: "16px",
                width: "300px",
                border:
                  hoveredCard === project.id
                    ? "1px solid #3b82f6"
                    : "1px solid #1e293b",
                transform:
                  hoveredCard === project.id
                    ? "translateY(-8px)"
                    : "translateY(0)",
                transition: "all 0.3s ease",
              }}
            >
              <h3>{project.title}</h3>
              <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.75 }}>
                {project.desc}
              </p>
              <p style={{ marginTop: "10px", fontSize: "13px", opacity: 0.6 }}>
                Technologies: {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Section */}
      <div
        id="focus"
        style={{
          minHeight: "80vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Current Focus</h2>

        <p style={{ opacity: 0.75, maxWidth: "700px", margin: "0 auto 40px" }}>
          Areas I am currently learning and improving to build a strong foundation
          in Artificial Intelligence and Data Science.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Python Programming",
            "Data Structures & Logic Building",
            "Basics of Machine Learning",
            "Prompt Engineering",
            "Problem Solving Skills",
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#0f172a",
                padding: "16px 22px",
                borderRadius: "999px",
                fontSize: "14px",
                border: "1px solid #1e293b",
                opacity: 0.85,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "100px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Get in <span style={{ color: "#3b82f6" }}>Touch</span>
        </h2>

        <p
          style={{
            textAlign: "center",
            opacity: 0.7,
            marginBottom: "60px",
            fontSize: "16px",
          }}
        >
          I’m always open to connecting with fellow learners and professionals
        </p>

        <div
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "18px",
            padding: "40px 30px",
            textAlign: "center",
          }}
        >
          <p style={{ opacity: 0.8, marginBottom: "30px" }}>
            Feel free to connect with me on professional networks
          </p>

          {/* Clickable Icons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" style={iconLinkStyle}>
              <div style={contactIconStyle}>🐙</div>
            </a>

            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" style={iconLinkStyle}>
              <div style={contactIconStyle}>💼</div>
            </a>

            <a href={EMAIL_URL} target="_blank" rel="noreferrer" style={iconLinkStyle}>
              <div style={contactIconStyle}>✉️</div>
            </a>
          </div>

          {/* Status Badge */}
          <div
            style={{
              marginTop: "30px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#020617",
              padding: "8px 16px",
              borderRadius: "999px",
              fontSize: "13px",
              opacity: 0.75,
            }}
          >
            <span style={{ color: "#22d3ee" }}>●</span>
            Social links active
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* Styles */
const aboutCardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backgroundColor: "#0f172a",
  padding: "20px",
  borderRadius: "14px",
  border: "1px solid #1e293b",
};

const iconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
  fontSize: "22px",
};

const cardLabel = {
  fontSize: "13px",
  opacity: 0.7,
};

const contactIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#020617",
  border: "1px solid #1e293b",
  fontSize: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const iconLinkStyle = {
  textDecoration: "none",
};

export default App;
