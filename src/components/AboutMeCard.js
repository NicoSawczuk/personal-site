import React from 'react';
import { useLocation } from "wouter";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import MyAvatar from './MyAvatar'
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: '30px'
    },
    icons: {
        paddingTop: '55px',
    },
});

export default function AboutMeCard() {
    const classes = useStyles();
    const [, setLocation] = useLocation();

    return (
        <Grow in={true}>
            <Card className={classes.root} elevation={5}>
                <CardContent>
                    <Grid container direction="row" justify="space-around" alignItems="center">
                        <Grid item lg md sm>
                            <Typography variant="h5" color="primary" component component="h5">
                                Nicolás Sawczuk
                        </Typography>
                            <Typography variant="subtitle1" color="textSecondary" component="p" align="justify">
                                Tengo 22 años, soy de Oberá Misiones, Argentina.
                        </Typography>
                            <Typography variant="subtitle1" color="textSecondary" component="p" align="justify">
                                Mi objetivo es adquirir nuevos conocimientos desarrollando aplicaciones web. Poder aprender nuevas tecnologías tanto en backend como en frontend y además adquirir experiencias trabajando junto a un equipo de desarrollo.
                        </Typography>
                            <Typography variant="subtitle1" color="textSecondary" component="p" align="justify">
                                Podes visitar la seccion <Link underline="hover" color="textPrimary" onClick={() => setLocation("/projects")}>Proyectos</Link> para ver algunos de los proyectos que estuve desarrollando.
                        </Typography>
                        </Grid>

                        <Grid item >
                            <MyAvatar />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="flex-end">
                        <Grid item>

                            <Typography variant="body2" color="secondary" component="p" alignItems="flex-end">

                                <IconButton title="GitHub">
                                    <Link key="GitHub" component="a" href="https://github.com/NicoSawczuk" color="secondary" target="_blank">
                                        <GitHubIcon fontSize="large" />
                                    </Link>
                                </IconButton>
                                <IconButton title="Instagram">
                                    <Link key="Instagram" component="a" href="https://www.instagram.com/nicosawczuk/" color="secondary" target="_blank">
                                        <InstagramIcon fontSize="large" />
                                    </Link>
                                </IconButton>
                                <IconButton title="Facebook">
                                    <Link key="Facebook" component="a" href="https://www.facebook.com/Nico.Sawczuk.10/" color="secondary" target="_blank">
                                        <FacebookIcon fontSize="large" />
                                    </Link>
                                </IconButton>
                                <IconButton title="Mail">
                                    <Link key="Email" component="a" href="mailto:nico.290698@gmail.com" color="secondary" target="_blank">
                                        <MailIcon fontSize="large" />
                                    </Link>
                                </IconButton>
                            </Typography>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grow>
    );
}