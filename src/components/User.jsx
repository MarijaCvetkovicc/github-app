import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import useStyles from '../styles';
import Warning from './Warning';
import Repos from './Repos';
import Followers from './Followers';
import UserHeader from './UserHeader';

function User(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {

    fetchUser(props);

    fetchRepos(props);

    fetchFollowers(props);
  }, [props]);

  const fetchUser = async (props) => {
    setIsLoading(true);
    await fetch(`https://api.github.com/users/${props.match.params.username}`)
      .then(respons => {
        if (!respons.ok) throw Error(`There is a problem with server! Could not fetch data.`);
        return respons.json();
      })
      .then(result => {
        setError(null);
        setUser(result);
      })
      .catch(error => {
        setError(error.message);
      });
  }

  const fetchRepos = async (props) => {
    setIsLoading(true);
    await fetch(`https://api.github.com/users/${props.match.params.username}/repos`)
      .then(respons => {
        if (!respons.ok) throw Error(`There is a problem with server! Could not fetch data.`);
        return respons.json();
      })
      .then(result => {
        setError(null);
        setRepos(result);
      })
      .catch(error => {
        setError(error.message);
      });
  }

  const fetchFollowers = async (props) => {
    setIsLoading(true);
    await fetch(`https://api.github.com/users/${props.match.params.username}/followers`)
      .then(respons => {
        if (!respons.ok) throw Error(`There is a problem with server! Could not fetch data.`);
        return respons.json();
      })
      .then(result => {
        setError(null);
        setFollowers(result);
      })
      .catch(error => {
        setError(error.message);
      });
    setIsLoading(false);
  }

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <UserHeader user={user} />
          <Container className={classes.cardGrid} maxWidth="md" >
            {error ? <Warning text={error} /> : (
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" className={classes.title}>
                    Repos
                  </Typography>
                  <Repos isLoading={isLoading} repos={repos} />
                </Grid>
                <Grid item xs={12} md={8} >
                  <Typography variant="h6" className={classes.title} >
                    Followers
                  </Typography>
                  <Followers isLoading={isLoading} followers={followers} />
                </Grid>
              </Grid>
            )}
          </Container>
        </div>
      </main>
    </>
  )
}

export default User;
