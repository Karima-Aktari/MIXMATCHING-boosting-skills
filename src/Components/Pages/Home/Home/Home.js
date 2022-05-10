import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import ShowReviews from '../ShowReviews/ShowReviews';
import DesignerCollection from '../DesignerCollection/DesignerCollection';

const Home = () => {
    return (
        <div className="bg-dark">
            <h1 className="text-danger text-2xl">Welcome to Your MIXMATCHING!</h1>
            <Header></Header>
            <Products></Products>
            <DesignerCollection />
            <ShowReviews></ShowReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;