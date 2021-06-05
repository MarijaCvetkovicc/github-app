import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';

const PagePagination = ({ count, page, handlePageChange }) => {
    return (
        <Grid
            container
            spacing={4}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item >
                <Pagination count={count} page={page} onChange={handlePageChange} hidePrevButton hideNextButton />
            </Grid>
        </Grid>
    )
}

export default PagePagination;
