const env = (envName: string, defaultValue = '') => {
  return process.env[`NEXT_PUBLIC_${envName}`] ?? defaultValue;
};

const config = {
  env: env('APP_ENV', 'development'),
  api: {
    endpoint: env('API_ENDPOINT'),
  },
};

export default config;
