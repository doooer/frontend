import React from 'react';

import { ViewController } from '~/core/ViewController';

import { EditView } from './Edit.view';
import { EditViewModel } from './Edit.view.model';

export const EditViewController: ViewController<EditViewModel> = React.memo(({ viewModel }) => {
  return <EditView {...viewModel} />;
});
