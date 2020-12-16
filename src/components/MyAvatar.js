import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import nico from '../static/images/nico-profile.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    [theme.breakpoints.down("xl")]: {
      width: theme.spacing(39),
      height: theme.spacing(39),
    },
    [theme.breakpoints.down("lg")]: {
      width: theme.spacing(35),
      height: theme.spacing(35),
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Nicolas Sawczuk" src={nico} className={classes.avatar} />
    </div>
  );
}