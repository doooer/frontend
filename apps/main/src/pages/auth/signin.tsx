import { SignInViewController } from '~/domains/auth/signIn/SignIn.view.controller';
import { useSignInViewModel } from '~/domains/auth/signIn/SignIn.view.model';

export default function SignInPage() {
  const viewModel = useSignInViewModel();

  return <SignInViewController viewModel={viewModel} />;
}
