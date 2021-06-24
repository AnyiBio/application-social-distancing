import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './team-avatars.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(3),
      },
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
}));
  
export default function TeamAvatars({imgAvatar, name}) {
  const classes = useStyles();

  return (
    <div className={`team-avatar-container ${classes.root}`}>
        <Avatar alt="Remy Sharp" src={imgAvatar} className={classes.large} />
        <h3>{name}</h3>
    </div>
  );
}