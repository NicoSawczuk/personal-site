import React from 'react'
import SkillCard from './SkillCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { faJsSquare, faPhp, faPython, faJava, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons'

export default function ListOfSkills() {
    const useStyles = makeStyles({
        root: {
            marginTop: '14px',
            flexGrow: 1,
        },
    });
    const classes = useStyles();


    const skilss = [
        {
            key: 1,
            title: 'Javascript',
            color: '#F5EF98',
            colorText: '#000000',
            icon: faJsSquare
        },
        {
            key: 2,
            title: 'PHP',
            color: '#9695FA',
            colorText: '#000000',
            icon: faPhp
        },
        {
            key: 3,
            title: 'Python',
            color: '#587DFA',
            colorText: '#F5EF98',
            icon: faPython
        },
        {
            key: 4,
            title: 'Java     ',
            color: '#F55D53',
            colorText: '#FFFFFF',
            icon: faJava
        },
        {
            key: 5,
            title: 'Laravel',
            color: '#FFFFFF',
            colorText: '#F55D53',
            icon: faLaravel
        }
        ,
        {
            key: 6,
            title: 'Django',
            color: '#06BF79',
            colorText: '#FFFFFF',
            icon: faPython
        }
        ,
        {
            key: 7,
            title: 'ReactJS',
            color: '#282c34',
            colorText: '#61dafb',
            icon: faReact
        }
    ]

    return (
        <Grid container spacing={2} >
            {skilss.map((skill) => {
                return (
                    <Grid item xs={6} sm={3}  key={skill.key}>
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