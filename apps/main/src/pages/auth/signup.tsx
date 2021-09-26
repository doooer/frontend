import { SignUpViewController } from '~/domains/auth/SignUp/SignUp.view.controller';
import { useSignUpViewModel } from '~/domains/auth/SignUp/SignUp.view.model';

export default function SignUpPage() {
  const viewModel = useSignUpViewModel();

  return <SignUpViewController viewModel={viewModel} />;
}
