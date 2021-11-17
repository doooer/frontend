import { ProfileViewController } from '~/domains/profile/Profile.view.controller';
import { useProfileViewModel } from '~/domains/profile/Profile.view.model';

export default function Profile() {
  const viewModel = useProfileViewModel();

  return <ProfileViewController viewModel={viewModel} />;
}
