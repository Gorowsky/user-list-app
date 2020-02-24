import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  spinnerContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Loader = (props) => {
  const classes = useStyles();

  return (
    props.loading ?
      <div className={classes.spinnerContainer}>
        <CircularProgress className="text-center" color="secondary"/>
      </div>
    :
      props.children
  );
};

export default Loader;