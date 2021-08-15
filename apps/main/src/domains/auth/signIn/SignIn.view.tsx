import React from 'react';

import AuthLayout from '~/domains/_layout/authLayout/components/AuthLayout';

import { SignInViewModel } from './SignIn.view.model';

export const SignInView: React.VFC<SignInViewModel> = React.memo(() => {
  return <AuthLayout>SignIn view</AuthLayout>;
});
