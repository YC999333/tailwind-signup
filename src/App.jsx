import React, { useState } from "react";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App flex flex-col font-poppins sm:flex-row justify-center md:gap-10 p-5 sm:p-1 items-center bg-bgImage bg-bgred min-h-screen py-20">
      <div className="w-11/12 sm:w-1/2 md:w-1/3 p-3 xl:p-2 mt-10">
        <p className="text-white text-center xl:text-left font-bold text-3xl md:text-4xl lg:text-5xl">
          Learn to code by watching others
        </p>
        <p className="break-normal text-center xl:text-left text-white text-base lg:text-base mt-10">
          See how experienced developers solve problems in real-time. Watching{" "}
          scripted tutorials is great, but understanding how developers are
          thinking in invaluable
        </p>
      </div>

      <Signup />
    </div>
  );
}

export default App;
