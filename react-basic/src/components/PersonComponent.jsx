import React from "react";

export default function PersonComponent({ name, children }) {
  // children is same as the ng-content like working
  return (
    <>
      <h4>I am {name} </h4>
      <>{children}</>
    </>
  );
}
