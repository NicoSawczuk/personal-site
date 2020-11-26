import React from 'react'
import SkillCard from './SkillCard';
import Grid from '@material-ui/core/Grid';

export default function ListOfSkills() {


    const skilss = [
        {
            key: 1,
            title: 'Javascript',
            color: '#F5EF98',
            colorText: '#000000'
        },
        {
            key: 2,
            title: 'PHP',
            color: '#9695FA',
            colorText: '#000000'
        },
        {
            key: 3,
            title: 'Python',
            color: '#587DFA',
            colorText: '#F5EF98'
        },
        {
            key: 4,
            title: 'Java',
            color: '#F55D53',
            colorText: '#FFFFFF'
        },
        {
            key: 5,
            title: 'Laravel',
            color: '#FFFFFF',
            colorText: '#F55D53'
        }
        ,
        {
            key: 6,
            title: 'Django',
            color: '#06BF79',
            colorText: '#FFFFFF'
        }
        ,
        {
            key: 7,
            title: 'ReactJS',
            color: '#282c34',
            colorText: '#61dafb'
        }
        ,
        {
            key: 8,
            title: 'Angular',
            color: '#FA223F',
            colorText: '#FFFFFF'
        }
        ,
        {
            key: 9,
            title: 'Flask',
            color: '#FFFFFF',
            colorText: '#000000'
        }
        ,
        {
            key: 10,
            title: 'Express JS',
            color: '#68A063',
            colorText: '#FFFFFF'
        }

    ]

    return (
        <Grid container justify="center" alignItems="center" spacing={2} >
            {skilss.map((skill) => {
                return (
                    <Grid item xl key={skill.key}>
                        <SkillCard
                            title={skill.title}
                            color={skill.color}
                            colorText={skill.colorText}
                            icon={skill.icon}
                        />
                    </Grid>
                )
            })}
        </Grid>
    );
}