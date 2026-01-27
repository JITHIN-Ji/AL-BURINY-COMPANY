import React, { useState } from "react";

const FireAlarmSystems = () => {
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

  const handleDownloadCatalogue = (brand) => {
    // Map brand names to PDF filenames
    const brandToPdfMap = {
      "GST": "gst.pdf",
      "FIREX-UK": "firex.pdf",
      "SDS": "sds.pdf"
    };
    
    const pdfFileName = brandToPdfMap[brand] || `${brand.toLowerCase()}.pdf`;
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = `/${pdfFileName}`;
    link.download = pdfFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const products = [
    {
      title: "Addressable Fire Alarm Control Panels",
      description: "Advanced intelligent panels with addressable detection capabilities, providing precise fire location identification and comprehensive system control with graphical user interface and network connectivity options.",
      image: "/control-panel.png"
    },
    {
      title: "Conventional Fire Alarm Systems",
      description: "Reliable and cost-effective conventional systems ideal for smaller installations, offering zone-based detection with simple configuration and maintenance for residential and small commercial buildings.",
      image: "/conventional-system.png"
    },
    {
      title: "Intelligent Smoke and Heat Detectors",
      description: "Multi-sensor detectors with advanced algorithms for accurate fire detection, reducing false alarms while providing early warning through optical, ionization, and thermal sensing technologies.",
      image: "/smoke-detector.png"
    },
    {
      title: "Manual Call Points",
      description: "Break glass manual call points strategically positioned for manual fire alarm activation, featuring weatherproof enclosures and tamper-resistant designs with easy reset functionality.",
      image: "/manual-call-point.png"
    },
    {
      title: "Fire Alarm Sounders and Visual Indicators",
      description: "High-output audio-visual devices including sirens, bells, and strobe lights ensuring clear emergency notifications compliant with accessibility standards for hearing and visually impaired individuals.",
      image: "/sounder-beacon.png"
    },
    {
      title: "Zone Monitoring Modules",
      description: "Interface modules for integrating conventional devices with addressable systems, providing input/output control for auxiliary equipment and seamless communication between system components.",
      image: "/monitoring-module.png"
    },
    {
      title: "Building Management Integration",
      description: "Seamless integration capabilities with BMS platforms enabling centralized monitoring, automated HVAC control during fire events, and comprehensive facility management through unified interfaces.",
      image: "/bms-integration.png"
    },
    {
      title: "24/7 System Monitoring & Maintenance",
      description: "Round-the-clock remote monitoring services with scheduled preventive maintenance, emergency response support, and comprehensive system health checks ensuring optimal performance and compliance.",
      image: "/monitoring-service.png"
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
                Fire Alarm Systems
              </h1>
              <p style={{ 
                fontSize: "clamp(1rem, 2vw, 1.1rem)", 
                lineHeight: 1.7, 
                color: "#555", 
                marginBottom: "2rem" 
              }}>
                Our advanced fire detection and alarm systems are designed to provide early warning and maximum protection for your facility. We offer comprehensive solutions from leading international brands GST, FIREX, and SDS, ensuring reliability and compliance with international safety standards.
              </p>
              
              {/* Brands */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ 
                  fontSize: "clamp(1rem, 2vw, 1.2rem)", 
                  fontWeight: 600, 
                  marginBottom: "1rem", 
                  color: "#333" 
                }}>
                  Authorized Brands:
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flexWrap: "wrap" }}>
                  {["GST", "FIREX-UK", "SDS"].map((brand) => (
                    <div key={brand} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      flexWrap: "wrap"
                    }}>
                      <span style={{
                        background: "#ff6b00",
                        color: "#fff",
                        padding: "0.5rem 1.5rem",
                        borderRadius: "8px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        minWidth: "120px"
                      }}>
                        {brand}
                      </span>
                      <button
                        onClick={() => handleDownloadCatalogue(brand)}
                        style={{
                          background: "#ff6b00",
                          color: "#fff",
                          padding: "0.5rem 1.5rem",
                          fontSize: "clamp(0.9rem, 2vw, 1rem)",
                          fontWeight: 600,
                          borderRadius: "8px",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem"
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
                  ))}
                </div>
              </div>
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
                src="/picture1.png"
                alt="Fire Alarm Systems"
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
                      e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: #ff6b00; font-size: 3rem;">🚨</div>`;
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

export default FireAlarmSystems;