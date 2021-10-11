import { FindPasswordViewController } from '~/domains/auth/findPassword/FindPassword.view.controller';
import { useFindPasswordViewModel } from '~/domains/auth/findPassword/FindPassword.view.model';

export default function Test() {
  const viewModel = useFindPasswordViewModel();

  return <FindPasswordViewController viewModel={viewModel} />;
}
