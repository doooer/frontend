import React from 'react';

import { ViewController } from '~/core/ViewController';

import { FindPasswordView } from './findPassword.view';
import { FindPasswordViewModel } from './findPassword.view.model';

export const FindPasswordViewController: ViewController<FindPasswordViewModel> = React.memo(({ viewModel }) => {
  return <FindPasswordView {...viewModel} />;
});
