import React from "react";

export default function GreetingComponents(props) {
  //props is immutable and it can be only read
  //{ name } writing like this meant distruction props
  return (
    <>
      <h4>Hello {props.name}</h4>
    </>
  );
}
