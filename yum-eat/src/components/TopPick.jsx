import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import { topPicks } from "../data/data.jsx";

export default function TopPick() {
  return (
    <>
      {/* top Pick title */}
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>

      {/* slider of dishes */}
      <section className="flex max-w-[1520px] m-auto p-2">
        <Splide
          options={{ perPage: 4, gap: "0.5rem", arrows: false, rewind: true }}
        >
          {topPicks.map((item) => (
            <SplideSlide key={item.id} className="rounded-3xl relative">
              <img
                src={item.img}
                alt={item.title}
                className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-200"
              />
              <p className="p-2 absolute text-white top-0 text-xl font-semibold">
                {item.title}
              </p>
              <p className="p-2 absolute text-white top-8 text-2xl font-bold">
                {item.price}
              </p>
              <button className=" absolute bottom-4 border-white text-white mx-2 border-dotted">
                Get
              </button>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </>
  );
}
