import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 DEBASISH ROUT
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              4th Year B.Tech - Computer Science | Maharshi Dayanand University
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Delhi, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ debasishrout225@gmail.com | 📞 +91 7855948814
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              4th-year B.Tech Computer Science student experienced in Full-stack
              Development and computer vision. Skilled in Java, JavaScript,
              TypeScript and Web Development. Passionate about building
              impactful full-stack and seeking opportunities to contribute to
              real-world projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            <li>
              <strong>B.Tech in Computer Science</strong> - Maharshi Dayanand
              University, 2022–2026 <br />
              <span style={{ color: "#aaa" }}>{/*CGPA: */}</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board - Rainbow English Sr. Sec. School</strong>{" "}
              (CBSE, 2022) <br />
              <span style={{ color: "#aaa" }}>{/*Percentage: %*/}</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board - Rainbow English Sr. Sec. School</strong>{" "}
              (CBSE, 2020)
              <br />
              <span style={{ color: "#aaa" }}>{/*Percentage: %*/}</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Projects
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            <li>
              1️⃣ <b>Nexora:</b> Real world chat and calling web
            </li>
            <li>
              2️⃣ <b>GFRS 2025:</b> Annual Event of Food Safety and Standards
              Authority of India
            </li>
            <li>
              3️⃣ <b>22 Yards:</b> Modern, blazing fast web application that
              delivers real-time cricket scores
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            ⚙️ Skills
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "Java",
              "NEXT.js",
              "React",
              "MySQL",
              "PostgreSQL",
              "Git",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(0,180,255,0.3)",
                }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/debasish2250" },
            {
              name: "💼 LinkedIn",
              link: "https://www.linkedin.com/in/debasish57/",
            },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/Debasish Rout Resume.pdf"
            title="Debasish Rout Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/Debasish Rout Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
