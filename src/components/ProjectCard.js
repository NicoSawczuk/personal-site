import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
    import Skeleton from '@material-ui/lab/Skeleton';
    import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForward from '@material-ui/icons/ArrowForward';




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 320,
        minWidth: 320,
        minHeight: 394,
        flexGrow: 1,
        marginTop: '30px'
    },
    media: {
        paddingTop: '50.00%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'left',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ProjectCard({ title, subtitle = '', image = '', imageTitle, description, expandDescription, linkRepo, linkDemo }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 300);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Card className={classes.root} elevation={5}>
                <CardHeader
                    title={
                        loading ? (
                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />

                        ) : (
                                title
                            )
                    }
                    subheader={
                        loading ? (
                            <Skeleton animation="wave" height={10} width="50%" style={{ marginBottom: 6 }} />

                        ) : (
                                subtitle
                            )
                    }
                />

                {loading
                    ?
                    (<Skeleton variant="rect" width={320} height={160} />)
                    :
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={imageTitle}
                    />
                }
                <CardContent>
                    {loading ?
                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                        :
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    }

                </CardContent>
                <CardActions disableSpacing>
                    {
                        loading ? (
                            <Skeleton animation="wave" height={60} width="40%" style={{ marginLeft: 8 }} />

                        ) : <React.Fragment>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    title="Más detalles"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                                <IconButton title="Ver en GitHub">
                                    <Link href={linkRepo} color="inherit" target="_blank">
                                        <GitHubIcon />
                                    </Link>
                                </IconButton>
                                <IconButton title="Visitar">
                                    <Link href={linkDemo} color="primary" target="_blank">
                                        <ArrowForward />
                                    </Link>
                                </IconButton>
                            </React.Fragment>
                    }
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {expandDescription}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}


