import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';


import ProjectCard from './ProjectCard'


import { getProjects } from '../services/FirebaseServices'


export default function ListOfProjects() {
    const [projects, setProjects] = useState([])

    useEffect(function () {
        getProjects().then((projectsList) => {
            setProjects(projectsList)
        }).catch(({ error }) => { console.log(error) })
    }, [])
    return (
        <Grid container justify="center" alignItems="center" spacing={8}>
            {projects.map((project) => {
                return (
                    <Grid item lg={4} md={5} sm={8} xs key={project.key}>
                        <ProjectCard
                            title={project.title}
                            image={project.image}
                            imageTitle={project.imageTitle}
                            description={project.description}
                            expandDescription={project.expandDescription}
                            linkRepo={project.linkRepo}
                            linkDemo={project.linkDemo}
                            tecnologias={project.tecnologias}
                        />
                    </Grid>
                )
            })}
        </Grid>
    );
}
