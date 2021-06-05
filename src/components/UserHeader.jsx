import React from 'react';
import { Toolbar, Typography, AppBar } from '@material-ui/core';
import useStyles from '../styles';
const UserHeader = ({ user }) => {
    const classes = useStyles();
    return (
        <AppBar position="relative" >
            <Toolbar >
                <img src={user.avatar_url ? user.avatar_url : "https://via.placeholder.com/150"} alt="logo" className={classes.icon} />
                <Typography variant="h6" className={classes.title} color="inherit" noWrap>
                    USERNAME: {user.login}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default UserHeader;
