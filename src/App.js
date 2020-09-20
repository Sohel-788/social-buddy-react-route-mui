
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/post/:postId'>
          <PostDetail></PostDetail>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;