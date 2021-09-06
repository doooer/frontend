import styled from '@emotion/styled';
import React from 'react';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <AuthPageContainer>
      <NoticeImageSection>
        <img src="#" alt="Doooer Notice" />
      </NoticeImageSection>
      <AuthSection>
        <AuthTemplateBox>{children}</AuthTemplateBox>
      </AuthSection>
    </AuthPageContainer>
  );
};

const AuthPageContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 800px;
  max-height: 1080px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 45% auto;
`;

const NoticeImageSection = styled.section`
  grid-column-start: 1;
  height: 100vh;
  margin-top: -${({ theme }) => theme.space.xLarge};
  background-color: ${({ theme }) => theme.color.shadow10};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthSection = styled.section`
  grid-column-start: 2;

  display: grid;
  grid-template-columns: auto 506px auto;
`;

const AuthTemplateBox = styled.div`
  grid-column-start: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AuthLayout;
