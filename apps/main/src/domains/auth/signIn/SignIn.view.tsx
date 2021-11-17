import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Controller } from 'react-hook-form';

import AuthLayout from '~/domains/_layout/AuthLayout/AuthPage';
import Button from '~/shared/components/buttons/Button';
import ForwardLink from '~/shared/components/ForwardLink';
import { auth } from '~/shared/constants/messages';

import blindEye from '~/shared/assets/images/icons/blind_eye.svg';
import eye from '~/shared/assets/images/icons/eye.svg';
import { AuthContainer, ErrorText, EyeButton, Form, Label, MessageBox, Text, Title } from '../components';
import { SignInViewModel } from './SignIn.view.model';

export const SignInView: React.VFC<SignInViewModel> = React.memo(
  ({ control, errors, isVisiblePassword, signInMutation, toggleVisiblePassword, handleSignInSubmit }) => {
    return (
      <AuthLayout>
        <AuthContainer>
          <Title>우리의 두어가 되어주세요 :)</Title>
          <Form onSubmit={handleSignInSubmit}>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange, onBlur } }) => (
                <Label htmlFor="email">
                  <span>이메일</span>
                  <div className="input_container">
                    <input
                      type="text"
                      placeholder={auth.password.placeholder}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    <div className="animate_div" />
                    <MessageBox>{errors.email && <ErrorText>{errors.email.message}</ErrorText>}</MessageBox>
                  </div>
                </Label>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onBlur, onChange, value } }) => (
                <Label htmlFor="password">
                  <span>비밀번호</span>
                  <div className="input_container">
                    <input
                      type={isVisiblePassword ? 'text' : 'password'}
                      placeholder={auth.password.placeholder}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />

                    <EyeButton type="button" onClick={toggleVisiblePassword}>
                      <Image src={isVisiblePassword ? eye : blindEye} alt="visible password" />
                    </EyeButton>
                    <div className="animate_div" />
                    <MessageBox>{errors.password && <ErrorText>{errors.password.message}</ErrorText>}</MessageBox>
                  </div>
                </Label>
              )}
            />

            <Button width={504} padding="xSmall" color="white" background="blue0" type="submit">
              <Text fontSize="large">로그인</Text>
            </Button>
          </Form>
          <ForwardLink href="/">
            <FindPasswordButton type="button"> 비밀번호를 잊어버렸나요? </FindPasswordButton>
          </ForwardLink>

          <br />

          <Title>DOOOER가 처음이신가요?</Title>
          <ForwardLink href="/signUp">
            <Button width={504} padding="xSmall" color="white" background="blue0" type="button">
              <Text fontSize="large">회원 가입</Text>
            </Button>
          </ForwardLink>
        </AuthContainer>
      </AuthLayout>
    );
  },
);

const FindPasswordButton = styled.button`
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.black20};
`;
