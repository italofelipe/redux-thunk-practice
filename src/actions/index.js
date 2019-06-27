import API from "../utils/API";
export const fetchPosts = () => async dispatch => {
  const response = await API.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
export const fetchUser = id => async dispatch => {
  const response = await API.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
