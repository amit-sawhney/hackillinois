import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindMentor from './Components/FindMentor/FindMentor';
import BecomeMentor from './Components/BecomeMentor/BecomeMentor';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

const useStyles = makeStyles({
  
});

const App = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/findmentor"><FindMentor /></Route>
            <Route path="/becomementor"><BecomeMentor /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/login"><Login /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
