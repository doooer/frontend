import { SignInViewController } from '~/domains/auth/signIn/SignIn.view.controller';
import { useSignInViewModel } from '~/domains/auth/signIn/SignIn.view.model';

export default function SignIn() {
  const viewModel = useSignInViewModel();

  return <SignInViewController viewModel={viewModel} />;
}
