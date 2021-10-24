import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import USER_IMAGE from '~/shared/assets/images/buttons/test_image_user.png';

function UserProfile() {
  return (
    <UserProfileAside>
      <UserImageWrapper>
        <Image width={100} height={100} src={USER_IMAGE} alt="profile" />
      </UserImageWrapper>
      <ProfileInformation>
        <UserIntroContainer>
          <h2>김두어김두어김두어김</h2>
          <UserStack>
            <h3>디자이너</h3>
            <span>일러스트레이터 BI/BX 영상/모션</span>
          </UserStack>
          <UserIntro>
            띄어쓰기 포함 200자 입니다. 안녕하세요. 디자이너 김두어 입니다. 안녕하세요. 디자이너 김두어 입니다.
            안녕하세요. 디자이너 김두어 입니다. 안녕하세요. 디자이너 김두어.!!!띄어쓰기 포함 200자 입니다. 안녕하세요.
            디자이너 김두어 입니다. 안녕하세요. 디자이너 김두어 입니다. 안녕하세요. 디자이너 김두어 입니다. 안녕하세요.
            디자이너 김두어.!!!
          </UserIntro>
        </UserIntroContainer>
      </ProfileInformation>
    </UserProfileAside>
  );
}

const UserProfileAside = styled.aside`
  position: absolute;
  left: 0;
  top: -100px;
  background-color: white;
  width: 320px;
  height: 1000px; // 임시
  border: 1px solid ${({ theme }) => theme.color.black20};
  border-radius: 6px 80px 0 0;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.space.small};
`;

const UserImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: 24px;
  border: 4px solid white;
  box-shadow: 0 2px 6px ${({ theme }) => theme.color.black20};
`;

const ProfileInformation = styled.article``;

const UserIntroContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.xxLarge};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.small};

  h2 {
    font-weight: 500;
    font: ${({ theme }) => theme.font.medium};
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  }
`;

const UserStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xxSmall};

  h3 {
    font-weight: 400;
    font: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.color.black10};
  }

  span {
    font-weight: 400;
    font: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.fontSize.xSmall};
    color: ${({ theme }) => theme.color.black20};
  }
`;

const UserIntro = styled.p`
  font-weight: 400;
  font: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.black10};
  line-height: 1.3;
`;
export default UserProfile;
