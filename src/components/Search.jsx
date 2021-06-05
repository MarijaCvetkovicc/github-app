import React from 'react';
import { InputBase } from '@material-ui/core';
import useStyles from '../styles';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ handeleKeyDown, handleOnChange, text }) => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                type="text"
                value={text}
                onChange={handleOnChange}
                onKeyDown={handeleKeyDown}
            />
        </div>
    )
}

export default Search;
