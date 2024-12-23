import React, { useState } from "react";
import { topPicks } from "../data/data";

export default function Meal() {
  const [food, setFood] = useState(topPicks);

  const categories = (selectFood) => {
    setFood(
      selectFood
        ? topPicks.filter((item) => item.category === selectFood)
        : topPicks
    );
  };

  return (
    <>
      {/* top Meal title */}
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Meals
      </h1>
      {/*all, veg, fish, chicken, sea_food, noodle, korean */}
      <nav className="flex justify-evenly items-center w-[630px] mx-auto">
        <div
          onClick={() => categories()}
          className="bg-orange-500 text-white px-4 py-2 rounded-3xl m-2 hover:bg-white hover:text-orange-500 duration-300"
        >
          All
        </div>
        <div
          onClick={() => categories("veg")}
          className="bg-orange-500 text-white px-4 py-2 rounded-3xl m-2 hover:bg-white hover:text-orange-500 duration-300"
        >
          Vegetable
        </div>
        <div
          onClick={() => categories("fish")}
          className="bg-orange-500 text-white px-4 py-2 rounded-3xl m-2 hover:bg-white hover:text-orange-500 duration-300"
        >
          Fish
        </div>
        <div
          onClick={() => categories("chicken")}
          className="bg-orange-500 text-white px-4 py-2 rounded-3xl m-2 hover:bg-white hover:text-orange-500 duration-300"
        >
          Chicken
        </div>
        <div
          onClick={() => categories("sea_food")}
          className="bg-orange-500 text-white px-4 py-2 rounded-3xl m-2 hover:bg-white hover:text-orange-500 duration-300"
        >
          Sea_Food
        </div>
        <div
          onClick={() => categories("noodle")}
          className="bg-orange-500 text-white px-4 py-2 rounded-3xl m-2 hover:bg-white hover:text-orange-500 duration-300"
        >
          Noodle
        </div>
        <div
          onClick={() => categories("korean")}
          className="bg-orange-500 text-white px-4 py-2 rounded-3xl m-2 hover:bg-white hover:text-orange-500 duration-300"
        >
          Korean
        </div>
      </nav>
      {/* Meal */}
      <section className="my-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {food.map((items) => (
          <div
            className="border-none hover:scale-110 duration-300"
            key={items.id}
          >
            <img
              src={items.img}
              alt={items.title}
              className="h-[200px] w-full object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-4">
              <div className="bg-orange-700 h-18 w-18 -mt-10 rounded-full text-white py-4 px-2 border-8">
                {items.price}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
