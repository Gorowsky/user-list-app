import React from 'react';
import TextCenter from '../../shared/components/TextCenter/TextCenter';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundColor: '#DEDEDE'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return <footer className={classes.footerContainer}>
    <TextCenter>Created for Leocode</TextCenter>
  </footer>;
};

export default Footer;