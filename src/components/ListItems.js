import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useLocation } from "wouter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTh } from '@fortawesome/free-solid-svg-icons'

export default function ListItems() {
  const [location, setLocation] = useLocation();

  return (
    <>
      <ListItem button onClick={() => setLocation("/")}  selected={location === '/' ? true : false}>
        <ListItemIcon>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </ListItemIcon>
        <ListItemText primary="Sobre mi" />
      </ListItem>
      <ListItem button onClick={() => setLocation("/projects")} selected={location === '/projects' ? true : false}>
        <ListItemIcon>
          <FontAwesomeIcon icon={faTh} size="lg" />
        </ListItemIcon>
        <ListItemText primary="Proyectos" />
      </ListItem>
    </>
  )
};

