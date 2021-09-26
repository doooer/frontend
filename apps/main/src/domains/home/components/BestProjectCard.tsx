import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import ForwardLink from '~/shared/components/ForwardLink';

interface BestProjectCardPropsType {
  projectPagePath: string;
  projectImagePath: string;
  userImagePath: string;
  title: string;
  userName: string;
}

function BestProjectCard(props: BestProjectCardPropsType) {
  const { projectPagePath, projectImagePath, title, userName, userImagePath } = props;

  return (
    <ForwardLink href={projectPagePath}>
      <CardWrapper>
        <ProjectImage width={280} height={260} src={projectImagePath} alt="project preview" />

        <ProjectTitle>{title}</ProjectTitle>

        <UserInformation>
          <UserImage width={24} height={24} src={userImagePath} alt="user" />
          <span>{userName}</span>
        </UserInformation>
      </CardWrapper>
    </ForwardLink>
  );
}

const CardWrapper = styled.div`
  width: 280px;
  height: fit-content;
  margin: ${({ theme }) => theme.space.xxxSmall} 0;
  padding-bottom: ${({ theme }) => theme.space.xxxSmall};
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xxxSmall};
`;

const ProjectImage = styled(Image)`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.black20};
`;

const ProjectTitle = styled.h4`
  width: 100%;
  line-height: 1.15;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const UserInformation = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.space.tiny};

  span {
    width: calc(100% - 12px);
    line-height: 1.1;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const UserImage = styled(Image)`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.black20};
`;

export default React.memo(BestProjectCard);
