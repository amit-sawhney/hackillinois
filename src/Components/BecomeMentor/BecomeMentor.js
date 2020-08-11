import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, Divider, Paper, Grid, FormControl, Input, TextField } from '@material-ui/core/'

const useStyles = makeStyles({
    root: {
        marginTop: '40px',
        width: '80%',
        margin: 'auto',
    },
    space: {
        paddingRight: '10px'
    },
    paper: {
        // padding: '20px',
    },
    header: {
        backgroundColor: '#ECA190',
        color: 'black',
        fontSize: '25px',
        textAlign: 'center',
        padding: '10px',
        fontWeight: 'bold',
        marginTop: '20px',
    },
    content: {
        width: '95%',
        margin: 'auto'
    }
});

const BecomeMentor = (props) => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            {/* <Paper className={classes.paper}> */}
            <FormControl fullWidth>
                <div className={classes.section}>
                    <div className={classes.header}>General Information</div>
                    <div className={classes.content}>
                        <h3>Name</h3>
                        <Grid style={{ margin: 'auto' }} container>
                            <Grid className={classes.space} item xs={6}>
                                <TextField fullWidth variant="outlined" required label="First name" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" required label="Last name" />
                            </Grid>
                        </Grid>
                        <h3>Contact</h3>
                        <Grid style={{ margin: 'auto' }} container>
                            <Grid className={classes.space} item xs={6}>
                                <TextField fullWidth variant="outlined" required label="Email" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" label="Phone Number" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.header}>Experience</div>
                    <p>Please only select subjects you would feel comfortable tutoring in!</p>
                    <div className={classes.content}>
                        <Grid style={{ margin: 'auto' }} container>
                            <Grid className={classes.space} item xs={6}>
                                <TextField fullWidth variant="outlined" required label="Subject" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" placeholder="Algebra, Calculus I-III, Differential Equations, Statistics" required label="Courses" />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </FormControl>
            {/* </Paper> */}
        </div>
    );
}

export default BecomeMentor;
