import React from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import useStyles from '../styles';
import { List, ListItem, Container, ListItemIcon, ListItemText,Typography } from '@material-ui/core';
import Loader from './Loader';
import Alert from '@material-ui/lab/Alert';

const Repos = ({ isLoading, repos }) => {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <Container maxWidth="sm" className={classes.cardGrid} >
                {isLoading ? <Loader /> :
                    <List>
                        {repos.length > 0 ? repos.map((repo) => (
                            <ListItem key={repo.id}>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={ <Typography noWrap gutterBottom varient="h6">{repo.name}</Typography>}
                                />
                            </ListItem>
                        )) :
                            <Alert severity="warning">There is no Repositories for this user!</Alert>
                        }
                    </List>
                }
            </Container>
        </div>
    )
}

export default Repos;
