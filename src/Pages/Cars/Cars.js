import React from "react";
import useCars from "../../hooks/useCars";
import Car from "../Car/Car";
import Footer from "../Shared/Footer/Footer";

const Cars = () => {
  const [cars] = useCars();
  return (
    <div className="bg-gray-100">
      <h1 className="w-3/4 mx-auto text-4xl font-semibold text-center rounded py-12">
        Cars
      </h1>
      <div className="">
        {cars.slice(0, 6).map((car) => (
          <Car car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Cars;
