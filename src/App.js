import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    margin: 'center'
  }
});

const App = (props) => {
  const classes = useStyles();
  const [state, setState] = useState("Daniel");

  const handleClick = (e) => {
    if (state === "Daniel") setState("Amit");
    if (state === "Amit") setState("Daniel");
  }

  return (
    <div className={classes.root}>
      <nav>
        <Button onClick={handleClick}>Daniel is hot</Button>
        <Button onClick={handleClick}>Get over here nick</Button>
        <Button onClick={handleClick}>fuuuuuuck</Button>
      </nav>
      <h1>{state}</h1>
      <Button onClick={handleClick}>Click me</Button>
      {state === "Daniel" ? (
        <h1>YOOOO WAZZUPPPP</h1>
      ) : (
          <h2 style={{ color: 'red' }}>AYYEEEEEE</h2>
        )
      }
    </div>
  );
}

export default App;
