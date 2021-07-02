import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
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
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      fontSize: '42px',
    },
}));
  
export default function TeamAvatars({imgAvatar, name, letter}) {
  const classes = useStyles();

  return (
    <div className={`team-avatar-container ${classes.root}`}>
        <Avatar alt="Remy Sharp" src={imgAvatar} className={classes.large}>
          {letter}
        </Avatar>
        <h3>{name}</h3>
    </div>
  );
}