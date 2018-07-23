import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Header, NotFound, RecipeCard, RecipeList } from './components';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/recipes" />
        <Route path="/recipes" component={RecipeList} />
        <Route
          path="/recipe/:slug"
          render={({ match }) => <RecipeCard match={match} />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
