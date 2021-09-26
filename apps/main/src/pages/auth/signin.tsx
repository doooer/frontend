import { SignInViewController } from '~/domains/auth/SignIn/SignIn.view.controller';
import { useSignInViewModel } from '~/domains/auth/SignIn/SignIn.view.model';

export default function SignInPage() {
  const viewModel = useSignInViewModel();

  return <SignInViewController viewModel={viewModel} />;
}
