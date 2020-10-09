import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const useStyles = makeStyles({
    root: {
        minWidth: '100px',
        
        marginTop: '16px'
    },
    title: {
        fontSize: 14,
    },
    icon: {
        alignItems: 'right',
        alignContent: 'right'
    }
});

export default function SkillCard({ title, color, colorText, icon }) {


    const classes = useStyles();

    const style = {
        card: {

            backgroundColor: color,
            color: colorText,
        }
    };

    return (
        <Card className={classes.root} style={style.card} elevation={4}>
            <CardContent>
                <Grid container justify="flex-start" alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="h5" component component="h5">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={2} className={classes.icon}>
                        <FontAwesomeIcon icon={icon} size="5x" />
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
}