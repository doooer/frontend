import Head from 'next/head';
import React from 'react';

import styles from './Home.module.css';
import { Container } from './Home.styles';
import { HomeViewModel } from './Home.view.model';

export const HomeView: React.VFC<HomeViewModel> = React.memo(() => {
  return (
    <Container>
      <Head>
        <title>Doooer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>Doooer!</b>
        </h1>
      </main>
    </Container>
  );
});
