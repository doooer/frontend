import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ViewModel } from '~/core/ViewModel';

import { SignUpRequest, SignUpRequestSchema } from './SignUp.model';

export type SignUpViewModel = ViewModel<typeof useSignUpViewModel>;

export function useSignUpViewModel() {
  const [isVisiblePassword, setVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignUpRequest>({
    resolver: yupResolver(SignUpRequestSchema),
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      membersInfoCheck: false,
      personalInfoCheck: false,
    },
  });

  const handleSignUpSubmit = handleSubmit((formData) => {
    console.log('SignUp FormData: ', formData);
  });

  const toggleVisiblePassword = useCallback(() => {
    setVisiblePassword((value) => !value);
  }, []);

  const toggleVisibleConfirmPassword = useCallback(() => {
    setVisibleConfirmPassword((value) => !value);
  }, []);

  return {
    control,
    errors,
    isValid,
    isVisiblePassword,
    isVisibleConfirmPassword,
    handleSignUpSubmit,
    toggleVisiblePassword,
    toggleVisibleConfirmPassword,
  };
}
