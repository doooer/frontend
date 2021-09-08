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
import { MembersInfo, PersonalInfo } from '../components/modals';
import { Container, ErrorText, EyeButton, Label, MessageBox } from '../components/styles';
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
  personalInfoCheck: yup.bool().oneOf([true], notice.default).required(notice.default),
  membersInfoCheck: yup.bool().oneOf([true], notice.default).required(notice.default),
});

export const SignUpView: React.VFC<SignUpViewModel> = React.memo(() => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState<boolean>(false);
  const [togglePersonalInfoModal, setTogglePersonalInfoModal] = useState<boolean>(false);
  const [toggleMembersInfoModal, setToggleMembersInfoModal] = useState<boolean>(false);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignUpFormType>({
    resolver: yupResolver(signUpSchema),
    mode: 'all',
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

  const openPersonalInfo = () => {
    if (toggleMembersInfoModal) setToggleMembersInfoModal(false);

    setTogglePersonalInfoModal((value) => !value);
  };

  const openMembersInfo = () => {
    if (togglePersonalInfoModal) setTogglePersonalInfoModal(false);

    setToggleMembersInfoModal((value) => !value);
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
                <div className="input_container">
                  <input type="text" placeholder={name.default} value={value} onChange={onChange} onBlur={onBlur} />
                  <div className="animate_div" />
                  <MessageBox>{errors.name && <ErrorText>{errors.name.message}</ErrorText>}</MessageBox>
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
                <div className="input_container">
                  <input type="text" placeholder={email.default} value={value} onChange={onChange} onBlur={onBlur} />
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
            render={({ field: { value, onChange, onBlur } }) => (
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
          <Controller
            control={control}
            name="confirmPassword"
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) => (
              <Label htmlFor="confirmPassword">
                <span>비밀번호 확인</span>
                <div className="input_container">
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
              defaultValue={false}
              render={({ field: { value, onChange, onBlur } }) => (
                <Terms htmlFor="personalInfoCheck">
                  <input type="checkbox" checked={value} onChange={onChange} onBlur={onBlur} />
                  <span>
                    <button type="button" onClick={openPersonalInfo}>
                      개인정보처리방침
                    </button>
                    에 동의합니다.
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
                    <button type="button" onClick={openMembersInfo}>
                      회원약관
                    </button>
                    에 동의합니다.
                  </span>
                </Terms>
              )}
            />
          </TermsWrapper>
          <Button available={isValid} width={504} padding="xxSmall" color="white" background="blue">
            <Text>인증 메일 발송</Text>
          </Button>
          <MessageBox>
            {(errors.personalInfoCheck || errors.membersInfoCheck) && (
              <ErrorText border={false}>{errors.membersInfoCheck!.message}</ErrorText>
            )}
          </MessageBox>
        </SignUpForm>

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
        <Button available={false} width={180} padding="xxxSmall" color="white" background="blue">
          <Text>인증 번호 확인</Text>
        </Button>
      </Container>

      {togglePersonalInfoModal && <PersonalInfo onClick={openPersonalInfo} />}
      {toggleMembersInfoModal && <MembersInfo onClick={openMembersInfo} />}
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
