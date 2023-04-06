import React, { useState } from "react";
import { Hero, Footer, Navbar, ToggleButton } from "./components";

function HelloWorld() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {isVisible && (
          <div
            id="hello-world"
            className="transition-opacity duration-500 ease-in-out my-4"
          >
            Hello, World!
          </div>
        )}
        <ToggleButton isVisible={isVisible} toggleVisibility={toggleVisibility} />
      </div>

      <div className="flex flex-col items-center">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default HelloWorld;
