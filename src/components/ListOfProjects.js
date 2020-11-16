import React from 'react';
import Grid from '@material-ui/core/Grid';


import ProjectCard from './ProjectCard'

import english from '../static/images/projects/english.jpg'
import fitrou from '../static/images/projects/fitrou.jpg'
import generador from '../static/images/projects/generador.jpg'
import wallet from '../static/images/projects/wallet.jpg'
import odonto from '../static/images/projects/odonto.jpg'
import showroom from '../static/images/projects/showroom.jpg'


export default function ListOfProjects() {
    const projects = [
        {
            key: 1,
            title: 'FitRou',
            subtitle: '',
            image: fitrou,
            imageTitle: 'FitRou',
            description: 'Sistema destinado al entrenamiento virtual de los alumnos de un personal trainer',
            expandDescription: 'Sistema web que le permite a un personal trainer aumentar su cantidad de alumnos mediante el control virtual de los mismos. El sistema permite a los alumnos entrenar a cargo del profesor o a través del sistema, en este ultimo caso el sistema mostrara las actividades a realizar, junto a una demostración e intensidad según una rutina previamente seleccionada por el alumno. El mismo fue desarrollado con Django y Bootstrap.',
            linkRepo: 'https://github.com/NicoSawczuk/SistemaPF',
            linkDemo: 'https://fitrou.herokuapp.com/',
            tecnologias: [{nombre:'Django', color:'#06BF79'}, {nombre:'Bootstrap', color:'#B840FA'}]
        },
        {
            key: 2,
            title: 'English System',
            subtitle: '',
            image: english,
            imageTitle: 'EnglishSystem',
            description: 'Sistema destinado a la ayuda en el aprendizaje del idioma inglés',
            expandDescription: 'Esté sistema web se desarrolló con el objetivo de facilitar las prácticas en un curso de ingles al que asisto, nos permite cargar modulos, temas y palabras con el fin de que las personas que estan en el curso puedan practicarlas. El mismo fue realizado con Laravel y Bootstrap junto a dos colegas.',
            linkRepo: 'https://github.com/NicoSawczuk/EnglishSystem',
            linkDemo: 'https://englishsystem.herokuapp.com/',
            tecnologias: [{nombre:'Laravel', color:'#F55D53'}, {nombre:'Bootstrap', color:'#B840FA'}]
        
        },
        {
            key: 3,
            title: 'Showroom System',
            subtitle: '',
            image: showroom,
            imageTitle: 'ShowroomSystem',
            description: 'Sistema destinado al control de ventas de un showroom',
            expandDescription: 'Esté sistema web se desarrolló con el objetivo de facilitar el control de ventas de un showroom. El mismo se encarga de generar los códigos de las prendas, controlar los montos a la hora de vender y generar resúmenes entre fechas definidas por el usuario. Fue desarrollado con Laravel y Bootstrap.',
            linkRepo: 'https://github.com/NicoSawczuk/Luencia',
            linkDemo: 'https://luencia.herokuapp.com/',
            tecnologias: [{nombre:'Laravel', color:'#F55D53'}, {nombre:'Bootstrap', color:'#B840FA'}]
        
        },
        {
            key: 4,
            title: 'Odonto Misiones',
            subtitle: '',
            image: odonto,
            imageTitle: 'OdontoMisiones',
            description: 'Sistema de control de stock y personal para la venta de equipos odontológicos',
            expandDescription: 'Esté sistema web se desarrolló con el objetivo de gestionar el personal, stock y ventas de una empresa que se encarga de vender e instalar equipos odontológicos. El mismo fue realizado con Laravel y Bootstrap con fines educativos para la cátedra de Diseño Web de la UNaM junto a dos colegas.',
            linkRepo: 'https://github.com/NicoSawczuk/odontoMisiones',
            linkDemo: 'https://odontomisiones.herokuapp.com/',
            tecnologias: [{nombre:'Laravel', color:'#F55D53'}, {nombre:'Bootstrap', color:'#B840FA'}]
        
        },
        {
            key: 5,
            title: 'Wallet',
            subtitle: '',
            image: wallet,
            imageTitle: 'Wallet',
            description: 'Pequeña billetera virtual en React consumiendo una api hecha en Laravel',
            expandDescription: 'Wallet desarrollada con React JS y Laravel con fines prácticos de las tecnologías mencionadas.',
            linkRepo: 'https://github.com/NicoSawczuk/wallet_app',
            linkDemo: 'https://walletapp.herokuapp.com/',
            tecnologias: [{nombre:'React JS', color:'#61dafb'}, {nombre:'Ant Design', color:'#F02440'}]
        
        },
        {
            key: 6,
            title: 'Generador de números',
            subtitle: '',
            image: generador,
            imageTitle: 'Generador',
            description: 'Generador de números pseudoaletarios y marcas de clase',
            expandDescription: 'Sistema generador de números pseudoaleatorios con los métodos de Von Neumann y Congruencial Mixto. El mismo permite realizar una simulación a traves del uso de marcas de clase y fue realizado con un colega para la cátedra de Modelos y Simulación de la UNaM.',
            linkRepo: 'https://github.com/NicoSawczuk/Numeros-aleatorios---Modelos-y-simulacion',
            linkDemo: 'https://generador-numeros.herokuapp.com/',
            tecnologias: [{nombre:'Javascript', color:'#F0E7A6'}, {nombre:'Bootstrap', color:'#B840FA'}]
        
        },
    ]

    return (
        <Grid container justify="center" alignItems="center" spacing={8}>
            {projects.map((project) => {
                return (
                    <Grid item lg key={project.key}>
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
