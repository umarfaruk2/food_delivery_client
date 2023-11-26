import React from 'react';
import Header from '../../components/Header';
import TopBanner from './TopBanner';
import Speciality from './Speciality';
import FoodItems from './FoodItems';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <Speciality />
            <FoodItems />
            <Footer />
        </div>
    );
};

export default Home;