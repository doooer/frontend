import styled from '@emotion/styled';
import React from 'react';

import { Main, Section } from '../_layout/defaultLayout';
import Banner from './components/Banner';
import BestProjectCard from './components/BestProjectCard';
import RecruitNewTeamCard from './components/RecruitNewTeamCard';
import SubSection from './components/SubSection';
import { dummyDataOfBestProgects, dummyDataOfRecruitTeam } from './dummyData';
import { HomeViewModel } from './Home.view.model';

export const HomeView: React.VFC<HomeViewModel> = React.memo(() => {
  return (
    <Main>
      <Banner />

      <HomeContainer>
        <SubSection title="이번주 베스트 프로젝트" path="/#">
          {dummyDataOfBestProgects.map((card) => (
            <BestProjectCard key={card.id} {...card} />
          ))}
        </SubSection>

        <SubSection title="새로운 팀 모집" path="/#">
          {dummyDataOfRecruitTeam.map((card) => (
            <RecruitNewTeamCard key={card.id} {...card} />
          ))}
        </SubSection>
      </HomeContainer>
    </Main>
  );
});

const HomeContainer = styled(Section)`
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xLarge};
  margin: ${({ theme }) => theme.space.xLarge};
`;
