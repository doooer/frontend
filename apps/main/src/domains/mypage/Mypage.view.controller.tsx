import React from 'react';

import { ViewController } from '~/core/ViewController';

import { MypageView } from './Mypage.view';
import { MypageViewModel } from './Mypage.view.model';

export const MypageViewController: ViewController<MypageViewModel> = React.memo(({ viewModel }) => {
  return <MypageView {...viewModel} />;
});
