import React from 'react';

import { ViewController } from '~/core/ViewController';

import { ProfileView } from './Profile.view';
import { ProfileViewModel } from './Profile.view.model';

export const ProfileViewController: ViewController<ProfileViewModel> = React.memo(({ viewModel }) => {
  return <ProfileView {...viewModel} />;
});
