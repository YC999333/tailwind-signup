import React, { useState } from "react";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App flex flex-col sm:flex-row justify-center md:gap-10 sm:p-5 sm:p-1 items-center bg-bgImage bg-bgred min-h-screen">
      <div className="w-4/5 sm:w-1/2 md:w-1/3 xl:1/4 p-2 mt-20">
        <p className="text-white text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Learn to code by watching others
        </p>
        <p className="break-words text-center text-white text-md lg:text-base my-2 mt-10">
          see how experienced developers solve problems in real-time Watching
          scripted tutorials is great, but understanding how developers are
          thinking in invaluable
        </p>
      </div>

      <Signup />
    </div>
  );
}

export default App;
