import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';

const useStyles = makeStyles({

});

const Home = (props) => {
  const classes = useStyles();


  return (
    <>
      <div className="root">
        <h1>Find a mentor quickly!</h1>
      </div>
      <div className="below">
        <h1>What we are about!</h1>
        <p>This is just some random words that eventually will be a description. More random stuff to take up space and let us see how scrolling looks on the page.This is just some random words that eventually will be a description. More random stuff to take up space and let us see how scrolling looks on the page.This is just some random words that eventually will be a description. More random stuff to take up space and let us see how scrolling looks on the page.This is just some random words that eventually will be a description. More random stuff to take up space and let us see how scrolling looks on the page.</p> 
        <div className="image">
        </div>
        </div>
    </>
  );
}

export default Home;
