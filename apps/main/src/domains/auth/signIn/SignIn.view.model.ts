import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ViewModel } from '~/core/ViewModel';

import { SignInRequest, SignInRequestSchema } from './SignIn.model';

export type SignInViewModel = ViewModel<typeof useSignInViewModel>;

export function useSignInViewModel() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInRequest>({
    resolver: yupResolver(SignInRequestSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isVisiblePassword, setVisiblePassword] = useState(false);

  const handleSignInSubmit = handleSubmit((formData) => {
    console.log('SignIn FormData: ', formData);
  });

  const toggleVisiblePassword = useCallback(() => {
    setVisiblePassword((value) => !value);
  }, []);

  return {
    control,
    errors,
    isVisiblePassword,
    toggleVisiblePassword,
    handleSignInSubmit,
  };
}
