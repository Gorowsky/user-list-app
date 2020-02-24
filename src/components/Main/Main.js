import React from 'react';
import UserSection from '../UserSection/UserSerction';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    flex: '1',
    overflowY: 'auto'
  }
}));

const Main = () => {
  const classes = useStyles();

  return <main className={classes.mainContainer}>
    <ErrorBoundary>
      <UserSection></UserSection>
    </ErrorBoundary>
  </main>;
};

export default Main;