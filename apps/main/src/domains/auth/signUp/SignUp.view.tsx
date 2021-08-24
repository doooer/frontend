import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import AuthLayout from '~/domains/_layout/authLayout/components/AuthLayout';
import Button from '~/shared/components/buttons/Button';
import ErrorMessages from '~/shared/ErrorMessages';

import blindEye from '../../../../public/images/icons/blind_eye.svg';
import eye from '../../../../public/images/icons/eye.svg';
import { Container, ErrorText, EyeButton, Label } from '../components';
import { SignUpViewModel } from './SignUp.view.model';

interface SignUpFormType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  personalInfoCheck: boolean;
  membersInfoCheck: boolean;
}

const { name, email, password, confirmPassword, notice } = ErrorMessages.AUTH_ERROR_MESSAGE;
const PASSWORD_REGEXP = /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

const signUpSchema = yup.object().shape({
  name: yup.string().min(1, name.wrongName).max(10, name.wrongName).required(name.default),
  email: yup.string().email(email.wrongAddress).required(email.default),
  password: yup.string().matches(PASSWORD_REGEXP, password.wrongCombination).required(password.default),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], confirmPassword.mismatch)
    .required(confirmPassword.default),
  personalInfoCheck: yup.bool().oneOf([true], notice.default).required(),
  membersInfoCheck: yup.bool().oneOf([true], notice.default).required(),
});

export const SignUpView: React.VFC<SignUpViewModel> = React.memo(() => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState<boolean>(false);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignUpFormType>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmitHandler = (formData: SignUpFormType) => {
    console.log(formData);
  };

  const togglePassword = () => {
    setVisiblePassword((value) => !value);
  };

  const toggleConfirmPassword = () => {
    setVisibleConfirmPassword((value) => !value);
  };

  return (
    <AuthLayout>
      <br />
      <br />
      <Container>
        <Link href="/signIn">
          <LinkButton> 로그인 하러가기 </LinkButton>
        </Link>
        <SignUpForm onSubmit={handleSubmit(onSubmitHandler)}>
          <Controller
            control={control}
            name="name"
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) => (
              <Label htmlFor="name">
                <span>사용자 이름</span>
                <div>
                  <input type="text" placeholder={name.default} value={value} onChange={onChange} onBlur={onBlur} />
                  <div className="animate_div" />
                  {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </div>
              </Label>
            )}
          />
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) => (
              <Label htmlFor="email">
                <span>이메일</span>
                <div>
                  <input type="text" placeholder={email.default} value={value} onChange={onChange} onBlur={onBlur} />
                  <div className="animate_div" />
                  {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </div>
              </Label>
            )}
          />
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) => (
              <Label htmlFor="password">
                <span>비밀번호</span>
                <div>
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
                  {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                </div>
              </Label>
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) => (
              <Label htmlFor="confirmPassword">
                <span>비밀번호 확인</span>
                <div>
                  <input
                    type={visibleConfirmPassword ? 'text' : 'password'}
                    placeholder={password.default}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />

                  <EyeButton onClick={toggleConfirmPassword}>
                    <Image src={visibleConfirmPassword ? eye : blindEye} alt="visible confirm-password" />
                  </EyeButton>
                  <div className="animate_div" />
                  {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
                </div>
              </Label>
            )}
          />

          <TermsWrapper>
            <Controller
              control={control}
              name="personalInfoCheck"
              defaultValue={false}
              render={({ field: { value, onChange, onBlur } }) => (
                <Terms htmlFor="personalInfoCheck">
                  <input type="checkbox" checked={value} onChange={onChange} onBlur={onBlur} />
                  <span>
                    <button type="button">개인정보처리방침</button>에 동의합니다.
                  </span>
                </Terms>
              )}
            />

            <Controller
              control={control}
              name="membersInfoCheck"
              defaultValue={false}
              render={({ field: { value, onChange, onBlur } }) => (
                <Terms htmlFor="membersInfoCheck">
                  <input type="checkbox" checked={value} onChange={onChange} onBlur={onBlur} />
                  <span>
                    <button type="button">회원약관</button>에 동의합니다.
                  </span>
                </Terms>
              )}
            />
          </TermsWrapper>
          <Button available={isValid} width={504} padding="xxSmall" color="white" background="blue">
            <Text>인증 메일 발송</Text>
          </Button>
          {(errors.personalInfoCheck || errors.membersInfoCheck) && (
            <ErrorText border={false}>{errors.membersInfoCheck!.message}</ErrorText>
          )}
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

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const TermsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.small};
`;

const Terms = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.small};

  input {
    margin: 0 ${({ theme }) => theme.space.tiny};
    width: 16px;
    height: 16px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.tiny};
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.black20};

    button {
      padding: 0 0 2px 0;
      width: fit-content;
      background-color: transparent;
      color: ${({ theme }) => theme.color.blue};
      font-size: ${({ theme }) => theme.fontSize.tiny};
    }
  }
`;
