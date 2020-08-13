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

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 }
  ]


  return (
    <div className="background">
      <div className={classes.root}>
        <Autocomplete
          multiple
          options={top100Films}
          getOptionLabel={(option) => option.title}
          className={classes.search}
          renderInput={(params) => (<TextField
            {...params}
            variant="filled"
            label="Find your mentor..."
          />)}
        />


      </div>
    </div>
  );
}

export default Mentor;
