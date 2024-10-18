import React from 'react';
import HomeCard from './HomeCard';
import homeData from './homeData';
import { HomePage, HomeWrapper } from './HomeStyled';

const Home = () => {

    document.body.classList.contains('overflow_hide') && document.body.classList.remove('overflow_hide');


    return (
        <>
            <HomePage>
                <div className="container">
                    <header id="header">
                        <h1><span>Portfolio</span></h1>
                        <a href="https://mizuka.vercel.app/">
                        https://mizuka.vercel.app/ </a>
                        <h1><span>React</span> Projects</h1>
                        <a href="https://github.com/Zahooruddin-dev">
                        https://github.com/Zahooruddin-dev
                        </a>
                    </header>
                    <HomeWrapper>
                        {
                            homeData.map((currValue) => {
                                return (
                                    <HomeCard
                                        key={currValue.id}
                                        {...currValue}
                                    />
                                );
                            })
                        }
                    </HomeWrapper>
                    <footer id="footer">
                        <p>Built by | <a href="https://mizuka.vercel.app/">Muhammad Zahooruddin Nizamani</a></p>
                    </footer>
                </div>
            </HomePage>
        </>
    );
};

export default Home;