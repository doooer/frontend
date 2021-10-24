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

const AuthPageContainer = styled.main`
  position: relative;
  top: 80px;
  left: 0;
  right: 0;
  min-width: fit-content;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 45% auto;
`;

const NoticeImageSection = styled.section`
  grid-column-start: 1;
  height: calc(100vh - 80px);
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
