import React from 'react';
import useCars from '../../hooks/useCars';
import Car from '../Car/Car';
import Cars from '../Cars/Cars';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [cars] = useCars();
    return (
        <div className="bg-gray-100">
          <Navigation></Navigation>
          <div className="">
          <h1 className="w-3/4 mx-auto text-4xl font-semibold text-center rounded my-12">Explore</h1>
      {cars.map((car) => (
        <Car car={car}></Car>
      ))}
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Explore;