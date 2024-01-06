import "./Hero.css";
import "react-awesome-button/dist/styles.css";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import Quote from "../Quote/Quote";


const TEXTS = ["Save Money", "Increase Property Value", "Save the Planet"];

const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="hero">
      <div className="content">
        <div className="text-center alltext">
          <h1 className="fw-bold display-5 color">GO SOLAR</h1>

          <h1 className="fw-bold display-5 text-center">
            <TextTransition className="d-flex justify-content-center" springConfig={presets.stiff}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>

          <p className="moretext">
            Welcome to <span className="color">Sunway Solar Systems</span>, the leading solar company in
            <span className="color"> Kerala</span>. We provide high-quality and affordable solar solutions for
            your <span className="color">home and business</span> needs. Whether you want to reduce your
            electricity bills, protect the environment, or achieve energy
            independence, we have the <span className="color">right solution</span> for you.
          </p>
          <Quote/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
