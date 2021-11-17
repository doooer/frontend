import React from 'react';

import { Main } from '../_layout/defaultLayout';
import SubHeader from './components/SubHeader';
import { ProfileViewModel } from './Profile.view.model';

export const ProfileView: React.VFC<ProfileViewModel> = React.memo(() => {
  return (
    <Main>
      <SubHeader />
    </Main>
  );
});
