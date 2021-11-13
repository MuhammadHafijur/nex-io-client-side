import React from "react";
import useCars from "../../hooks/useCars";
import Car from "../Car/Car";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Cars = () => {
  const [cars] = useCars();
  return (
    <div className="">
      <Navigation></Navigation>
      {cars.map((car) => (
        <Car car={car}></Car>
      ))}
    </div>
  );
};

export default Cars;
