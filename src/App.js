import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className = "flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className = "text-center">
        <div className="text-4xl font-bold"> Our Players</div>
        <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
        <Testimonial reviews = {reviews}/>
      </div>
    </div>

  );
};

export default App;
