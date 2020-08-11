import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ScrollToColor from "./ScrollToColor";


const useStyles = makeStyles({
    root: {
        backgroundColor: '#002855',
        paddingBottom: '85px',
        paddingTop: '0px',
        position: 'fixed',
        width: '100%',
        height: '0%',
        position: 'fixed',
    },
    appName: {
        marginRight: '60vh',
        fontSize: '40px',
        position: 'relative',
        float: 'left',
        textDecoration: 'none',
        color: 'black',
        marginLeft: '45px'
    },
    navItem: {
        textDecoration: 'none',
        marginRight: '40px',
        marginTop: '10px',
        fontSize: '18px',
        position: 'static',
        float: 'right',
        color: 'black',
        '&:hover': {
            color: '#E84A27',
        }
    },
    navbar: {
        margin: 'auto',
        textAlign: 'center',
        paddingTop: '10px',
        color: 'white',
        textDecoration: 'none',
        
    },
    profileIcon: {
        fontSize: '30px',
        // marginTop: '10px',
        marginRight: '5px',
    },
    toolbarButtons: {
        float: 'left',
        },
   
    
});


const Navbar = (props) => {
    const classes = useStyles();



    return (
        <ScrollToColor>
        <AppBar className={classes.root}>
            <Toolbar className={classes.navbar}>
            <Link className={classes.appName} to="/">Mentors Meet</Link> 
                <Link className={classes.navItem} to="/findmentor"><Typography>Find a Mentor</Typography></Link>
                <Link className={classes.navItem} to="/becomementor">Become a mentor</Link>
                <Link className={classes.navItem} to="/contact">Contact</Link>
                <Link className={classes.navItem} to="/login"><BsFillPersonFill className = {classes.profileIcon}/></Link>
                </Toolbar>
        </AppBar>
        </ScrollToColor>
        
    );
}


export default Navbar;