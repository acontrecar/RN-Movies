import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '7a1b6ac24a2add703ce92c6a53d0ec8c',
    language: 'es',
  },
});
