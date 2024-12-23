import React, { useState, useEffect } from "react";
export default function UseEffectCleanUp() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mousePosition = (e) => {
    console.log("the mouse event ");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Use Effect is working");
    window.addEventListener("mousemove", mousePosition);

    return () => {
      console.log("Use Effect Clean Up");
    };
  }, [x]);

  // it is like useEffect(setup, optional)
  // in setup have also clean up function
  // [] is dependence cuz if doesn't have, useEffect will working every time something is changing in the page
  // [] is limit like, [x] if x is click, useEffect will be work,
  // but if empty[], useEffect will work every time each of useState is changing

  return (
    <>
      <p>Mouse Position</p>
      <p>
        X {x} and Y {y}
      </p>
    </>
  );
}
