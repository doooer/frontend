import React from 'react';

import { ViewController } from '~/core/ViewController';

import { FindPasswordView } from './FindPassword.view';
import { FindPasswordViewModel } from './FindPassword.view.model';

export const FindPasswordViewController: ViewController<FindPasswordViewModel> = React.memo(({ viewModel }) => {
  return <FindPasswordView {...viewModel} />;
});
