import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    primaryTail: {
        backgroundColor: theme.palette.primary.main,
    },
    icon: {
        margin: '2px 0px 2px 0px',
    },
    icon2: {
        margin: '2px 2px 2px 2px',
    },
}));

export default function TimelineFormation() {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="space-around" alignItems="center">
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2011-2016
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot >
                            <FontAwesomeIcon icon={faGraduationCap} size="2x" className={classes.icon} />
                        </TimelineDot>
                        <TimelineConnector className={classes.primaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle1" component="h1">
                                Técnico en Equipos e Instalaciones Electromecánicas <Typography variant="subtitle1" component="h1" color="textSecondary">E.P.E.T N° 3</Typography>
                            </Typography>
                            <Typography color="primary">Recibido</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2017-2018
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <FontAwesomeIcon icon={faGraduationCap} size="2x" className={classes.icon} />
                        </TimelineDot>
                        <TimelineConnector className={classes.primaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle1" component="h1">
                                Auxiliar en Informática <Typography variant="subtitle1" component="h1" color="textSecondary">Universidad Nacional de Misiones</Typography>
                            </Typography>
                            <Typography color="primary">Recibido</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2017-2019
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <FontAwesomeIcon icon={faGraduationCap} size="2x" className={classes.icon} />
                        </TimelineDot>
                        <TimelineConnector className={classes.primaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle1" component="h1">
                                Analista Programador <Typography variant="subtitle1" component="h1" color="textSecondary">Universidad Nacional de Misiones</Typography>
                            </Typography>
                            <Typography color="primary">Recibido</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2017-2019
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <FontAwesomeIcon icon={faGraduationCap} size="2x" className={classes.icon} />
                        </TimelineDot>
                        <TimelineConnector className={classes.primaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle1" component="h1">
                                Analista en sistemas de Computación <Typography variant="subtitle1" component="h1" color="textSecondary">Universidad Nacional de Misiones</Typography>
                            </Typography>
                            <Typography color="primary">Recibido</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2017-2020
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot >
                            <FontAwesomeIcon icon={faBookOpen} size="2x" className={classes.icon2} />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle1" component="h1">
                                Licenciatura en Sistemas de Información <Typography variant="subtitle1" component="h1" color="textSecondary">Universidad Nacional de Misiones</Typography>
                            </Typography>
                            <Typography color="secondary">Actualmente me encuentro cursando el 4to año de la carrera</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Grid>
    );
}
