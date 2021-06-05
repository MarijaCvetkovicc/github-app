import React from 'react';
import { Toolbar, Typography, AppBar } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from '../styles';
import Search from './Search';
const SearchHeader = ({ handeleKeyDown, handleOnChange, text }) => {
    const classes = useStyles();

    return (
        <AppBar position="relative" >
            <Toolbar >
                <GitHubIcon edge="start" className={classes.icon} />
                <Typography variant="h6" className={classes.title} color="inherit" noWrap>
                    GITHub Application
                </Typography>
                <Search handeleKeyDown={(e) => handeleKeyDown(e)} handleOnChange={(e) => handleOnChange(e)} text={text} />
            </Toolbar>
        </AppBar>
    )
}

export default SearchHeader;
