import styled from '@emotion/styled';
import React from 'react';

function MypageHeader() {
  return (
    <MypageHeaderContainer>
      <p> </p>
    </MypageHeaderContainer>
  );
}

export default MypageHeader;

const MypageHeaderContainer = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.space.xLarge};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 1px 2px ${({ theme }) => theme.color.shadow10};
  font-family: ${({ theme }) => theme.font.regular};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9998;
`;
