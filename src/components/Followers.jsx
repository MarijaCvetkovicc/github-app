import React from 'react';
import { Grid, Typography, Container, CardMedia, Card, CardContent } from '@material-ui/core';
import useStyles from '../styles';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Warning from './Warning';
const Followers = ({ isLoading, followers }) => {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <Container maxWidth="sm" className={classes.cardGrid} >
                <Grid container spacing={4}>
                    {isLoading ? <Loader /> : (followers.length > 0 ? followers.map((follower) => (
                        <Grid key={follower.id} item xs={6} md={3} >
                            <Link to={`/users/${follower.login}`} className={classes.link}  >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMediaList}
                                        image={follower.avatar_url ? follower.avatar_url : "https://via.placeholder.com/150"}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography noWrap gutterBottom varient="h6">
                                            {follower.login}</Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    )) :
                        <Warning text={"There is no Followers for this user!"} />
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default Followers;
