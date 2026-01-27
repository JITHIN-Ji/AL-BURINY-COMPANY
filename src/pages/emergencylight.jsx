import React, { useState } from "react";

const EmergencyLightingSystems = () => {
  const [imageScale, setImageScale] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleImageMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setImageScale(1.1);
  };

  const handleImageMouseLeave = () => {
    setImageScale(1);
  };

  const handleDownloadCatalogue = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    const pdfFileName = "emergencylighting-systems.pdf";
    link.href = `/${pdfFileName}`;
    link.download = pdfFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const products = [
    {
      title: "LED Emergency Exit Signs",
      description: "High-visibility LED exit signs with energy-efficient technology, featuring long-lasting illumination, low power consumption, and clear directional indicators compliant with international safety codes.",
      image: "/exit-sign.png"
    },
    {
      title: "Emergency Bulkhead Lights",
      description: "Robust bulkhead lighting fixtures designed for corridors and escape routes, providing reliable illumination with impact-resistant housings and extended battery life for safe evacuation.",
      image: "/bulkhead-light.png"
    },
    {
      title: "Self-Contained Emergency Units",
      description: "Independent emergency lighting units with integrated battery backup systems, offering 3-hour minimum duration, automatic activation on power failure, and minimal maintenance requirements.",
      image: "/self-contained-unit.png"
    },
    {
      title: "Central Monitoring Systems",
      description: "Sophisticated centralized emergency lighting control systems for large facilities, enabling real-time monitoring, automated testing, fault detection, and comprehensive reporting capabilities.",
      image: "/central-monitoring.png"
    },
    {
      title: "Maintained & Non-Maintained Lights",
      description: "Versatile emergency lighting options including maintained lights that operate continuously and non-maintained units that activate only during power outages, suitable for various applications.",
      image: "/maintained-light.png"
    },
    {
      title: "Weatherproof Emergency Lighting",
      description: "IP65-rated outdoor emergency lighting solutions with corrosion-resistant materials, sealed enclosures, and weatherproof designs for parking areas, building exteriors, and exposed locations.",
      image: "/weatherproof-light.png"
    },
    {
      title: "Automatic Self-Testing Systems",
      description: "Intelligent emergency lighting with built-in self-testing functionality, performing automated function and duration tests while logging results and alerting maintenance teams to potential issues.",
      image: "/self-testing-system.png"
    },
    {
      title: "Customizable Exit Sign Designs",
      description: "Tailored exit signage with multiple pictogram options, custom text capabilities, and various mounting configurations to meet specific building requirements and comply with local regulations.",
      image: "/custom-exit-sign.png"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      {/* Hero Section */}
      <section style={{ background: "#fff", padding: "8rem 2rem 3rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "3rem", 
            alignItems: "center" 
          }}>
            {/* Left Content */}
            <div>
              <h1 style={{ 
                fontSize: "clamp(2rem, 5vw, 2.8rem)", 
                fontWeight: 700, 
                marginBottom: "1.5rem", 
                color: "#ff6b00",
                lineHeight: 1.2
              }}>
                Emergency Lighting Systems
              </h1>
              <p style={{ 
                fontSize: "clamp(1rem, 2vw, 1.1rem)", 
                lineHeight: 1.7, 
                color: "#555", 
                marginBottom: "2rem" 
              }}>
                SIGMA LUX emergency lighting systems provide reliable illumination solutions to ensure safe evacuation during power failures or emergencies. Our own brand combines cutting-edge LED technology with robust design to meet and exceed international safety regulations.
              </p>

              {/* Catalogue Button */}
              <button
                onClick={handleDownloadCatalogue}
                style={{
                  display: "inline-block",
                  background: "#ff6b00",
                  color: "#fff",
                  padding: "1rem 2rem",
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  fontWeight: 600,
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff8500";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ff6b00";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                📥 Download Catalogue
              </button>
            </div>

            {/* Right Image */}
            <div style={{ 
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              border: "2px solid #ff6b00"
            }}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}>
              <img 
                src="/picture2.png"
                alt="Emergency Lighting Systems"
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  maxHeight: "400px", 
                  objectFit: "cover", 
                  display: "block",
                  transform: `scale(${imageScale})`,
                  transition: "transform 0.3s ease"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section style={{ padding: "3rem 1rem", background: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "clamp(1.5rem, 4vw, 2rem)", 
            fontWeight: 700, 
            marginBottom: "3rem",
            color: "#ff6b00",
            borderLeft: "4px solid #ff6b00",
            paddingLeft: "1rem"
          }}>
            Key Features & Products
          </h2>
          
          <div style={{ display: "grid", gap: "2rem" }}>
            {products.map((product, index) => (
              <div 
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: hoveredProduct === index ? "0 8px 24px rgba(255, 107, 0, 0.15)" : "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  display: "grid",
                  gridTemplateColumns: window.innerWidth > 768 ? "250px 1fr" : "1fr",
                  gap: "1.5rem",
                  alignItems: "center"
                }}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "2px solid #f0f0f0",
                  height: window.innerWidth > 768 ? "200px" : "250px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f9f9f9"
                }}>
                  <img 
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: hoveredProduct === index ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease"
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: #ff6b00; font-size: 3rem;">💡</div>`;
                    }}
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 style={{
                    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                    fontWeight: 600,
                    color: "#ff6b00",
                    marginBottom: "0.75rem"
                  }}>
                    {product.title}
                  </h3>
                  <p style={{
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    lineHeight: 1.6,
                    color: "#666",
                    margin: 0
                  }}>
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyLightingSystems;