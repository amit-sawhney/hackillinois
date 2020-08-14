import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import { Typography, Button, TextField } from '@material-ui/core'
import mentoring from '../../images/mentoring.jpg'
import './FindMentor.css';
import { AiOutlineSearch } from 'react-icons/ai'

const useStyles = makeStyles({
  search: {
    width: '70%',
    margin: 'auto',
    backgroundColor: 'white',
  },
  root: {
    // display: 'flex',
    paddingTop: '10vh',
    width: '70%',
    margin: 'auto',
  },
  searchButton: {
    color: 'white',
    border: 'solid white',
    marginTop: '30px',
    margin: 'auto',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#F8F8FF',
      color: 'black'
    }
  },
  center: {
    textAlign: 'center'
  },
  header: {
    color: 'white',
    textAlign: 'center',
    fontSize: '60px',
    marginBottom: '10vh'
  }
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
  const [tags, setTags] = useState([]);

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

  const handleSearch = e => {
    console.log(tags)
  }

  const addTags = (event, values) => {
    setTags(values);
  }

  function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
  };


  return (
    <div className="background">
      <div className={classes.root}>
        <div className={classes.header}>
          Find your next Mentor Today
        </div>
        <Autocomplete
          multiple
          id="search-queries"
          options={searchOptions}
          getOptionLabel={(option) => option.name}
          className={classes.search}
          onClick={addTags}
          renderInput={(params) => (

            <TextField
              {...params}
              variant="filled"
              id="test"
              label="What kind of help do you need?"

            ></TextField>

          )}
        />
        <div className={classes.center}>
          <Button onClick={handleSearch} className={classes.searchButton}>Search</Button>
        </div>


      </div>
    </div>
  );
}

export default Mentor;
