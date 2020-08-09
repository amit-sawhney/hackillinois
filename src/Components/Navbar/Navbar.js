import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#002855',
        paddingBottom: '100px',
        paddingTop: '40px',
        position: 'fixed',
        width: '100%',
        height: '0px',
    },
    appName: {
        fontSize: '40px',
        position: 'relative',
        float: 'left',
        textDecoration: 'none',
        color: 'white',
        marginLeft: '45px'
    },
    navItem: {
        textDecoration: 'none',
        marginRight: '40px',
        marginTop: '10px',
        fontSize: '18px',
        position: 'static',
        float: 'right',
        color: 'white',
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
    }
});


const Navbar = (props) => {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <nav className={classes.navbar}>
                <Link className={classes.appName} to="/">Mentors Meet</Link>
                <Link className={classes.navItem} to="/login"><BsFillPersonFill className = {classes.profileIcon}/></Link>
                <Link className={classes.navItem} to="/contact">Contact</Link>
                <Link className={classes.navItem} to="/becomementor">Become a mentor</Link>
                <Link className={classes.navItem} to="/findmentor">Find a Mentor</Link>
            </nav>
        </div>
    );
}


export default Navbar;