import React, { useState } from "react";
import {
  BsArrowBarLeft,
  BsArrowLeft,
  BsArrowRight,
  BsDot,
} from "react-icons/bs";

export default function Feature() {
  const slider = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlider = () =>
    setCurrentIndex(currentIndex === slider.length - 1 ? 0 : currentIndex + 1);

  const preSlider = () =>
    setCurrentIndex(currentIndex === 0 ? slider.length - 1 : currentIndex - 1);

  const moveSlider = (sliderIndex) => setCurrentIndex(sliderIndex);

  return (
    <>
      <section className=" max-w-[1520px] h-[500px] p-4 relative">
        {/* background  */}
        <div
          style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-300"
        ></div>

        {/* left arrow || right arrow */}
        <article className="cursor-pointer absolute top-[47%] translate-x-3 bg-orange-700 p-3 text-white rounded-full ">
          <BsArrowLeft size={25} onClick={preSlider} />
        </article>
        <article className=" cursor-pointer absolute top-[47%] right-[0%] translate-x-[-2rem] bg-orange-700 p-3 text-white rounded-full ">
          <BsArrowRight size={25} onClick={nextSlider} />
        </article>

        {/* dot choice */}
        <div className="flex p-2 justify-center">
          {slider.map((sliderContent, indexSlider) => (
            <div
              key={indexSlider}
              className="text-2xl cursor-pointer"
              onClick={() => moveSlider(indexSlider)}
            >
              <BsDot />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
