function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#020617",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
        borderTop: "1px solid #1e293b",
      }}
    >
      <p style={{ fontWeight: "600", marginBottom: "6px" }}>
        R Sanjitha
      </p>

      <p style={{ fontSize: "14px", opacity: 0.7 }}>
        B.Tech AI & Data Science Student
      </p>

      <p style={{ fontSize: "12px", opacity: 0.5, marginTop: "10px" }}>
        © {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}

export default Footer;
