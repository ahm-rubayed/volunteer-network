import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
          <h1 className="text-5xl font-semibold text-yellow-400">GIVE A HAND</h1>
          <h2 className="text-5xl font-bold text-white my-8">
            TO MAKE THE BETTER WORLD
          </h2>
          <p className="text-white tracking-widest">
            That don't lights. Blessed land spirit creature divide our made two
            itself upon you'll dominion waters man second good you they're
            divided upon winged were replenish night
          </p>
          <button className="btn bg-green-600 hover:bg-inherit mr-4 mt-6 px-12 border-0 hover:border">See cause</button>
          <button className="btn bg-yellow-400 hover:bg-inherit mt-6 px-12 border-0 hover:border">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
