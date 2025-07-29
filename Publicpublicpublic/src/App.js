import React from "react";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", background: "#f0fdf4" }}>
      <h1 style={{ color: "#166534" }}>Get Better With Maria</h1>
      <p>🌿 Natural advice first. Medical support when needed.</p>

      <textarea
        placeholder="Describe your symptoms..."
        rows="4"
        style={{ width: "100%", margin: "1rem 0" }}
      ></textarea>

      <button
        style={{
          backgroundColor: "#16a34a",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Check Plant-Based Advice
      </button>

      <div style={{ marginTop: "2rem" }}>
        <h3>Example Remedies:</h3>
        <ul>
          <li>🍋 Lemon + honey for sore throat</li>
          <li>🌿 Peppermint tea for nausea</li>
          <li>🌸 Lavender for sleep aid</li>
        </ul>
      </div>
    </div>
  );
               }
