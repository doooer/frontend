import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import AuthLayout from '~/domains/_layout/authLayout/components/AuthLayout';
import Button from '~/shared/components/buttons/Button';

import blindEye from '../../../../public/images/icons/blind_eye.svg';
import eye from '../../../../public/images/icons/eye.svg';
import { Container, EyeButton, Label } from '../components';
import { SignUpViewModel } from './SignUp.view.model';

export const SignUpView: React.VFC<SignUpViewModel> = React.memo(() => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState<boolean>(false);
  const [signUpValue, setSignUpValue] = useState<{
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // eslint-disable-next-line no-undef
  const onChangeSignUpValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpValue({
      ...signUpValue,
      [name]: value,
    });
  };

  const isValidButton = () => {
    return signUpValue.email.length > 0 && signUpValue.password.length > 0 && signUpValue.confirmPassword.length > 0;
  };

  const togglePassword = () => {
    setVisiblePassword((value) => !value);
  };

  const toggleConfirmPassword = () => {
    setVisibleConfirmPassword((value) => !value);
  };

  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <br />
      <br />
      <Container>
        <Link href="/signIn">
          <LinkButton> 로그인 하러가기 </LinkButton>
        </Link>
        <SignUpForm onSubmit={signUp}>
          <Label htmlFor="userName">
            <span>사용자 이름</span>
            <div>
              <input
                id="userName"
                type="text"
                name="userName"
                placeholder="이름을 입력해 주세요"
                value={signUpValue.userName}
                onChange={onChangeSignUpValue}
              />
              <div className="animate_div" />
            </div>
          </Label>

          <Label htmlFor="email">
            <span>이메일</span>
            <div>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="이메일을 입력해 주세요"
                value={signUpValue.email}
                onChange={onChangeSignUpValue}
              />
              <div className="animate_div" />
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
                value={signUpValue.password}
                onChange={onChangeSignUpValue}
              />

              <EyeButton onClick={togglePassword}>
                <Image src={visiblePassword ? eye : blindEye} alt="visible password" />
              </EyeButton>
              <div className="animate_div" />
            </div>
          </Label>

          <Label htmlFor="confirmPassword">
            <span>비밀번호 확인</span>
            <div>
              <input
                id="confirmPassword"
                type={visibleConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="비밀번호를 입력해 주세요"
                value={signUpValue.confirmPassword}
                onChange={onChangeSignUpValue}
              />

              <EyeButton onClick={toggleConfirmPassword}>
                <Image src={visibleConfirmPassword ? eye : blindEye} alt="visible confirm-password" />
              </EyeButton>
              <div className="animate_div" />
            </div>
          </Label>

          <Button available={isValidButton()} width={504} padding="xxSmall" color="white" background="blue">
            인증 메일 발송
          </Button>
        </SignUpForm>
      </Container>
    </AuthLayout>
  );
});

const SignUpForm = styled.form`
  margin: ${({ theme }) => theme.space.large} 0;
`;

const LinkButton = styled.button`
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.blue};
  align-self: flex-end;
`;
