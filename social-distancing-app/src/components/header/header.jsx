import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: 'space-between',
    },
    margin: {
        margin: theme.spacing(1),
      },
  }));

const Header = () => {
    const classes = useStyles();
    return ( 
        <AppBar position="fixed" color="transparent">
            <Toolbar className={classes.root}>
                <Typography 
                    edge="start" 
                    variant="h6" 
                    color="secondary">
                        Social distancing App
                </Typography>
                <div>
                    <Button className={classes.margin}color="secondary">
                    MEET THE TEAM
                    </Button>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                    <Button variant="outlined" color="secondary">
                        START NOW, FREE
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;