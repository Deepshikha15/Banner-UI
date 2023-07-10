
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserUpdate() {
  const classes = useStyles();

  const params = useParams();
  console.log("params",params)
  useEffect(() => {
    fetch(`http://localhost:4000/api/record/${params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("update result ",result)
          setFname(result.data.fname)
          setLname(result.data.lname)
          setAge(result.data.age)
        }
      )
  },[params.id])

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'id': params.id,
      'fname': fname,
      'lname': lname,
      'age': age,
    }
    fetch(`http://localhost:4000/api/records/${params.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        alert(result['message'])
        if (result.success === 'true') {
          window.location.href ='/usermanagement';
        }
      }
    )
  }

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge]= useState();

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              </Grid>
              <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
