import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import UserSearch from './UserSearch/UserSearch';
import UserList from './UserList/UserList';
import Axios from 'axios';
import TextCenter from '../../shared/components/TextCenter/TextCenter';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  p2: {
    padding: theme.spacing(2)
  },
  userSectionContainer: {
    width: '350px',
    maxWidth: '100%',
    margin: 'auto'
  }
}));

const UserSection = () => {
  const [userState, setUserState] = useState({
    users: null,
    loading: true,
    error: null,
    filteredUsers: null,
    filterValue: ""
  });

  const classes = useStyles();

  const onFilterChange = (filterValue) => {
    const filteredUsers = userState
      .users
      .filter(user => user
        .name
        .toLowerCase()
        .includes(filterValue.toLowerCase())
      );
    
    setUserState(state => ({
      ...state,
      filteredUsers,
      filterValue
    }));
  }

  useEffect(() => {
    Axios
      .get('/users')
      .then(res => res.data)
      .then(users => {
        setUserState(state => ({
          ...state,
          loading: false,
          filteredUsers: users,
          users
        }));
      })
      .catch(ex => {
        setUserState(state => ({
          ...state,
          loading: false,
          error: ex
        }))
      })
  }, []);

  const renderUserSection = () => {
    if (userState.error) {
      throw userState.error;
    }

    return <Loader loading={userState.loading}>
      {userState.users && <section className={classes.userSectionContainer}>
        <TextCenter className={classes.p2}>
          <Typography variant="h4">User List</Typography>
        </TextCenter>
        <UserSearch
          value={userState.filterValue}
          onFilterChange={({ target: { value } }) => onFilterChange(value)}></UserSearch>
        <UserList users={userState.filteredUsers}></UserList>
      </section>}
    </Loader>;
  };

  return renderUserSection();
};

export default UserSection;