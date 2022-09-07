import axios from 'axios';
import { ADD_COMMENT, GET_COMMENTS } from './types';

//addcomment
export function addComment(postId, body) {
  const request = axios
    .post(`/api/comment/${postId}`, body)
    .then((res) => res.data);
  return {
    type: ADD_COMMENT,
    payload: request,
  };
}

// getcomment
export function getComments(postId) {
  const request = axios
    .get(`/api/getComment/${postId}`)
    .then((res) => res.data);

  return {
    type: GET_COMMENTS,
    payload: request,
  };
}
