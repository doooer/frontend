import { FindPasswordViewController } from '~/domains/auth/FindPassword/FindPassword.view.controller';
import { useFindPasswordViewModel } from '~/domains/auth/FindPassword/FindPassword.view.model';

export default function Test() {
  const viewModel = useFindPasswordViewModel();

  return <FindPasswordViewController viewModel={viewModel} />;
}
