import React from 'react';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Warning = ({ text }) => {
    return (
        <Grid item xs={12}>
            <Alert severity="warning">{text}</Alert>
        </Grid>
    )
}

export default Warning;
