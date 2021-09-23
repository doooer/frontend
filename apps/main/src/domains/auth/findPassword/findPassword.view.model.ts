import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ViewModel } from '~/core/ViewModel';

import { FindPasswordRequest, FindPasswordSchema } from './findPassword.model';

export type FindPasswordViewModel = ViewModel<typeof useFindPasswordViewModel>;

export function useFindPasswordViewModel() {
  const [isVisiblePassword, setVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FindPasswordRequest>({
    resolver: yupResolver(FindPasswordSchema),
    mode: 'all',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const handleFindPasswordSubmit = handleSubmit((formData) => {
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
    handleFindPasswordSubmit,
    toggleVisiblePassword,
    toggleVisibleConfirmPassword,
  };
}
