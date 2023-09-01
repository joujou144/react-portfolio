import { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/Particles";

const App = () => {
  // const [offsetY, setOffsetY] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
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
      <section className="container">
        <div className="inner-container">
          {/* <ParticlesBackground /> */}
          <Header width={width} setActiveTab={setActiveTab} />

          <Main
            width={width}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <Footer width={width} />
        </div>
      </section>
    </>
  );
};

export default App;
