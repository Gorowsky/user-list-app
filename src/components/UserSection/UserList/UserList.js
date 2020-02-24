import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  prl2: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  userMetaInfo: {
    color: '#AEAEAE'
  }
}));

const UserList = props => {
  const classes = useStyles();

  return props.users && <div>
    {props
      .users
      .map((user, i) => <div key={`user-${i}`}>
        <span className={`${classes.prl2} ${classes.userMetaInfo}`}>{i+1}.</span>
        <span>{user.name}</span>
        <span className={`${classes.prl2} ${classes.userMetaInfo}`}>@{user.username}</span>
      </div>)}
  </div>;
};

export default UserList;