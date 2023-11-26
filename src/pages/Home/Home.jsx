import React from 'react';
import Header from '../../components/Header';
import TopBanner from './TopBanner';
import Speciality from './Speciality';
import FoodItems from './FoodItems';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <Speciality />
            <FoodItems />
        </div>
    );
};

export default Home;