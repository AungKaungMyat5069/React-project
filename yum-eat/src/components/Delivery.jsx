import React from "react";

export default function Delivery() {
  return (
    <>
      <section className="max-w-[1520px] py-16 px-4">
        <h3 className="text-center text-orange-500 text-2xl font-bold capitalize">
          Quick Delivery App
        </h3>
      </section>
      <section className="w-full mx-auto grid md:grid-cols-2">
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt="phone ad"
          className="w-[500px] mx-auto my-1 "
        />
        <article className="flex flex-col justify-center sm:mx-4 sm:items-center md:items-start">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
            Get the App
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Limitless Convience of Demand
          </h1>
          <p className="w-[30rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            molestias perferendis enim temporibus expedita, incidunt reiciendis
            impedit totam voluptatum explicabo natus assumenda nemo, laudantium
            neque vitae quo nam suscipit repellat. Omnis minima cumque
            laboriosam in ipsa enim veritatis perferendis excepturi cum, at,
            eligendi itaque dolor distinctio error tempore iusto repudiandae
            ducimus nam beatae consequuntur inventore maiores eius maxime
            fugiat. Reiciendis.
          </p>
          <button className=" hover:bg-slate-600 text-white duration-300 bg-black w-40 py-4 m-4 rounded-md capitalize font-bold">
            get Start
          </button>
        </article>
      </section>
    </>
  );
}
