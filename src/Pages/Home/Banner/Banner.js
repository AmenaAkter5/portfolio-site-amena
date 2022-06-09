import React from 'react';
import image from '../../../assets/images/amena.png';
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner-section'>
            <div className='d-flex items-center'>
                <img src={image} alt="Manik Islam Mahi" />
            </div>
            <div className='description'>
                <h3>
                    Hello, My name is <span className='gradient-text-one'>Amena</span> and I am a Front End Web Developer. I love Coding. I am experienced to develop your expected website's functionality. I love to learn and like to explore new thing through my work experience. If you think we can work together to do great thing, then you can contact with me!
                </h3>
            </div>
            <div className='d-flex mx-5'>
                <div className='mb-5 me-5'>
                    <h1>
                        1
                    </h1>
                    <p>Year of <br></br> Exprience</p>
                </div>

                <div>
                    <h1>
                        16
                    </h1>
                    <p>
                        PROJECTS <br></br> COMPLETED</p>
                </div>

            </div>
            <div className='banner-line'>
            </div>
        </section>
    );
};

export default Banner;