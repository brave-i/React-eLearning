import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 30,
    width: '100%',
    Radius: 30,
    background: '#864AFC',
    fontFamily: "Nunito Sans",
    textTransform:"none",
    fontWeight: 550,
  },

}));


export default function SuccessButton(props) {
  const classes = useStyles();

  return (
      <Button variant="contained" color="primary" className={classes.margin}>
        {props.text}
      </Button>
  );
}
