import React from "react";
import moduleStyles from "./fruit.module.css";

export default function FriutComponent() {
  const Fruits = [
    { id: 1, name: "Apple", price: 2000 },
    { id: 2, name: "Banana", price: 1000 },
    { id: 3, name: "Mango", price: 1000 },
    { id: 4, name: "Pineapple", price: 3000 },
    { id: 5, name: "Papaya", price: 2000 },
  ];

  //need to key in the array

  return (
    <>
      <h1 className={moduleStyles.error}>Fruit List</h1>
      {Fruits.map((fruit) => (
        <ul style={{ color: "blue" }} key={fruit.id}>
          <li>Id : {fruit.id}</li>
          <li>Name : {fruit.name}</li>
          <li>Price : ${fruit.price}</li>
        </ul>
      ))}
    </>
  );
}
