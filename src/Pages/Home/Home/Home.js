import React from 'react';
import Cars from '../../Cars/Cars';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Cars></Cars>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;