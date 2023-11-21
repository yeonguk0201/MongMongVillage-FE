import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_DB_API_ENDPOINT,
});

export * from './postSignUp';
