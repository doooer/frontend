import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import ARROW_ICON from '../../../images/icons/arrow.svg';

interface SubSectionPropsType {
  title: string;
}

const SubSection: React.FC<SubSectionPropsType> = ({ title, children }) => {
  return (
    <SubSectionWrapper>
      <Headline>
        <Title>{title}</Title>
        <ArrowIcon src={ARROW_ICON} />
      </Headline>
      <Article>{children}</Article>
    </SubSectionWrapper>
  );
};

export default SubSection;

const SubSectionWrapper = styled.section`
  width: 100%;
  height: fit-content;
`;

const Headline = styled.span`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  width: fit-content;
  font: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.fontSize.title};
`;

const ArrowIcon = styled(Image)`
  width: 14px;
  height: 26px;
`;

const Article = styled.article`
  width: 100%;
  height: fit-content;
`;
