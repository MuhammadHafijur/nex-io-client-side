import React from "react";
import useCars from "../../hooks/useCars";
import Car from "../Car/Car";

const Cars = () => {
  const [cars] = useCars();
  return (
    <div className="">
      {cars.map((car) => (
        <Car car={car}></Car>
      ))}
    </div>
  );
};

export default Cars;
