import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  pb2: {
    paddingBottom: theme.spacing(2)
  }
}));

const UserSearch = props => {
  const classes = useStyles();

  return <div className={classes.pb2}>
    <TextField
      variant="outlined"
      id="user-name-filter"
      label="Filter user by name..."
      fullWidth
      value={props.value}
      onChange={props.onFilterChange}
    ></TextField>
  </div>;
};

export default UserSearch;