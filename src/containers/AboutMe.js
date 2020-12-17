import React from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../components/Sidebar'
import useStyles from '../hooks/useStyles'
import useTheme from '../hooks/useTheme';
import AboutMeCard from '../components/AboutMeCard';
import TimelineFormation from '../components/TimelineFormation';
import ListOfSkills from '../components/ListOfSkills';



export default function AboutMe() {
  const classes = useStyles();
  const { darkTheme, changeTheme, darkState } = useTheme()



    return (
      <ThemeProvider theme={darkTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <Sidebar title="Sobre mi" changeTheme={changeTheme} darkState={darkState} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container} spacing={2}>
              <Grid item>
                <AboutMeCard />
              </Grid>

              <Grid item className={classes.gridItem}>
                <Typography variant="h4" component="h4" color="secondary">Formación académica</Typography>
                <TimelineFormation />
              </Grid>
              <Grid container spacing={3} className={classes.gridItem}>
              <Typography variant="h4" component="h4" color="secondary">Tecnologías</Typography>
                <ListOfSkills />
              </Grid>
            </Container>
          </main>
        </div>
      </ThemeProvider>
    );
}
