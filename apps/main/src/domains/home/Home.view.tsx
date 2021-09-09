import Head from 'next/head';
import React from 'react';

import { Main, Section } from '../_layout/defaultLayout';
import Banner from './components/Banner';
import { HomeViewModel } from './Home.view.model';

export const HomeView: React.VFC<HomeViewModel> = React.memo(() => {
  return (
    <Main>
      <Head>
        <title>Doooer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Section></Section>
    </Main>
  );
});
