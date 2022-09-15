import axios from 'axios';
import {
  GET_POST,
  SEARCH_POST,
  DETAIL_POST,
  LIKE_POST,
  MY_LIKED,
  GET_COUNT,
} from './types';

//getAllpost
export function getRandompost() {
  const request = axios.get('/api/posts').then((res) => res.data);

  return {
    type: GET_POST,
    payload: request,
  };
}

//search
export function searchPost(search) {
  const request = axios
    .post(`/api/posts/search?search=${search}`)
    .then((res) => res.data);
  return {
    type: SEARCH_POST,
    payload: request,
  };
}

//details
export function getPostDetails(id) {
  const request = axios.get(`/api/posts/${id}`).then((res) => res.data);

  return {
    type: DETAIL_POST,
    payload: request,
  };
}

//likepost
export function likePost(id) {
  const request = axios.patch(`/api/posts/like/${id}`).then((res) => res.data);

  return {
    type: LIKE_POST,
    payload: request,
  };
}

// mypageLiked
export function mypageLiked() {
  const request = axios.get('/api/posts/like').then((res) => res.data);

  return {
    type: MY_LIKED,
    payload: request,
  };
}

export function getPostDateCount() {
  const request = axios.post('/api/getCount').then((res) => res.data);

  return {
    type: GET_COUNT,
    payload: request,
  };
}
