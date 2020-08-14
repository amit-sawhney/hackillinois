import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';
import Footer from '../Footer/Footer'

const useStyles = makeStyles({

});

const Home = (props) => {
  const classes = useStyles();


  return (
    <>
      <div className="root">
        <h1>Find a mentor quickly!</h1>

        <div className="below">
          <h1>What we are about!</h1>
          <p>__________ was inspired from the lack of virtual collabortion students can partake in, particularly 
            among other students. This application seeks to open up an opportunity for students to help other students academically
            and socially.
          </p>
          <div className="image">
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
