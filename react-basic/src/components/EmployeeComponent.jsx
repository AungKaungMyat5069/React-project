import React, { useState } from "react";

export default function EmployeeComponent() {
  const [employee, setEmployee] = useState({ name: "", country: "" });

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) =>
            setEmployee({ ...employee, country: e.target.value })
          }
        />
      </div>

      <div>
        <h4>name : {employee.name}</h4>
        <h4>Country : {employee.country}</h4>
      </div>
    </>
  );
}
