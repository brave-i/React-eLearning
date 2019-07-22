import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 30,
    width: '100%',
    Radius: 30,
    background: '#F3E9FF',
    fontFamily: "Nunito Sans",
    textTransform:"none",
    color: '#864AFC',
    fontWeight: 550,
  },

}));


export default function DetailedButton(props) {
  const classes = useStyles();

  return (
      <Button variant="contained" color="primary" className={classes.margin} onClick={props.handleClick}>
        {props.text}
      </Button>
  );
}
