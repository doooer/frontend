import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Controller } from 'react-hook-form';

import AuthLayout from '~/domains/_layout/AuthLayout/AuthPage';
import Button from '~/shared/components/buttons/Button';
import ForwardLink from '~/shared/components/ForwardLink';
import { auth } from '~/shared/constants/messages';

import blindEye from '../../../images/icons/blind_eye.svg';
import eye from '../../../images/icons/eye.svg';
import { AuthContainer, ErrorText, EyeButton, Form, Label, MessageBox, Text } from '../components';
import { SignUpViewModel } from './SignUp.view.model';

const { name, email, password } = auth;

export const SignUpView: React.VFC<SignUpViewModel> = React.memo(
  ({
    control,
    errors,
    isValid,
    isVisibleConfirmPassword,
    isVisiblePassword,
    handleSignUpSubmit,
    toggleVisibleConfirmPassword,
    toggleVisiblePassword,
  }) => {
    return (
      <AuthLayout>
        <br />
        <br />
        <AuthContainer>
          <SignInLinkWrapper>
            <ForwardLink href="/signIn">
              <LinkButton type="button"> 로그인 하러가기 </LinkButton>
            </ForwardLink>
          </SignInLinkWrapper>

          <Form onSubmit={handleSignUpSubmit}>
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange, onBlur } }) => (
                <Label htmlFor="name">
                  <span>사용자 이름</span>
                  <div className="input_container">
                    <input
                      type="text"
                      placeholder={name.error.required}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    <div className="animate_div" />
                    <MessageBox>{errors.name && <ErrorText>{errors.name.message}</ErrorText>}</MessageBox>
                  </div>
                </Label>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange, onBlur } }) => (
                <Label htmlFor="email">
                  <span>이메일</span>
                  <div className="input_container">
                    <input
                      type="text"
                      placeholder={email.error.required}
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
              render={({ field: { value, onChange, onBlur } }) => (
                <Label htmlFor="password">
                  <span>비밀번호</span>
                  <div className="input_container">
                    <input
                      type={isVisiblePassword ? 'text' : 'password'}
                      placeholder={password.error.required}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />

                    <EyeButton type="button" onClick={toggleVisiblePassword}>
                      <Image src={isVisibleConfirmPassword ? eye : blindEye} alt="visible password" />
                    </EyeButton>
                    <div className="animate_div" />
                    <MessageBox>{errors.password && <ErrorText>{errors.password.message}</ErrorText>}</MessageBox>
                  </div>
                </Label>
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { value, onChange, onBlur } }) => (
                <Label htmlFor="confirmPassword">
                  <span>비밀번호 확인</span>
                  <div className="input_container">
                    <input
                      type={isVisibleConfirmPassword ? 'text' : 'password'}
                      placeholder={password.error.required}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />

                    <EyeButton type="button" onClick={toggleVisibleConfirmPassword}>
                      <Image src={isVisibleConfirmPassword ? eye : blindEye} alt="visible confirm-password" />
                    </EyeButton>
                    <div className="animate_div" />
                    <MessageBox>
                      {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
                    </MessageBox>
                  </div>
                </Label>
              )}
            />

            <TermsWrapper>
              <Controller
                control={control}
                name="personalInfoCheck"
                render={({ field: { value, onChange, onBlur } }) => (
                  <Terms htmlFor="personalInfoCheck">
                    <input type="checkbox" checked={value} onChange={onChange} onBlur={onBlur} />
                    <span>
                      <Link href="/personalInfoTerms">
                        <a target="_blank">개인정보처리방침</a>
                      </Link>
                      에 동의합니다.
                    </span>
                  </Terms>
                )}
              />

              <Controller
                control={control}
                name="membersInfoCheck"
                render={({ field: { value, onChange, onBlur } }) => (
                  <Terms htmlFor="membersInfoCheck">
                    <input type="checkbox" checked={value} onChange={onChange} onBlur={onBlur} />
                    <span>
                      <Link href="/memberTerms">
                        <a target="_blank">회원약관</a>
                      </Link>
                      에 동의합니다.
                    </span>
                  </Terms>
                )}
              />
            </TermsWrapper>
            <SendMailButtonWrapper>
              <Button type="button" available={isValid} width={504} padding="xxSmall" color="white" background="blue0">
                <Text fontSize="small">인증 메일 발송</Text>
              </Button>
              <MessageBox>
                {(errors.personalInfoCheck || errors.membersInfoCheck) && (
                  <ErrorText border={false}>{errors.membersInfoCheck!.message}</ErrorText>
                )}
              </MessageBox>
            </SendMailButtonWrapper>

            <Label htmlFor="certification" width={60}>
              <span>인증코드를 입력하세요.</span>
              <div className="input_container">
                <input type="text" placeholder="회원가입을 위한 인증 메일을발송했습니다." />
                <span>남은시간</span>
                <div className="animate_div" />
                <MessageBox>
                  <ErrorText width={60}>에러메세지 임마</ErrorText>
                </MessageBox>
              </div>
            </Label>
            <Button type="button" available={false} width={180} padding="xxxSmall" color="white" background="blue0">
              <Text fontSize="small">인증 번호 확인</Text>
            </Button>

            <Button width={504} padding="xSmall" color="white" background="blue0" type="submit">
              <Text fontSize="large">회원 가입</Text>
            </Button>
          </Form>
        </AuthContainer>
      </AuthLayout>
    );
  },
);

const SignInLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LinkButton = styled.button`
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.blue0};
  margin-right: ${({ theme }) => theme.space.xxxSmall};
`;

const TermsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.small};
`;

const SendMailButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xTiny};
`;

const Terms = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.medium};

  input {
    margin: 0 ${({ theme }) => theme.space.tiny} 0 ${({ theme }) => theme.space.xTiny};
    width: 16px;
    height: 16px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.tiny};
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.black20};

    a {
      width: fit-content;
      background-color: transparent;
      color: ${({ theme }) => theme.color.blue0};
      font-size: ${({ theme }) => theme.fontSize.tiny};
    }
  }
`;
