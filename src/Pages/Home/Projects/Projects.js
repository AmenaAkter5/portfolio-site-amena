import React from 'react';
// import tools from '../../../assets/images/toolsify.png';
// import fruits from '../../../assets/images/fruity.PNG';
// import healer from '../../../assets/images/healer.PNG';
// import code from '../../../assets/images/code.PNG';
// import selector from '../../../assets/images/selector.PNG';
// import salon from '../../../assets/images/salon.PNG';
import {useNavigate} from 'react-router-dom';
import './Projects.css';
import useProjects from '../../../hooks/useProjects';

const Projects = () => {

    const [projects] = useProjects();

    const navigate = useNavigate();


    const handleDetails = id => {
        navigate(`/project/${id}`)
    }

    return (
        <section className='project-section'>
            <div>
                <h5 className='text-center fw-bold'>BEST Projects</h5>
                <h2 className='text-center gradient-text-one'>Projects of Amena Akter</h2>
            </div>
            <div className='project-container'>

            {
                    projects.map(project =>
                        <div key={project._id}>
                            <div className='project'>
                                <a href="/"><img src={project.img1} alt="" /></a>
                                <p className='px-1'>This is a compact Warehouse Management application. And This application provides different types of storing packages of fruits according to clients' demands.</p>
                                <button className='btn btn-primary mb-3 ms-2' onClick={() => handleDetails(project._id)}>Explore more</button>
                            </div>
                        </div>)
                }

                {/* <div>
                    <div className='project'>
                        <a href="/"><img src={tools} alt="" /></a>
                        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                        <button onClick={() => handleDetails(1)}>Explore More</button>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={fruits} alt="" /></a>
                        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                        <button onClick={() => handleDetails(2)}>Explore More</button>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={healer} alt="" /></a>
                        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                        <button onClick={() => handleDetails(3)}>Explore More</button>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={code} alt="" /></a>
                        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                        <button onClick={() => handleDetails(4)}>Explore More</button>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={selector} alt="" /></a>
                        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                        <button onClick={() => handleDetails(5)}>Explore More</button>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={salon} alt="" /></a>
                        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                        <button onClick={() => handleDetails(6)}>Explore More</button>
                    </div>

                </div> */}
            </div>
        </section>
    );
};

export default Projects;