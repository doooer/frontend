import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios';
import qs from 'qs';

import { setAuthorization } from '../utils/setAuthorization';

export interface CreateHttpClientConfig extends AxiosRequestConfig {
  accessToken?: string;
}

export interface HttpClientInstance extends AxiosInstance {
  httpClientConfig: CreateHttpClientConfig;
  setAuthorization: (token: string) => void;
}

export default function createHttpClient(axios: AxiosStatic, options?: CreateHttpClientConfig) {
  const defaultConfig: AxiosRequestConfig = {
    headers: {},
    httpAgent: false,
    httpsAgent: false,
    baseURL: '',
    timeout: 30 * 1000,
    proxy: false,
    maxContentLength: 1073741824, // 1GB
    paramsSerializer: qs.stringify,
  };

  const config: CreateHttpClientConfig = {
    ...defaultConfig,
    ...options,
  };

  const { baseURL, headers, httpAgent, httpsAgent, paramsSerializer, proxy, timeout, adapter, maxContentLength } =
    config;

  if (!config.headers.Authorization) {
    setAuthorization(config.headers, config.accessToken);
  }

  const axiosOptions: AxiosRequestConfig = {
    baseURL,
    headers,
    httpAgent,
    httpsAgent,
    paramsSerializer,
    proxy,
    timeout,
    adapter,
    maxContentLength,
  };

  const instance = axios.create(axiosOptions) as HttpClientInstance;

  instance.httpClientConfig = config;

  // eslint-disable-next-line func-names
  instance.setAuthorization = function (token: string) {
    setAuthorization(this.defaults.headers, token);
  };

  return instance;
}
