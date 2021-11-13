import { useEffect, useState } from 'react';

const useCars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("https://dry-mountain-92011.herokuapp.com/cars")
        .then(res => res.json())
        .then(data => {
            setCars(data)
        })
    }, [])
    return [cars];
};

export default useCars;

