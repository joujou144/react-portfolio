import { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/Particles";

const App = () => {
  // const [offsetY, setOffsetY] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  // const handleScroll = () => setOffsetY(window.scrollY);

  const updateWidth = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    // console.log(height);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <>
      <ParticlesBackground
        width={width}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <section className="app">
        <div className="container">
          <Header
            width={width}
            showContent={showContent}
            setShowContent={setShowContent}
          />

          <Main
            width={width}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            showContent={showContent}
            setShowContent={setShowContent}
          />

          <Footer width={width} />
        </div>
      </section>
    </>
  );
};

export default App;
