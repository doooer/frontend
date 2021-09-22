import axios from 'axios';

import config from '../../config';
import createHttpClient from './core/createHttpClient';

const http = createHttpClient(axios, {
  baseURL: config.api.endpoint,
});

export default http;
