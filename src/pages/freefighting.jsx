import React from "react";

const FireFightingEquipment = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      {/* Hero Section */}
      <section style={{ background: "#fff", padding: "3rem 2rem", marginTop: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            {/* Left Content */}
            <div>
              <h1 style={{ 
                fontSize: "2.8rem", 
                fontWeight: 700, 
                marginBottom: "1.5rem", 
                color: "#ff6b00",
                lineHeight: 1.2
              }}>
                Fire Fighting Equipment
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#555", marginBottom: "2rem" }}>
                Our comprehensive range of fire fighting equipment provides effective fire suppression solutions to combat fires and protect your premises. From portable extinguishers to sophisticated suppression systems, we supply high-quality products that meet international standards.
              </p>
              
              {/* Brands */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem", color: "#333" }}>
                  Authorized Brand:
                </h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{
                    background: "#ff6b00",
                    color: "#fff",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: 600
                  }}>
                    FIREX
                  </span>
                </div>
              </div>

              {/* Catalogue Button */}
              <a 
                href="https://drive.google.com/drive/u/0/folders/1UHk4wrs7dN_42atHLYkZ5XiQJ3Lpwtcp"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#ff6b00",
                  color: "#fff",
                  padding: "1rem 2rem",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff8500";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ff6b00";
                }}
              >
                📥 Download Catalogue
              </a>
            </div>

            {/* Right Image */}
            <div style={{ 
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              border: "2px solid #ff6b00"
            }}>
              <img 
                src="/picture3.png"
                alt="Fire Fighting Equipment"
                style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section style={{ padding: "3rem 2rem", background: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "2rem", 
            fontWeight: 700, 
            marginBottom: "2rem",
            color: "#ff6b00",
            borderLeft: "4px solid #ff6b00",
            paddingLeft: "1rem"
          }}>
            Key Features & Products
          </h2>
          
          <div style={{ background: "#fff", borderRadius: "12px", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Portable Fire Extinguishers (ABC, CO2, Foam, Water, Wet Chemical)",
                "Fire Hose Reels and Landing Valves",
                "Fire Hydrant Systems and Equipment",
                "Fire Blankets for kitchen and laboratory safety",
                "Fire Suppression Systems (FM-200, CO2, Sprinkler Systems)",
                "Fire Pumps and Pump Controllers",
                "Fire Cabinets and Hose Boxes",
                "Fire Safety Signage and Safety Equipment"
              ].map((feature, index) => (
                <li key={index} style={{
                  padding: "1rem 0",
                  paddingLeft: "2.5rem",
                  position: "relative",
                  fontSize: "1rem",
                  color: "#555",
                  borderBottom: index < 7 ? "1px solid #eee" : "none"
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: "1rem",
                    width: "24px",
                    height: "24px",
                    background: "#ff6b00",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.8rem"
                  }}>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireFightingEquipment;