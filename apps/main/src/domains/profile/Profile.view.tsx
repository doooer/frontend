import React from 'react';

import { Main, Section } from '../_layout/DefaultLayout';
import ProfileBackground from './components/ProfileBackground';
import UserProfile from './components/UserProfile';
import { MypageViewModel } from './Profile.view.model';

export const MypageView: React.VFC<MypageViewModel> = React.memo(() => {
  return (
    <Main>
      <ProfileBackground />
      <Section>
        <UserProfile />
      </Section>
    </Main>
  );
});
