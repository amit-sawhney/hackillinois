import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import './Login.css';

const useStyles = makeStyles({
  
});

const Login = (props) => {
  const classes = useStyles();


  return (
    <>
    <div className="hello">
    <div className="loginbox">
        <h1>Login</h1>
        <form>
            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="uname"></input>
            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="pname"></input>
            <input type="submit" value="Login" />
            <Link to="/">Go back home</Link>
        </form>
    </div>
    </div>
    </>
  );
}

export default Login;
