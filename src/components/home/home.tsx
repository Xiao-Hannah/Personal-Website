import React from "react";
import catBackground from '../../assets/images/cat.gif';
import './home.css';


const Home = () => {
    return (
        <div className={"home-container"}>
            <img className="cat-background" src={catBackground} alt="home background image" />
        </div>
    );
};

export default Home;
