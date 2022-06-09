import React from 'react';
import manikIslamMahi from '../../../assets/images/manik-islam-mahi.png';
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner-section'>
            <div>
                <img src={manikIslamMahi} alt="Manik Islam Mahi" />
            </div>
            <div>
                <h3 className='text-white'>
                    Hello, My name is hisham i love design and i hope to make awesome designs and also i create a Mobile AppsLanding PagesAwesome Design <span className='gradient-text-one'>Magic Manik</span>
                </h3>
            </div>
            <div className='d-flex mx-5'>
                <div>
                    <h1 className='text-white'>
                        12
                    </h1>
                    <p>Year of Exprience</p>
                </div>

                <div>
                    <h1 className='text-white'>
                        165
                    </h1>
                    <p>
                        PROJECTS COMPLETED
                        IN 19 COUNTRIES</p>
                </div>

                <div>
                    <h1 className='text-white'>
                        12
                    </h1>
                    <p>Year of Exprience</p>
                </div>

            </div>
            <div className='banner-line'>
            </div>
        </section>
    );
};

export default Banner;