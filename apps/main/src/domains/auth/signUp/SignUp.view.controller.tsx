import React from 'react';

import { ViewController } from '~/core/ViewController';

import { SignUpView } from './SignUp.view';
import { SignUpViewModel } from './SignUp.view.model';

export const SignUpViewController: ViewController<SignUpViewModel> = React.memo(({ viewModel }) => {
  return <SignUpView {...viewModel} />;
});
