import { SignUpViewController } from '~/domains/auth/signUp/SignUp.view.controller';
import { useSignUpViewModel } from '~/domains/auth/signUp/SignUp.view.model';

export default function SignUp() {
  const viewModel = useSignUpViewModel();

  return <SignUpViewController viewModel={viewModel} />;
}
