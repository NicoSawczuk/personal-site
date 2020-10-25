import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { sizing } from '@material-ui/system';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const useStyles = makeStyles({
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
                        <FontAwesomeIcon icon={icon} size="5x" />
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
}