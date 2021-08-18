import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

import AuthLayout from '~/domains/_layout/authLayout/components/AuthLayout';

import { SignInViewModel } from './SignIn.view.model';

export const SignInView: React.VFC<SignInViewModel> = React.memo(() => {
  const signIn = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <Container>
        <Title>우리의 두어가 되어주세요 :)</Title>
        <SignInForm>
          <label htmlFor="email">
            <span>이메일</span>
            <input type="email" name="email" placeholder="이메일을 입력해 주세요" />
          </label>
          <label htmlFor="password">
            <span>비밀번호</span>
            <input type="password" name="password" placeholder="비밀번호를 입력해 주세요" />
          </label>
          <Button onClick={signIn}>로그인</Button>
        </SignInForm>
        <Link href="/">
          <FindPasswordButton> 비밀번호를 잊어버렸나요? </FindPasswordButton>
        </Link>

        <Title>DOOOER가 처음이신가요?</Title>
        <Link href="/">
          <Button>회원 가입</Button>
        </Link>
      </Container>
    </AuthLayout>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: ${({ theme }) => theme.space.small};
`;

const Title = styled.h1`
  margin: ${({ theme }) => theme.space.large} 0;
  padding: ${({ theme }) => theme.space.small} 0 ${({ theme }) => theme.space.xxxSmall} 0;
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.black0};
`;

const SignInForm = styled.form`
  margin: ${({ theme }) => theme.space.small} 0;

  label {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-bottom: ${({ theme }) => theme.space.large};

    span {
      margin-bottom: ${({ theme }) => theme.space.tiny};
    }

    input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.black20};
      padding: ${({ theme }) => theme.space.tiny} 0;
      font-size: ${({ theme }) => theme.fontSize.small};

      &:focus {
        outline: none;

        &::placeholder {
          color: transparent;
        }
      }
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 64px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.blue};
`;

const FindPasswordButton = styled.button`
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.black20};
`;
