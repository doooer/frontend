import React from 'react';

import AuthLayout from '~/domains/_layout/authLayout/components/AuthLayout';

import { LoginViewModel } from './Login.view.model';

export const LoginView: React.VFC<LoginViewModel> = React.memo(() => {
  return <AuthLayout>login view</AuthLayout>;
});
