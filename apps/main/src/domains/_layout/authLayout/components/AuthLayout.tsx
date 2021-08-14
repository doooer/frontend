import styled from '@emotion/styled';
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
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
}

const AuthPageContainer = styled.div`
  width: 1600px;
  height: 800px;
  max-height: 1080px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 50% 50%;
`;

const NoticeImageSection = styled.section`
  grid-column-start: 1;
  background-color: ${({ theme }) => theme.color.shadow10};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthSection = styled.section`
  grid-column-start: 2;

  display: grid;
  grid-template-columns: ${({ theme }) => theme.space.xGrand} auto ${({ theme }) => theme.space.xGrand};
`;

const AuthTemplateBox = styled.div`
  grid-column-start: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
