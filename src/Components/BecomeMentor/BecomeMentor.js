import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DialogContent, Accordion, AccordionSummary, AccordionDetails, Button, TextareaAutosize, FormControlLabel, Checkbox, MenuItem, Select, Dialog, Paper, Grid, FormControl, Input, TextField } from '@material-ui/core/'
import SubjectForm from './SubjectForm'
import { MdExpandMore } from 'react-icons/md';

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
    },
    subjectSection: {

    },
    textArea: {
        fontFamily: 'Arial',
        fontSize: '14px',
        minWidth: '100%',
        maxWidth: '100%',
        minHeight: '130px',
        maxHeight: '130px',
    },
    submitButton: {
        backgroundColor: '#33cc33',
        width: '20%',
        float: 'right',
        position: 'relative',
        display: 'flex',
        marginTop: '3%',
        marginRight: '2.5%',
        '&:hover': {
            backgroundColor: '#2aa22a',
        }
    },
    dialog: {
        width: '80%',
        margin: 'auto'
    }
});

const BecomeMentor = (props) => {
    const classes = useStyles();
    const [subjects, setSubjects] = useState([{}]);
    const [formOpen, setFormOpen] = useState(false);

    const openForm = e => {
        setFormOpen(true);
    }

    const closeForm = e => {
        setFormOpen(false);
    }

    return (
        <div className={classes.root}>
            {/* <Paper className={classes.paper}> */}
            <Button onClick={openForm}>Open Form</Button>
            <div> 
                <Dialog className={classes.dialog} fullWidth maxWidth="xl" onClose={closeForm} open={formOpen}>
                    <DialogContent>
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
                                    <h3>Bio</h3>
                                    <TextareaAutosize className={classes.textArea} />
                                </div>
                                <div className={classes.header}>Experience</div>
                                <p style={{ textAlign: 'center' }}>Please only select subjects you would feel comfortable tutoring in!</p>
                                <div className={classes.content}>
                                    <Accordion>
                                        <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                            Mathematics
                            </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="algebra1"
                                                        control={<Checkbox color="primary" />}
                                                        label="Algebra 1"
                                                    />
                                                    <br />
                                                    <FormControlLabel
                                                        value="algebra2"
                                                        control={<Checkbox color="primary" />}
                                                        label="Algebra 2"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="precalc"
                                                        control={<Checkbox color="primary" />}
                                                        label="Pre-Calculus"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="calculus1"
                                                        control={<Checkbox color="primary" />}
                                                        label="Calculus I"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="calculus2"
                                                        control={<Checkbox color="primary" />}
                                                        label="Calculus II"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="calculus3/multi"
                                                        control={<Checkbox color="primary" />}
                                                        label="Calculus III/Multivariable Calculus"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="linearalgebra"
                                                        control={<Checkbox color="primary" />}
                                                        label="Linear Algebra"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="difeq"
                                                        control={<Checkbox color="primary" />}
                                                        label="Differential Equations"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="discrete"
                                                        control={<Checkbox color="primary" />}
                                                        label="Discrete Mathematics"
                                                    />
                                                </Grid>
                                            </Grid>

                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />} >
                                            Chemistry
                            </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="genchem"
                                                        control={<Checkbox color="primary" />}
                                                        label="General Chemistry"
                                                    />
                                                    <br />
                                                    <FormControlLabel
                                                        value="ochem"
                                                        control={<Checkbox color="primary" />}
                                                        label="Organic Chemistry"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="anchem"
                                                        control={<Checkbox color="primary" />}
                                                        label="Analytical Chemistry"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="phychem"
                                                        control={<Checkbox color="primary" />}
                                                        label="Physical Chemistry"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="labs"
                                                        control={<Checkbox color="primary" />}
                                                        label="Lab Advise"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>

                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                            Computer Science
                            </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="java"
                                                        control={<Checkbox color="primary" />}
                                                        label="Java"
                                                    />
                                                    <br />
                                                    <FormControlLabel
                                                        value="python"
                                                        control={<Checkbox color="primary" />}
                                                        label="Python"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="c"
                                                        control={<Checkbox color="primary" />}
                                                        label="C/C++/C#"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="js"
                                                        control={<Checkbox color="primary" />}
                                                        label="Javascript/jQuery"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="webdev"
                                                        control={<Checkbox color="primary" />}
                                                        label="Web Development"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="backend"
                                                        control={<Checkbox color="primary" />}
                                                        label="Backend Development"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="algos"
                                                        control={<Checkbox color="primary" />}
                                                        label="Algorithms"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="difeq"
                                                        control={<Checkbox color="primary" />}
                                                        label="Data Structures"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="discrete"
                                                        control={<Checkbox color="primary" />}
                                                        label="Interview Prep"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                            Biology
                            </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="molecular"
                                                        control={<Checkbox color="primary" />}
                                                        label="Molecular Biology"
                                                    />
                                                    <br />
                                                    <FormControlLabel
                                                        value="cellular"
                                                        control={<Checkbox color="primary" />}
                                                        label="Cellular Biology"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="anatomical"
                                                        control={<Checkbox color="primary" />}
                                                        label="Anatomical Sciences"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="ecology"
                                                        control={<Checkbox color="primary" />}
                                                        label="Ecology"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="evolutionary"
                                                        control={<Checkbox color="primary" />}
                                                        label="Evolutionary Biology"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="genBio"
                                                        control={<Checkbox color="primary" />}
                                                        label="General Biology"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="genetics"
                                                        control={<Checkbox color="primary" />}
                                                        label="Genetics"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="bioChemistry"
                                                        control={<Checkbox color="primary" />}
                                                        label="Biochemistry"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="biophysics"
                                                        control={<Checkbox color="primary" />}
                                                        label="Bio Physics"
                                                    />
                                                </Grid>
                                            </Grid>

                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                            English/Writing
                            </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="writing"
                                                        control={<Checkbox color="primary" />}
                                                        label="Writing advise"
                                                    />
                                                    <br />
                                                    <FormControlLabel
                                                        value="shakespeare"
                                                        control={<Checkbox color="primary" />}
                                                        label="Shakespeare"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="poetry"
                                                        control={<Checkbox color="primary" />}
                                                        label="Poetry"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="nonfiction"
                                                        control={<Checkbox color="primary" />}
                                                        label="Nonfiction"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="fiction"
                                                        control={<Checkbox color="primary" />}
                                                        label="Fiction"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="novel"
                                                        control={<Checkbox color="primary" />}
                                                        label="Novel"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="drama"
                                                        control={<Checkbox color="primary" />}
                                                        label="Drama"
                                                    /> <br />
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                            Foreign Language
                            </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                                <Grid item>
                                                    <FormControlLabel
                                                        value="spanish"
                                                        control={<Checkbox color="primary" />}
                                                        label="Spanish"
                                                    />
                                                    <br />
                                                    <FormControlLabel
                                                        value="french"
                                                        control={<Checkbox color="primary" />}
                                                        label="French"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="german"
                                                        control={<Checkbox color="primary" />}
                                                        label="German"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="japanese"
                                                        control={<Checkbox color="primary" />}
                                                        label="Japanese"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="Mandarin Chinese"
                                                        control={<Checkbox color="primary" />}
                                                        label="Mandarin Chinese"
                                                    /> <br />
                                                    <FormControlLabel
                                                        value="hindi"
                                                        control={<Checkbox color="primary" />}
                                                        label="Hindi"
                                                    /> <br />
                                                </Grid>
                                                <Grid item xs>
                                                    <FormControlLabel
                                                        value="english"
                                                        control={<Checkbox color="primary" />}
                                                        label="English"
                                                    /> <br />
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <Button className={classes.submitButton}>Submit</Button>
                            </div>
                        </FormControl >
                    </DialogContent>
                </Dialog>
            </div>
            {/* </Paper> */}
        </div >
    );
}

export default BecomeMentor;
