import { useEffect, useState } from "react";


const useProject = id => {
    console.log('project id is', id)
    const [project, setProject] = useState({});

    useEffect(() => {
        // fetch(`projects.json/${id}`)
        // fetch(`http://localhost:5000/project/${id}`)
        fetch(`https://obscure-temple-57204.herokuapp.com/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id, project]);

    return [project, setProject];
};

export default useProject;