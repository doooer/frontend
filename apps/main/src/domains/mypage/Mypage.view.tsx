import React from 'react';

import MypageHeader from '../_layout/SubLayouts/MypageHeader';
import { MypageViewModel } from './Mypage.view.model';

export const MypageView: React.VFC<MypageViewModel> = React.memo(() => {
  return <MypageHeader />;
});
