import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const {carId} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        fetch('/cars.json')
          .then((res) => res.json())
          .then((data) => setCar(data.find((item) => +carId === item.id)));
      }, [carId]);
    return (
        <div>
            <h1>This is a purchase {carId}</h1>
            <h2>{car.title}</h2>
        </div>
    );
};

export default Purchase;