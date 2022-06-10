import { useEffect, useState } from "react";


const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // fetch('projects.json')
        // fetch('http://localhost:5000/projects')
        fetch('https://obscure-temple-57204.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return [projects];
};

export default useProjects;