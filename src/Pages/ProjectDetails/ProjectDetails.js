import React from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../Home/Projects/useProject';
import './ProjectDetail.css';


const ProjectDetails = () => {

    const { id } = useParams();

    const [project] = useProject(id);

    return (
        <section>
        <div className='details-container'>
            <img src={project.img1} alt="" />
            <ul>
                <li>{project.des1}</li>
                <li>{project.des2}</li>
            </ul>
            <img src={project.img2} alt="" />
            <ul>
                <li>{project.des3}</li>
                <li>{project.des4}</li>
            </ul>
            <img src={project.img3} alt="" />
            <ul>
                <li>{project.des5}</li>
                <li>{project.des6}</li>
            </ul>

            <p>Technology Used: {project.technology}</p>

            <a className='anchor' href={project.live}>Live</a>
            {project.server ? <a className='anchor' href={project.client}>GitHub Client</a> : <a className='anchor' href={project.client}>GitHub Code Link</a>}
            {project.server && <a className='anchor' href={project.server}>Github Server</a>}

        </div>
    </section>
    );
};

export default ProjectDetails;