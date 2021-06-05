import React from 'react';
import Logo from "../img/github-logo.jpg";
import { Card, CardMedia } from '@material-ui/core';
import useStyles from '../styles';
const Banner = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={Logo}
                title="Image title"
            />
        </Card>
    )
}

export default Banner;
