import styled from '@emotion/styled';
import React from 'react';

function Banner() {
  return (
    <BannerContainer>
      <p>banner</p>
    </BannerContainer>
  );
}

const BannerContainer = styled.section`
  width: 100%;
  height: 480px;
  background-color: ${({ theme }) => theme.color.overlay10};
`;

export default Banner;
