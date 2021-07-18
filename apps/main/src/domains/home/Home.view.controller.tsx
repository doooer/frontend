import React from 'react';

import { ViewController } from '~/core/ViewController';
import { HomeView } from './Home.view';
import { HomeViewModel } from './Home.view.model';

export const HomeViewController: ViewController<HomeViewModel> = React.memo(({ viewModel }) => {
  return <HomeView {...viewModel} />;
});
