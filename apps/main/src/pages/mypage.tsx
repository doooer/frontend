import { MypageViewController } from '~/domains/mypage/Mypage.view.controller';
import { useMypageViewModel } from '~/domains/mypage/Mypage.view.model';

export default function Mypage() {
  const viewModel = useMypageViewModel();

  return <MypageViewController viewModel={viewModel} />;
}
