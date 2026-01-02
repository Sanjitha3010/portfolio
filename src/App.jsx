import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
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

      {/* Achievements Section */}
      <div
        id="achievements"
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "white",
          padding: "80px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Achievements & Events
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
              id: 1,
              title: "🥈 No Way Out",
              place: "Thiagarajar College of Engineering",
              desc:
                "Secured 2nd Prize by demonstrating analytical thinking, problem-solving, and teamwork.",
            },
            {
              id: 2,
              title: "🥇 Prompt Engineering",
              place: "Dhanalakshmi Srinivasan University",
              desc:
                "Won 1st Prize for designing effective AI prompts showcasing creativity and logical thinking.",
            },
            {
              id: 3,
              title: "🥉 Project Presentation",
              place: "SRM Valliammai College",
              desc:
                "Awarded 3rd Prize for clear presentation and strong technical understanding.",
            },
          ].map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: "#0f172a",
                padding: "25px",
                borderRadius: "16px",
                width: "300px",
                border:
                  hoveredCard === item.id
                    ? "1px solid #3b82f6"
                    : "1px solid #1e293b",
                transform:
                  hoveredCard === item.id
                    ? "translateY(-8px)"
                    : "translateY(0)",
                transition: "all 0.3s ease",
              }}
            >
              <h3>{item.title}</h3>
              <p style={{ opacity: 0.8, marginTop: "8px" }}>
                {item.place}
              </p>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "14px",
                  opacity: 0.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
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
          {/* Project 1 */}
          <div
            onMouseEnter={() => setHoveredCard("project1")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "16px",
              width: "300px",
              border:
                hoveredCard === "project1"
                  ? "1px solid #3b82f6"
                  : "1px solid #1e293b",
              transform:
                hoveredCard === "project1"
                  ? "translateY(-8px)"
                  : "translateY(0)",
              transition: "all 0.3s ease",
            }}
          >
            <h3>Attendance Management System</h3>
            <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.75 }}>
              Built an offline attendance system using basic programming concepts
              to understand data handling and logic implementation.
            </p>
            <p style={{ marginTop: "10px", fontSize: "13px", opacity: 0.6 }}>
              Technologies: Python / C++
            </p>
          </div>

          {/* Project 2 */}
          <div
            onMouseEnter={() => setHoveredCard("project2")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "16px",
              width: "300px",
              border:
                hoveredCard === "project2"
                  ? "1px solid #3b82f6"
                  : "1px solid #1e293b",
              transform:
                hoveredCard === "project2"
                  ? "translateY(-8px)"
                  : "translateY(0)",
              transition: "all 0.3s ease",
            }}
          >
            <h3>AI & DS Mini Projects</h3>
            <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.75 }}>
              Practiced small AI and Data Science concepts through academic
              assignments and learning-based mini projects.
            </p>
            <p style={{ marginTop: "10px", fontSize: "13px", opacity: 0.6 }}>
              Technologies: Python, Basics of ML
            </p>
          </div>

          {/* Project 3 */}
          <div
            onMouseEnter={() => setHoveredCard("project3")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "16px",
              width: "300px",
              border:
                hoveredCard === "project3"
                  ? "1px solid #3b82f6"
                  : "1px solid #1e293b",
              transform:
                hoveredCard === "project3"
                  ? "translateY(-8px)"
                  : "translateY(0)",
              transition: "all 0.3s ease",
            }}
          >
            <h3>Prompt Engineering Tasks</h3>
            <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.75 }}>
              Worked on structured prompt design and experimentation during
              competitions and learning sessions.
            </p>
            <p style={{ marginTop: "10px", fontSize: "13px", opacity: 0.6 }}>
              Skills: Prompt Design, Logical Thinking
            </p>
          </div>
        </div>
      </div>


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
