import { useState } from "react";

function Achievements() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="achievements"
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "white",
        padding: "80px 40px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Achievements <span style={{ color: "#3b82f6" }}>& Recognition</span>
      </h2>

      <p
        style={{
          textAlign: "center",
          opacity: 0.7,
          marginBottom: "50px",
        }}
      >
        Highlights from inter-college events and competitions
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {/* Achievement 1 */}
        <div
          onMouseEnter={() => setHoveredCard("a1")}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            ...cardStyle,
            border:
              hoveredCard === "a1"
                ? "1px solid #3b82f6"
                : "1px solid #1e293b",
            transform:
              hoveredCard === "a1"
                ? "translateY(-8px)"
                : "translateY(0)",
          }}
        >
          <h3>🥈 Runner-Up – No Way Out</h3>
          <p style={eventStyle}>TECHUTSAV’25 – PANORAMA</p>
          <p style={collegeStyle}>
            Thiagarajar College of Engineering, Madurai
          </p>
          <p style={dateStyle}>20 March 2025</p>
          <ul style={listStyle}>
            <li>Non-technical problem-solving event</li>
            <li>Focused on logical thinking and teamwork</li>
            <li>Competed with teams from multiple colleges</li>
            <li>Secured Runner-Up position with trophy & certificate</li>
          </ul>
        </div>

        {/* Achievement 2 */}
        <div
          onMouseEnter={() => setHoveredCard("a2")}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            ...cardStyle,
            border:
              hoveredCard === "a2"
                ? "1px solid #3b82f6"
                : "1px solid #1e293b",
            transform:
              hoveredCard === "a2"
                ? "translateY(-8px)"
                : "translateY(0)",
          }}
        >
          <h3>🥇 Winner – Prompt Engineering</h3>
          <p style={eventStyle}>TechFlare 2K25</p>
          <p style={collegeStyle}>
            Dhanalakshmi Srinivasan University, Tiruchirappalli
          </p>
          <p style={dateStyle}>August 2025</p>
          <ul style={listStyle}>
            <li>Competition focused on Generative AI</li>
            <li>Designed effective prompts for better AI responses</li>
            <li>Demonstrated creativity and structured thinking</li>
            <li>Awarded 1st Prize for best performance</li>
          </ul>
        </div>

        {/* Achievement 3 */}
        <div
          onMouseEnter={() => setHoveredCard("a3")}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            ...cardStyle,
            border:
              hoveredCard === "a3"
                ? "1px solid #3b82f6"
                : "1px solid #1e293b",
            transform:
              hoveredCard === "a3"
                ? "translateY(-8px)"
                : "translateY(0)",
          }}
        >
          <h3>🥉 Second Runner-Up – Project Presentation</h3>
          <p style={eventStyle}>MEDARZT’25 – National Level Symposium</p>
          <p style={collegeStyle}>
            SRM Valliammai Engineering College, Chennai
          </p>
          <p style={dateStyle}>11 October 2025</p>
          <ul style={listStyle}>
            <li>Presented a technical paper / project</li>
            <li>Explained methodology and outcomes clearly</li>
            <li>Improved technical presentation skills</li>
            <li>Secured Second Runner-Up position</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Styles */
const cardStyle = {
  backgroundColor: "#0f172a",
  padding: "25px",
  borderRadius: "16px",
  width: "320px",
  transition: "all 0.3s ease",
};

const eventStyle = {
  color: "#3b82f6",
  marginTop: "6px",
};

const collegeStyle = {
  opacity: 0.85,
  marginTop: "6px",
};

const dateStyle = {
  fontSize: "13px",
  opacity: 0.6,
  marginTop: "4px",
};

const listStyle = {
  marginTop: "14px",
  fontSize: "14px",
  opacity: 0.75,
  lineHeight: "1.6",
};

export default Achievements;
