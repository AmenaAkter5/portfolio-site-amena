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
                <h4 className='text-center fw-bold'>BEST Projects</h4>
                <h1 className='text-center gradient-text-one'>Projects of Amena Akter</h1>
            </div>
            <div className='project-container'>

            {
                    projects.map(project =>
                        <div key={project._id}>
                            <div className='project'>
                                <a href="/"><img src={project.img1} alt="" /></a>
                                <p className='px-1'>{project.des1} {project.des2}</p>
                                <button className='btn btn-primary mb-3 ms-2' onClick={() => handleDetails(project._id)}>Explore more</button>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Projects;