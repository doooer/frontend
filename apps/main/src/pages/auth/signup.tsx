import { SignUpViewController } from '~/domains/auth/signUp/SignUp.view.controller';
import { useSignUpViewModel } from '~/domains/auth/signUp/SignUp.view.model';

export default function SignUpPage() {
  const viewModel = useSignUpViewModel();

  return <SignUpViewController viewModel={viewModel} />;
}
