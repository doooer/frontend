import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import LIKE_BUTTON_FALSE from '../../../images/buttons/like_button_false.svg';
import LIKE_BUTTON_TRUE from '../../../images/buttons/like_button_true.svg';
import ForwardLink from '../../../shared/components/ForwardLink';

interface RecruitNewTeamCardPropsType {
  recruitPagePath: string;
  projectImagePath: string;
  keyword: string;
  teamImagePath: string;
  teamName: string;
  title: string;
  job: string;
  duty: string;
  location: string;
  date: string;
  like: boolean;
}

function RecruitNewTeamCard(props: RecruitNewTeamCardPropsType) {
  const {
    recruitPagePath,
    projectImagePath,
    teamImagePath,
    keyword,
    teamName,
    title,
    job,
    duty,
    location,
    date,
    like,
  } = props;

  return (
    <CardWrapper>
      <ForwardLink href={recruitPagePath}>
        <ProjectImage imagePath={projectImagePath}>
          <KeywordsWrapper>
            {keyword.split(' ').map((word) => (
              <Keyword key={word}>{word}</Keyword>
            ))}
          </KeywordsWrapper>
        </ProjectImage>
        <TeamImageWrapper>
          <TeamImage width={60} height={60} src={teamImagePath} alt="team logo" />
        </TeamImageWrapper>

        <RecruitInformaionWrapper>
          <TeamName>{teamName}</TeamName>
          <h4>{title}</h4>
          <h4>
            {job} &nbsp; | &nbsp; {duty}
          </h4>
        </RecruitInformaionWrapper>
      </ForwardLink>
      <hr />

      <SubInformationWrapper like={like}>
        <span>
          {location} &nbsp; | &nbsp; ~ &nbsp;{date.split('-').join(' ').slice(0, 10)}
        </span>
        {like ? (
          <LikeButtonTrue width={28} height={26} src={LIKE_BUTTON_TRUE} alt="un-like button" />
        ) : (
          <LikeButtonFalse width={28} height={26} src={LIKE_BUTTON_FALSE} alt="like button" />
        )}
      </SubInformationWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 380px;
  height: fit-content;
  margin: ${({ theme }) => theme.space.xxxSmall} 0;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.black20};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xxxSmall};

  a {
    width: 100%;
  }

  hr {
    margin: 0 auto;
    width: calc(100% - 40px);
    height: 1px;
    border: none;
    background-color: ${({ theme }) => theme.color.black20};
  }
`;

const ProjectImage = styled.div<{ imagePath: string }>`
  width: 378px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.black0};
  background-image: ${({ imagePath }) => imagePath};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const KeywordsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  gap: ${({ theme }) => theme.space.tiny};
`;

const Keyword = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.white};
  padding: 0 ${({ theme }) => theme.space.xxxSmall};
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 20px;
`;

const TeamImageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: -30px 0 0 ${({ theme }) => theme.space.xSmall};
`;

const TeamImage = styled(Image)`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.blue0};
`;

const RecruitInformaionWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xxxSmall};
  margin: ${({ theme }) => theme.space.xxxSmall} 0 0 ${({ theme }) => theme.space.xSmall};

  h4 {
    color: ${({ theme }) => theme.color.black0};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: normal;
    line-height: 1.15;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const TeamName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  color: ${({ theme }) => theme.color.black10};
  line-height: 1.1;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const SubInformationWrapper = styled.div<{ like: boolean }>`
  width: calc(100% - 40px);
  height: fit-content;
  color: ${({ theme }) => theme.color.black10};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  margin: 0 0 ${({ theme }) => theme.space.xSmall} ${({ theme }) => theme.space.xSmall};
  padding-right: ${({ theme }) => theme.space.tiny};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LikeButtonTrue = styled(Image)`
  cursor: pointer;
`;

const LikeButtonFalse = styled(Image)`
  cursor: pointer;
`;

export default React.memo(RecruitNewTeamCard);
