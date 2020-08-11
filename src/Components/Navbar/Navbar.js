import React, { useState } from 'react';
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
        marginRight: '70vh',
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
        position: 'relative',
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
    scrollNavbar: {
        paddingTop: '50px',
        paddingBottom: '20px',
    },
    profileIcon: {
        fontSize: '30px',
        // marginTop: '10px',
        marginRight: '5px',
    },
    toolbarButtons: {
        float: 'left',
    },
    root1: {
        backgroundColor: '#002855',
        paddingBottom: '40px',
        paddingTop: '20px',
        position: 'sticky',
        width: '100%',
        height: '0%',
    },
    appName1: {
        marginRight: '70vh',
        fontSize: '40px',
        position: 'relative',
        float: 'left',
        textDecoration: 'none',
        color: 'white',
        marginLeft: '45px'
    },
    navItem1: {
        textDecoration: 'none',
        marginRight: '40px',
        marginTop: '10px',
        fontSize: '18px',
        position: 'relative',
        float: 'right',
        color: 'white',
        '&:hover': {
            color: '#E84A27',
        }
    }
});


const Navbar = (props) => {
    const classes = useStyles();
    const [home, setHome] = useState(window.location.href.length < 23);

    const handleScroll = (e) => {
        document.getElementById("navbar").setAttribute(classes.scrollNavbar);
    }

    const handleHome = e => {
        setHome(true)
    }

    console.log(window.location.href);

    const handleLeave = e => {
        setHome(false);
    }

    return (
        <div>
            {home ? (
                <ScrollToColor>
                    <AppBar className={classes.root}>
                        <Toolbar className={classes.navbar}>
                            <Link onClick={handleHome} className={classes.appName} to="/">Mentors Meet</Link>
                            <Link onClick={handleLeave} className={classes.navItem} to="/findmentor"><Typography>Find a Mentor</Typography></Link>
                            <Link onClick={handleLeave} className={classes.navItem} to="/becomementor">Become a mentor</Link>
                            <Link onClick={handleLeave} className={classes.navItem} to="/contact">Contact</Link>
                            <Link onClick={handleLeave} className={classes.navItem} to="/login"><BsFillPersonFill className={classes.profileIcon} /></Link>
                        </Toolbar>
                    </AppBar>
                </ScrollToColor>
            ) : (
                    <AppBar className={classes.root1}>
                        <Toolbar className={classes.navbar}>
                            <Link onClick={handleHome} className={classes.appName1} to="/">Mentors Meet</Link>
                            <Link onClick={handleLeave} className={classes.navItem1} to="/findmentor"><Typography>Find a Mentor</Typography></Link>
                            <Link onClick={handleLeave} className={classes.navItem1} to="/becomementor">Become a mentor</Link>
                            <Link onClick={handleLeave} className={classes.navItem1} to="/contact">Contact</Link>
                            <Link onClick={handleLeave} className={classes.navItem1} to="/login"><BsFillPersonFill className={classes.profileIcon} /></Link>
                        </Toolbar>
                    </AppBar>
                )}

        </div>

    );
}


export default Navbar;