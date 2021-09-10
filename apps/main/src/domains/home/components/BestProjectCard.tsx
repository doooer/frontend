import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import ForwardLink from '../../../shared/components/ForwardLink';

interface BestProjectCardPropsType {
  projectPagePath: string;
  projectImagePath: string;
  userImagePath: string;
  title: string;
  userName: string;
}

function BestProjectCard({
  projectPagePath,
  projectImagePath,
  title,
  userName,
  userImagePath,
}: BestProjectCardPropsType) {
  return (
    <ForwardLink href={projectPagePath}>
      <CardWrapper>
        <ProjectImage width={280} height={260} src={projectImagePath} />

        <ProjectTitle>{title}</ProjectTitle>

        <UserInformation>
          <UserImage width={24} height={24} src={userImagePath} />
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
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xxSmall};
`;

const ProjectImage = styled(Image)`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.black20};
`;

const ProjectTitle = styled.h4``;

const UserInformation = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
`;

const UserImage = styled(Image)`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.black20};
`;

export default React.memo(BestProjectCard);
