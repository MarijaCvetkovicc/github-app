import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const Loader = () => {
    return (
        <Grid item
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={3} >
                <CircularProgress color="secondary" />
            </Grid>
        </Grid>
    )
}

export default Loader;
