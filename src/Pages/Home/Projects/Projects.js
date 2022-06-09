import React from 'react';
import tools from '../../../assets/images/toolsify.png';
import fruits from '../../../assets/images/fruity.PNG';
import healer from '../../../assets/images/healer.PNG';
import code from '../../../assets/images/code.PNG';
import selector from '../../../assets/images/selector.PNG';
import salon from '../../../assets/images/salon.PNG';
import './Projects.css';

const Projects = () => {

    return (
        <section className='project-section'>
            <div>
                <p className='text-center text-white'>BEST Projects</p>
                <h4 className='text-center gradient-text-one'>Projects of Amena Akter</h4>
            </div>
            <div className='project-container'>
                <div>
                    <div className='project'>
                        <a href="/"><img src={tools} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={fruits} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={healer} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={code} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={selector} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={salon} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;