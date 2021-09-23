import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Controller } from 'react-hook-form';

import { Main } from '~/domains/_layout/defaultLayout';
import Button from '~/shared/components/buttons/Button';
import { auth } from '~/shared/constants/messages';

import blindEye from '../../../images/icons/blind_eye.svg';
import eye from '../../../images/icons/eye.svg';
import { ErrorText, EyeButton, Label, MessageBox } from '../components';
import { FindPasswordViewModel } from './FindPassword.view.model';

const { password } = auth;

export const FindPasswordView: React.VFC<FindPasswordViewModel> = React.memo(
  ({
    control,
    errors,
    isValid,
    isVisibleConfirmPassword,
    isVisiblePassword,
    handleFindPasswordSubmit,
    toggleVisibleConfirmPassword,
    toggleVisiblePassword,
  }) => {
    return (
      <Main>
        <FindPasswordContainer>
          <FindPasswordForm onSubmit={handleFindPasswordSubmit}>
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

            <Button type="button" available={isValid} width={504} padding="xxSmall" color="white" background="blue0">
              <Text>변경하기</Text>
            </Button>
          </FindPasswordForm>
        </FindPasswordContainer>
      </Main>
    );
  },
);

const FindPasswordContainer = styled.section``;

const FindPasswordForm = styled.form`
  margin: ${({ theme }) => theme.space.large} 0;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;
