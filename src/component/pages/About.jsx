import React, { useState } from "react";
import "../css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft, faAmazon, faGoogle } from "@fortawesome/free-brands-svg-icons";

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  animation: 'floatAnimation 2s ease-in-out infinite', // Example float animation, replace with your own
};

const floatAnimation = `
  @keyframes floatAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;



export const AboutUs = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'radial-gradient(circle, rgba(238,174,174,1) 40%, rgba(148,233,197,1) 51%)',
    padding: '20px', // Adjust padding as needed
    margin: 0,
    minHeight: '100vh',
  };

  const headingStyle = {
    fontFamily: "Adobe Caslon",
    fontSize: "55px",
    fontStyle: "italic",
    textAlign: "left",
    color: "#44593A",
    animation: "spin 5s linear forwards",
    whiteSpace: 'pre-line',
    flex: '1',
  };

  return (
    <div className="home" style={containerStyle}>
   
      <style>{floatAnimation}</style>
      <h2 style={headingStyle}>
        Interview, Job {'\n'}Preparation
      </h2>
      <img src="/round-1.png" alt="Your Alt Text" style={imageStyle} />
    </div>
  );
};






const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "-100px",
  position: "relative",
  transition: "width 0.5s ease-in-out",
};

const expandedCardContainerStyle = {
  width: "100%",
};

const generateGradient = (color1, color2) => {
  return `linear-gradient(45deg, ${color1}, ${color2})`;
};

const cardStyle = {
  width: "30%",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.3s ease-in-out, width 0.5s ease-in-out",
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const expandedCardStyle = {
  width: "100%",
};

const cardContentStyle = {
  flex: 1,
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "#44593A",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out",
};

const hoverStyle = {
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
};

const buttonHoverStyle = {
  backgroundColor: "#344532",
};

export const OurAim = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  const handleButtonClick = (companyLink) => {
    window.open(companyLink, "_blank");
  };

  return (
    <div className="home" onClick={handleCardClick}>
      <div
        style={{
          ...cardContainerStyle,
          ...(expanded && expandedCardContainerStyle),
        }}
      >
        <div
          style={{
            ...cardStyle,
            ...(expanded && expandedCardStyle),
            ...hoverStyle,
            background: generateGradient("#FFD43B", "#FFA319"),
          }}
        >
          <FontAwesomeIcon
            icon={faMicrosoft}
            flip
            rotation={180}
            style={{ color: "#FFD43B", fontSize: "2em" }}
          />
          <div style={cardContentStyle}>
            <h2>Microsoft</h2>
            <p>Explore the world of Microsoft</p>
          </div>
          <button
            style={{ ...buttonStyle, ...buttonHoverStyle }}
            onClick={() => handleButtonClick("https://www.microsoft.com/en-in/about/")}
          >
            Microsoft
          </button>
        </div>
        <div
          style={{
            ...cardStyle,
            ...(expanded && expandedCardStyle),
            ...hoverStyle,
            background: generateGradient("#B197FC", "#7044FF"),
          }}
        >
          <FontAwesomeIcon
            icon={faAmazon}
            beat
            rotation={90}
            style={{ color: "#B197FC", fontSize: "2em" }}
          />
          <div style={cardContentStyle}>
            <h2>Amazon</h2>
            <p>Discover the wonders of Amazon</p>
          </div>
          <button
            style={{ ...buttonStyle, ...buttonHoverStyle }}
            onClick={() => handleButtonClick("https://www.aboutamazon.in/about-us")}
          >
            Amazon
          </button>
        </div>
        <div
          style={{
            ...cardStyle,
            ...(expanded && expandedCardStyle),
            ...hoverStyle,
            background: generateGradient("#74C0FC", "#0088FF"),
          }}
        >
          <FontAwesomeIcon
            icon={faGoogle}
            shake
            rotation={270}
            style={{ color: "#74C0FC", fontSize: "2em" }}
          />
          <div style={cardContentStyle}>
            <h2>Google</h2>
            <p>Google: Organizing the world's information</p>
          </div>
          <button
            style={{ ...buttonStyle, ...buttonHoverStyle }}
            onClick={() => handleButtonClick("https://about.google/intl/ALL_in/")}
          >
            Visit Google
          </button>

        </div>
      </div>

    </div>

   


  );
};

