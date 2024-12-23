import React, { useState } from "react";

export default function AddFruitComponent() {
  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState([]);

  const addFruit = () => {
    setFruitList([...fruitList, { id: fruitList.length, name: fruit }]);
    setFruit("");
  };

  return (
    <>
      <label htmlFor="">Fruit</label>
      <div>
        <input
          type="text"
          className="form-control"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={addFruit}>
          Add Fruit
        </button>
      </div>

      <h4>Fruit List</h4>
      {fruitList.map((f) => (
        <ul key={f.id}>
          <li>{f.name}</li>
        </ul>
      ))}
    </>
  );
}
