import { FindPasswordViewController } from '~/domains/auth/findPassword/Mypage.view.controller';
import { useFindPasswordViewModel } from '~/domains/mypage/Mypage.view.model';

export default function Test() {
  const viewModel = useFindPasswordViewModel();

  return <FindPasswordViewController viewModel={viewModel} />;
}
