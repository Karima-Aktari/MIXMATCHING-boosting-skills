import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>

            <h1> This is home</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;