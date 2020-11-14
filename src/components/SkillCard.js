import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


import { IconContext } from "react-icons";
import { SiJavascript, SiPhp, SiPython, SiJava, SiLaravel, SiDjango, SiReact, SiFlask } from 'react-icons/si';


const useStyles = makeStyles({
    title: {
        fontSize: 14,
    },
    icon: {
        alignItems: 'right',
        alignContent: 'right'
    }
});

export default function SkillCard({ title, color, colorText }) {



    const style = {
        card: {
            marginTop: '16px',
            backgroundColor: color,
            color: colorText,
            minWidth: 280,
            flexGrow: 1
        }

    };

    return (
        <Card style={style.card} elevation={4}>
            <CardContent>
                <Grid container direction="row" alignItems="center" justify="space-between">
                    <Grid item>
                        <Typography variant="h5" component component="h5">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconContext.Provider value={{ className: "global-class-name" }, { size: "4.5em" }}>
                            {title === 'Javascript' ? (<SiJavascript />)
                                :title === 'PHP' ? (<SiPhp />)
                                :title === 'Python' ? (<SiPython />)
                                :title === 'Java' ? (<SiJava />)
                                :title === 'Laravel' ? (<SiLaravel />)
                                :title === 'Django' ? (<SiDjango />)
                                :title === 'ReactJS' ? (<SiReact />)
                                :title === 'Flask' ? (<SiFlask />)
                                :null
                            }
                        </IconContext.Provider>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
}