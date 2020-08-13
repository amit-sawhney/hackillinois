import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core'
import mentoring from '../../images/mentoring.jpg'
import './FindMentor.css';

const useStyles = makeStyles({
  search: {
    width: '70%',
    margin: 'auto',
    backgroundColor: 'white'
  },
  root: {
    paddingTop: '20vh',
    width: '70%',
    margin: 'auto',


  },
  //   background: {
  //     // backgroundImage: `url(${mentoring})`,
  //     // height: '85vh',
  //     // backgroundPosition: 'center',
  //     // backgroundSize: 'cover',
  //     // backgroundRepeat: 'no-repeat',
  //     // paddingBottom: 0,
  //     // marginBottom: 0,
  // }
});

const Mentor = (props) => {
  const classes = useStyles();

  const searchOptions = [
      { name: "Algebra 1" },
      { name: "Algebra 2" },
      { name: "Pre-Calculus" },
      { name: "Calculus I" },
      { name: "Calculus II" },
      { name: "Calculus III/Multivariable Calculus" },
      { name: "Linear Algebra" },
      { name: "Differential Equations" },
      { name: "Discrete Mathematics" },
      { name: "General Chemistry" },
      { name: "Organic Chemistry" },
      { name: "Analytical Chemistry" },
      { name: "Physical Chemistry" },
      { name: "Chem Lab Advise" },
      { name: "Java" },
      { name: "Python" },
      { name: "C/C++/C#" },
      { name: "Javascript/jQuery" },
      { name: "Web Development" },
      { name: "Backend Development" },
      { name: "Algorithms" },
      { name: "Data Structures" },
      { name: "Interview Prep" },
      { name: "General Biology" },
      { name: "Cellular Biology" },
      { name: "Anatomical Sciences" },
      { name: "Ecology" },
      { name: "Evolutionary Biology" },
      { name: "Molecular Biology" },
      { name: "Genetics" },
      { name: "Biochemistry" },
      { name: "Bio Physics" },
      { name: "Writing advise" },
      { name: "Shakespeare" },
      { name: "Poetry" },
      { name: "Nonfiction" },
      { name: "Fiction" },
      { name: "Novel" },
      { name: "Drama" },
      { name: "Spanish" },
      { name: "French" },
      { name: "German" },
      { name: "Japanese" },
      { name: "Mandarin Chinese" },
      { name: "Hindi" },
      { name: "English" }
    ]


  return (
    <div className="background">
      <div className={classes.root}>
        <Autocomplete
          multiple
          options={searchOptions}
          getOptionLabel={(option) => option.name}
          className={classes.search}
          renderInput={(params) => (

            <TextField
              {...params}
              variant="filled"
              label="Find your mentor..."
            />

          )}
        />


      </div>
    </div>
  );
}

export default Mentor;
