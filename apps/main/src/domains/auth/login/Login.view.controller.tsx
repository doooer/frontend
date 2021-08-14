import React from 'react';

import { ViewController } from '~/core/ViewController';

import { LoginView } from './Login.view';
import { LoginViewModel } from './Login.view.model';

export const LoginViewController: ViewController<LoginViewModel> = React.memo(({ viewModel }) => {
  return <LoginView {...viewModel} />;
});
