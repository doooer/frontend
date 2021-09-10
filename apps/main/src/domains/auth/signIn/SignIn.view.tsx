import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import AuthLayout from '~/domains/_layout/authLayout/AuthPage';
import Button from '~/shared/components/buttons/Button';
import ForwardLink from '~/shared/components/ForwardLink';
import ErrorMessages from '~/shared/ErrorMessages';

import blindEye from '../../../images/icons/blind_eye.svg';
import eye from '../../../images/icons/eye.svg';
import { Container, ErrorText, EyeButton, Label, MessageBox } from '../components/styles';
import { SignInViewModel } from './SignIn.view.model';

interface SignInFormType {
  email: string;
  password: string;
}

const { email, password } = ErrorMessages.AUTH_ERROR_MESSAGE;

const signInSchema = yup.object().shape({
  email: yup.string().email(email.wrongAddress).required(email.default),
  password: yup.string().required(password.default),
});

export const SignInView: React.VFC<SignInViewModel> = React.memo(() => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignInFormType>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmitHandler = (formData: SignInFormType) => {
    console.log(formData);
  };

  const togglePassword = () => {
    setVisiblePassword((value) => !value);
  };

  return (
    <AuthLayout>
      <Container>
        <Title>우리의 두어가 되어주세요 :)</Title>
        <SignInForm onSubmit={handleSubmit(onSubmitHandler)}>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) => (
              <Label htmlFor="email">
                <span>이메일</span>
                <div className="input_container">
                  <input type="text" placeholder={password.default} value={value} onChange={onChange} onBlur={onBlur} />
                  <div className="animate_div" />
                  <MessageBox>{errors.email && <ErrorText>{errors.email.message}</ErrorText>}</MessageBox>
                </div>
              </Label>
            )}
          />
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <Label htmlFor="password">
                <span>비밀번호</span>
                <div className="input_container">
                  <input
                    type={visiblePassword ? 'text' : 'password'}
                    placeholder={password.default}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />

                  <EyeButton onClick={togglePassword}>
                    <Image src={visiblePassword ? eye : blindEye} alt="visible password" />
                  </EyeButton>
                  <div className="animate_div" />
                  <MessageBox>{errors.password && <ErrorText>{errors.password.message}</ErrorText>}</MessageBox>
                </div>
              </Label>
            )}
          />

          <Button available={isValid} width={504} padding="xSmall" color="white" background="blue" type="submit">
            <Text>로그인</Text>
          </Button>
        </SignInForm>
        <ForwardLink href="/">
          <FindPasswordButton> 비밀번호를 잊어버렸나요? </FindPasswordButton>
        </ForwardLink>

        <br />

        <Title>DOOOER가 처음이신가요?</Title>
        <ForwardLink href="/signUp">
          <Button width={504} padding="xSmall" color="white" background="blue">
            <Text>회원 가입</Text>
          </Button>
        </ForwardLink>
      </Container>
    </AuthLayout>
  );
});

const Title = styled.h1`
  margin: ${({ theme }) => theme.space.large} 0 ${({ theme }) => theme.space.medium} 0;
  padding: ${({ theme }) => theme.space.small} 0 ${({ theme }) => theme.space.xxxSmall} 0;
  font-size: ${({ theme }) => theme.fontSize.title};
`;

const SignInForm = styled.form`
  margin: ${({ theme }) => theme.space.small} 0;
`;

const FindPasswordButton = styled.button`
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.black20};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
`;
