import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Home from './components/Home.jsx';
import UsersList from './components/UsersList';
import User from './components/User';
function App() {
  return (
    <div>
      <Grid container direction="column">
        <Router>
          <Grid item container>
            <Grid item xs={12}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/users" exact component={UsersList} />
                <Route path="/users/:username" exact component={User} />
              </Switch>
            </Grid>
          </Grid>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
