import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <Typography className={classes.title}>Login Form</Typography>
      <label htmlFor="username">Username:</label>
      <TextField id="username" name="username" placeholder="Enter your username" className={classes.input} />
      <label htmlFor="password">Password:</label>
      <TextField type="password" id="password" name="password" placeholder="Enter your password" className={classes.input} />
      <Button type="submit" className={classes.button}>Login</Button>
    </form>
  );
};

export default Login;