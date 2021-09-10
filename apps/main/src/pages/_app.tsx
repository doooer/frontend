import { ThemeProvider } from '@emotion/react';
import moment from 'moment';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import theme from '~/core/Theme';
import { Header } from '~/domains/_layout/defaultLayout';

moment.locale('ko');

const queryClient = new QueryClient();

function DoooerApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default DoooerApp;
