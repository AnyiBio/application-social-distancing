import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import {useHistory} from 'react-router-dom';

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
    const history = useHistory()

    const handleClickDashboard = () => history.push('')
    const handleClickUpload = () => history.push('upload')
    return ( 
        <AppBar position="fixed" color="transparent">
            <Toolbar className={classes.root}>
                <Button size={"Large"} className={classes.margin}   color="secondary" onClick={handleClickDashboard}>
                    Social distancing App
                </Button>
                <div>
                    <Button className={classes.margin}color="secondary">
                    MEET THE TEAM
                    </Button>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                    <Button variant="outlined" color="secondary" onClick={handleClickUpload}>
                        START NOW, FREE
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;