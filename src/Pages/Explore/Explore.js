import React from "react";
import useCars from "../../hooks/useCars";
import Car from "../Car/Car";
import Footer from "../Shared/Footer/Footer";

const Explore = () => {
  const [cars] = useCars();
  return (
    <div className="bg-gray-100">
      <div className="">
        <h1 className="w-3/4 mx-auto text-4xl font-semibold text-center rounded py-12">
          Explore
        </h1>
        {cars.map((car) => (
          <Car car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Explore;
