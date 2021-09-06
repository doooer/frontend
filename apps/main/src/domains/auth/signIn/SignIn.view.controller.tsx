import React from 'react';

import { ViewController } from '~/core/ViewController';

import { SignInView } from './SignIn.view';
import { SignInViewModel } from './SignIn.view.model';

export const SignInViewController: ViewController<SignInViewModel> = React.memo(({ viewModel }) => {
  return <SignInView {...viewModel} />;
});
