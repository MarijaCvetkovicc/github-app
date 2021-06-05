import React, { useState } from 'react';
import { Typography, Grid, CssBaseline, Container, Box } from '@material-ui/core';
import useStyles from '../styles';
import Search from './Search';
import Banner from './Banner';
function Home(props) {
    const classes = useStyles();
    const [text, setText] = useState('');
    const handeleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.history.push({
                pathname: '/users',
                state: text
            })
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <CssBaseline />
            <main>
                <div>
                    <Container maxWidth="sm" className={classes.container}>
                        <Banner />
                        <Box m={2} >
                            <Typography variant="h3" align="center" color="textPrimary" gutterBottom >
                                Welcom to GITHub users search App
                            </Typography>
                        </Box>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Hello! Welcom to GITHub users search App! The purpose of this application is to provide the option to search GitHub users, and look into the details for a single user.
                        </Typography>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Search handeleKeyDown={(e) => handeleKeyDown(e)} handleOnChange={(e) => handleOnChange(e)} text={text} />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </>
    );
}
export default Home;