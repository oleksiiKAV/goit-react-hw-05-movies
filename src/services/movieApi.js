import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '37ce5defcbea1ae1935aece237a9c16f';

export const getMoviesApi = async (endpoint, q, page) => {
  return (
    endpoint &&
    (await axios
      .get(endpoint, {
        params: {
          api_key: API_KEY,
          page,
          // language: 'uk-UA', - doesn't have reviews in UA
          query: q,
        },
      })
      .then(res => res.data))
  );
};
