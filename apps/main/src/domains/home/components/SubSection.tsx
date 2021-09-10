import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import ForwardLink from '~/shared/components/ForwardLink';

import ARROW_ICON from '../../../images/icons/arrow.svg';

interface SubSectionPropsType {
  path: string;
  title: string;
}

const SubSection: React.FC<SubSectionPropsType> = ({ path, title, children }) => {
  return (
    <SubSectionWrapper>
      <ForwardLink href={path}>
        <Headline>
          <Title>{title}</Title>
          <ArrowIcon src={ARROW_ICON} />
        </Headline>
      </ForwardLink>

      <Article>{children}</Article>
    </SubSectionWrapper>
  );
};

export default SubSection;

const SubSectionWrapper = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.medium};
`;

const Headline = styled.span`
  margin-left: ${({ theme }) => theme.space.xxSmall};
  width: fit-content;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
