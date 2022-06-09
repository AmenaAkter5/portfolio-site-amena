import React from 'react';
import image from '../../../assets/images/amena.png';
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner-section'>
            <div>
                <img src={image} alt="Manik Islam Mahi" />
            </div>
            <div>
                <h3>
                    Hello, My name is <span className='gradient-text-one'>Amena</span> I love design and i hope to make awesome designs and also i create a Landing Pages, Dynamic Pages.
                </h3>
            </div>
            <div className='d-flex mx-5'>
                <div>
                    <h1>
                        1
                    </h1>
                    <p>Year of Exprience</p>
                </div>

                <div>
                    <h1>
                        16
                    </h1>
                    <p>
                        PROJECTS COMPLETED</p>
                </div>

            </div>
            <div className='banner-line'>
            </div>
        </section>
    );
};

export default Banner;