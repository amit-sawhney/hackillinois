import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import { Typography, Button, TextField } from '@material-ui/core'
import mentoring from '../../images/mentoring.jpg'
import './FindMentor.css';
import { AiOutlineSearch } from 'react-icons/ai'
import Viewmore from './viewmore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import sortMentors from '../Helpers/MentorAlgorithm';

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


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const Mentor = (props) => {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [tableMentors, setTableMentors] = useState([]);
  const [mentors, setMentors] = useState([]);

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
    { name: "Writing Advise" },
    { name: "Shakespeare" },
    { name: "Poetry" },
    { name: "NonFiction" },
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
    var searchQueries = removeDuplicates(tags);


    console.log(searchQueries);

    var mentorsToReturn = [];

    for (var i = 0; i < mentors.length; i++) {
      var person = mentors[i];
      var matchCounter = 0;

      for (var j = 0; j < searchQueries.length; j++) {
        if (person.interestedsubjects.indexOf(searchQueries[j]) !== -1) {
          matchCounter++;
        }
      }

      if (matchCounter !== 0) {
        var matchCalc = Math.round(matchCounter / searchQueries.length * 100);

        mentorsToReturn.push({
          mentor: person,
          match: matchCalc,
        })
      }
    }

    mentorsToReturn.sort(function (a, b) {
      return b.match - a.match;
    });

    var mentorRankObject = mentorsToReturn;
    var temp = [];

    for (var i = 0; i < mentorRankObject.length; i++) {
      temp.push(mentorRankObject[i].mentor);
    }

    setTableMentors(temp);
  }

  const addTags = (event, values) => {
    setTags(values);
  }

  function removeDuplicates(array) {
    var temp = [];
    for (var i = 0; i < array.length; i++) {
      temp.push(array[i].name);
    }
    return temp.filter((a, b) => temp.indexOf(a) === b)
  };



  const getMentors = async () => {
    try {
      const response = await fetch("http://localhost:5000/mentors");
      const jsonData = await response.json();
      console.log(jsonData);
      setMentors(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getMentors();
  }, []);


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
          onChange={addTags}
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

        <TableContainer style={{ marginTop: '30px' }} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="right">More Info</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableMentors.map((mentor) => (
                <StyledTableRow >
                  <StyledTableCell align="left">{mentor.fname} {mentor.lname}</StyledTableCell>
                  <StyledTableCell align="center"> {mentor.email}</StyledTableCell>
                  <StyledTableCell align="right"> <Viewmore id={mentor.mentor_id} /></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </div>
  );
}

export default Mentor;
