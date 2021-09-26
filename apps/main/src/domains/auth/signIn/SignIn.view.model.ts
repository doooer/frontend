import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { ViewModel } from '~/core/ViewModel';
import { MutationKey } from '~/shared/enums/ReactQuery';

import { SignInRequest, SignInRequestSchema, SignInResponse } from './SignIn.model';
import SignInRepository from './SignIn.repository';

export type SignInViewModel = ViewModel<typeof useSignInViewModel>;

export const useSigninMutation = () => {
  return useMutation<SignInResponse, Error, SignInRequest>({
    mutationKey: [MutationKey.SignIn],
    mutationFn: SignInRepository.signIn,
    onError(error: Error, variables) {
      console.error('<useSigninMutation>', 'onError: ', error);
    },
    onSettled(data, variables) {
      console.debug('<useSigninMutation>', 'onSettled: ', data);
    },
    onSuccess(data, variables) {
      // TODO(@youngjung): 로그인 후 처리 기능 추가
      // 1. token sessionStorage에 적재
      // 2. nextjs에 따로 api만든 후 token cookie에 httpOnly에 적재 (repository에서 진행해야하는지는 고민 필요)
      // 3. 이전 페이지 or 홈 페이지로 이동
      console.debug('<useSigninMutation>', 'onSuccess: ', data);
    },
  });
};

export function useSignInViewModel() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInRequest>({
    resolver: yupResolver(SignInRequestSchema),
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const signInMutation = useSigninMutation();

  const [isVisiblePassword, setVisiblePassword] = useState(false);

  const handleSignInSubmit = handleSubmit((formData) => {
    console.log('SignIn FormData: ', formData);
    signInMutation.mutateAsync(formData);
  });

  const toggleVisiblePassword = useCallback(() => {
    setVisiblePassword((value) => !value);
  }, []);

  return {
    control,
    errors,
    isVisiblePassword,
    signInMutation,
    toggleVisiblePassword,
    handleSignInSubmit,
  };
}
