import React from 'react';

import { ViewController } from '~/core/ViewController';

import { MypageView } from './Profile.view';
import { MypageViewModel } from './Profile.view.model';

export const MypageViewController: ViewController<MypageViewModel> = React.memo(({ viewModel }) => {
  return <MypageView {...viewModel} />;
});
