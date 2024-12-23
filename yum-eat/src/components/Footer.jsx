import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="max-w-[1520px] mx-auto py-4 px-2 bg-[#24262b]">
        <div className="py-16 px-4 grid grid-cols-3 gap-8 text-gray-300">
          <article>
            <h2 className=" w-full text-orange-500 font-bold text-2xl">
              YumsEat
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis nostrum quis rerum nulla? Sit eveniet ipsum eligendi,
              distinctio fugiat tenetur voluptate, hic dolore nam, totam
              suscipit delectus id magni tempora. Ea repellendus porro
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
              <FaFacebook size={25} />
              <FaInstagram size={25} />
              <FaYoutube size={25} />
              <FaTelegram size={25} />
              <FaTwitter size={25} />
            </div>
          </article>
          <article className="flex justify-between mt-6 md:col-span-2">
            <div>
              <h3 className="font-medium text-[#9b9b9b]">Location</h3>
              <ul>
                <li className="py-2 text-sm">New York</li>
                <li className="py-2 text-sm">WashintonD.C</li>
                <li className="py-2 text-sm">Tokyo</li>
                <li className="py-2 text-sm">Souel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[#9b9b9b]">Location</h3>
              <ul>
                <li className="py-2 text-sm">New York</li>
                <li className="py-2 text-sm">WashintonD.C</li>
                <li className="py-2 text-sm">Tokyo</li>
                <li className="py-2 text-sm">Souel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[#9b9b9b]">Location</h3>
              <ul>
                <li className="py-2 text-sm">New York</li>
                <li className="py-2 text-sm">WashintonD.C</li>
                <li className="py-2 text-sm">Tokyo</li>
                <li className="py-2 text-sm">Souel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[#9b9b9b]">Location</h3>
              <ul>
                <li className="py-2 text-sm">New York</li>
                <li className="py-2 text-sm">WashintonD.C</li>
                <li className="py-2 text-sm">Tokyo</li>
                <li className="py-2 text-sm">Souel</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
