import styled from '@emotion/styled';
import React from 'react';

import AuthLayout from '~/domains/_layout/authLayout/components/AuthLayout';

import { SignInViewModel } from './SignIn.view.model';

export const SignInView: React.VFC<SignInViewModel> = React.memo(() => {
  return (
    <AuthLayout>
      <Container>
        <Title>우리의 두어가 되어주세요 :)</Title>
      </Container>
    </AuthLayout>
  );
});

const Container = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin-top: 140px;
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.color.black0};
`;
