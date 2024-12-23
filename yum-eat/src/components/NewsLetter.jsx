import React from "react";

export default function NewsLetter() {
  return (
    <>
      <section className="max-w-[1520px] m-auto text-white px-4 bg-[#24162b]">
        <div className="mx-auto grid md:grid-cols-3">
          <div className="md:col-span-2 my-4">
            <h1>Need advice on how to improve your flow?</h1>
            <p>
              Sign up to our newsletter and{" "}
              <span className="text-orange-500">stay up to date</span>
            </p>
          </div>
          <div className=" mt-3 flex md:flex-col sm:flex-row justify-center items-center w-full">
            <div className="flex">
              <input
                type="email"
                className="rounded w-full text-black h-12 translate-y-4"
              />
              <button className="bg-[#00dfa9] text-white rounded font-medium w-[200px] ml-6 my-4 py-3 border-none">
                Nofiy Me
              </button>
            </div>
            <p>
              We are concerned about security of your data. Read{" "}
              <span className="text-[#00dfa9]">Our Policy and Pivacy</span>
              <hr className="my-8 bg-gray-400 border-1" />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
