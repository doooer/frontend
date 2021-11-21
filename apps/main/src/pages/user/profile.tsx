import { MypageViewController } from '~/domains/profile/Profile.view.controller';
import { useMypageViewModel } from '~/domains/profile/Profile.view.model';

export default function Mypage() {
  const viewModel = useMypageViewModel();

  return <MypageViewController viewModel={viewModel} />;
}
