import axios from 'axios';
import cookie from 'react-cookies';
import { ENDPOINT_UNFOLLOW } from 'models/Endpoints';
import User from 'models/MidddlyUser';

// Constants
export const SET_LIST = 'GLOOCLE/FRIENDS/SET_LIST';

// Action generators
export function setList(list) {
  return {
    type: SET_LIST,
    payload: list,
  }
}

// Thunk actions
export function searchFriends(type) {
  const currentUser = User.getUser() || {};
  return dispatch => {
    return axios.get(type, {
      params: {
        user_id: currentUser.id
      },
      headers: {
        'Authorization': `Bearer ${cookie.load('midddly_token')}`
      }
    })
      .then(({ data }) => data.data)
      .then(items => dispatch(setList(items)));
  }

}

export function unfollowUser(userId) {
  const url = `${ENDPOINT_UNFOLLOW}/${userId}`;
  return dispatch =>
    axios.delete(url, {
      headers: {
        'Authorization': `Bearer ${cookie.load('midddly_token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(({ data }) => data.data)
    .then(items => dispatch(searchFriends()));
}