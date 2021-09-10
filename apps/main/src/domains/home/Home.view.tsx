import styled from '@emotion/styled';
import React from 'react';

import { Main, Section } from '../_layout/defaultLayout';
import Banner from './components/Banner';
import BestProjectCard from './components/BestProjectCard';
import SubSection from './components/SubSection';
import { HomeViewModel } from './Home.view.model';

const dummyDataOfBestProgects = [
  { id: 1, projectPagePath: '/#', projectImagePath: '/', userImagePath: '/', title: 'Card1', userName: 'King Jee won' },
  { id: 2, projectPagePath: '/#', projectImagePath: '/', userImagePath: '/', title: 'Card2', userName: 'test' },
  { id: 3, projectPagePath: '/#', projectImagePath: '/', userImagePath: '/', title: 'Card3', userName: 'Test' },
  { id: 4, projectPagePath: '/#', projectImagePath: '/', userImagePath: '/', title: 'Card4', userName: 'TEST' },
];

export const HomeView: React.VFC<HomeViewModel> = React.memo(() => {
  return (
    <Main>
      <Banner />

      <HomeContentsWrapper>
        <SubSection title="이번주 베스트 프로젝트" path="/#">
          {dummyDataOfBestProgects.map((card) => (
            <BestProjectCard key={card.id} {...card} />
          ))}
        </SubSection>

        <SubSection title="title2" path="/#">
          <p>children</p>
        </SubSection>
      </HomeContentsWrapper>
    </Main>
  );
});

const HomeContentsWrapper = styled(Section)`
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xLarge};
  margin: ${({ theme }) => theme.space.xLarge};
`;
