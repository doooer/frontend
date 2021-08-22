import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import AuthLayout from '~/domains/_layout/authLayout/components/AuthLayout';
import Button from '~/shared/components/buttons/Button';

import blindEye from '../../../../public/images/icons/blind_eye.svg';
import eye from '../../../../public/images/icons/eye.svg';
import { Container, EyeButton, Label } from '../components';
import { SignInViewModel } from './SignIn.view.model';

export const SignInView: React.VFC<SignInViewModel> = React.memo(() => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [signInValue, setSignInValue] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  // eslint-disable-next-line no-undef
  const onChangeSignInValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInValue({
      ...signInValue,
      [name]: value,
    });
  };

  const isValidButton = () => {
    return signInValue.email.length > 0 && signInValue.password.length > 0;
  };

  const togglePassword = () => {
    setVisiblePassword((value) => !value);
  };

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <Container>
        <Title>우리의 두어가 되어주세요 :)</Title>
        <SignInForm onSubmit={signIn}>
          <Label htmlFor="email">
            <span>이메일</span>
            <div>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="이메일을 입력해 주세요"
                value={signInValue.email}
                onChange={onChangeSignInValue}
              />
              <div className="animate_div" />
              <ErrorText>test</ErrorText>
            </div>
          </Label>

          <Label htmlFor="password">
            <span>비밀번호</span>
            <div>
              <input
                id="password"
                type={visiblePassword ? 'text' : 'password'}
                name="password"
                placeholder="비밀번호를 입력해 주세요"
                value={signInValue.password}
                onChange={onChangeSignInValue}
              />

              <EyeButton onClick={togglePassword}>
                <Image src={visiblePassword ? eye : blindEye} alt="visible password" />
              </EyeButton>
              <div className="animate_div" />
              <ErrorText>test</ErrorText>
            </div>
          </Label>

          <Button available={isValidButton()} width={504} padding="xSmall" color="white" background="blue">
            <Text>로그인</Text>
          </Button>
        </SignInForm>
        <Link href="/">
          <FindPasswordButton> 비밀번호를 잊어버렸나요? </FindPasswordButton>
        </Link>

        <br />

        <Title>DOOOER가 처음이신가요?</Title>
        <Link href="/signUp">
          <Button width={504} padding="xSmall" color="white" background="blue">
            <Text>회원 가입</Text>
          </Button>
        </Link>
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

const ErrorText = styled.p`
  padding-top: ${({ theme }) => theme.space.tiny};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  color: ${({ theme }) => theme.color.red};
`;
