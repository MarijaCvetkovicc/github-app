import React from 'react';
import { Grid, Card, Typography, CardMedia, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../styles';

const UserCard = ({ user }) => {
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={4} md={3}>
            <Link to={`/users/${user.login}`} className={classes.link}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMediaList}
                        image={user.avatar_url ? user.avatar_url : "https://via.placeholder.com/150"}
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography noWrap gutterBottom >
                            Username:{user.login}
                        </Typography>
                        <Typography noWrap  >
                            Score: {user.score ? user.score : 'No data'}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}

export default UserCard;
