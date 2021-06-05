import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid, Container } from '@material-ui/core';
import Loader from './Loader';
import useStyles from '../styles'
import UserCard from './UserCard';
import Warning from './Warning';
import PagePagination from './PagePagination';
import SearchHeader from './SearchHeader';

function UsersList(props) {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(props.location.state ? props.location.state : '');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const handeleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setQuery(event.target.value);
      setPage(1);
    }
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {

    const fetchUsers = async () => {
      setIsLoading(true);
      if (query !== "") {
        await fetch(`https://api.github.com/search/users?q=${query}&per_page=100&page=${page}`)
          .then(respons => {
            if (!respons.ok) throw Error(`There is a problem with server! Could not fetch data.`);
            return respons.json();
          })
          .then(result => {
            setUsers(result.items);
            setIsLoading(false);
            setError(null);
            setCount(result.total_count);
          })
          .catch(error => {
            setError(error.message);
            setIsLoading(false);
          });
      } else {
        await fetch(`https://api.github.com/users?per_page=100`)
          .then(respons => {
            if (!respons.ok) throw Error(`There is a problem with server! Could not fetch data.`);
            return respons.json();
          })
          .then(result => {
            setUsers(result);
            setIsLoading(false);
            setError(null);
          })
          .catch(error => {
            setError(error.message);
            setIsLoading(false);
          });
      }
    }
    fetchUsers()
  }, [query, page]);

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <SearchHeader handeleKeyDown={(e) => handeleKeyDown(e)} handleOnChange={(e) => handleOnChange(e)} text={text} />
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {isLoading ?
                <Loader /> :

                (error ?
                  <Warning text={error} /> :

                  (users.length > 0 ? users.map((user) => (
                    <UserCard user={user} key={user.id} />
                  )
                  ) :
                    <Warning text={"There is no User with that username!"} />
                  ))}
              {users.length > 0 && query !== "" && !isLoading  &&
                <PagePagination page={page} count={(Math.round(count / 100)) < 10 ? Math.round(count / 100) : 10} handlePageChange={handlePageChange} />
              }
            </Grid>

          </Container>
        </div>
      </main>
    </>
  )
}

export default UsersList;
