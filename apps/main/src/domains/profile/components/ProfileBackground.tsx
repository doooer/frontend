import styled from '@emotion/styled';
import React from 'react';

function ProfileBackground() {
  return <ProfileBackgroundContainer>test</ProfileBackgroundContainer>;
}

const ProfileBackgroundContainer = styled.section`
  width: 100%;
  height: 320px;
  background-color: ${({ theme }) => theme.color.overlay10};
`;

export default ProfileBackground;
