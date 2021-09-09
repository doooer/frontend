import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import USER_IMAGE from '../../../images/buttons/test_image_user.png';

function BestProjectCard() {
  return (
    <CardWrapper>
      <PreviewImage src={USER_IMAGE} />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 374px;
  height: 400px;

  background-color: ${({ theme }) => theme.color.white};
`;

const PreviewImage = styled(Image)`
  width: 100%;
  height: 374px;
`;

export default BestProjectCard;
