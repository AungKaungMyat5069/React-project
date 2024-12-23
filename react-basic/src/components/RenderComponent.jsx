import React from "react";

export default function RenderComponent() {
  let isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <h1>Welcome to REact Project</h1>
      ) : (
        <h6>You're not allow to here</h6>
      )}
    </>
  );
}
