import { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/Particles";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [, setHeight] = useState(window.innerHeight);
  const [showContent, setShowContent] = useState(false);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <div className="container">
      <ParticlesBackground />
      <Header
        width={width}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <Main
        width={width}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <Footer width={width} />
    </div>
  );
};

export default App;
