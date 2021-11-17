const config = {
  env: process.env.NEXT_PUBLIC_APP_ENV || 'development',
  api: {
    endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
  },
};

export default config;
