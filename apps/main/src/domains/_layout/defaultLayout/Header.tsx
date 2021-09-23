import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import ForwardLink from '~/shared/components/ForwardLink';

import ALERT_ICON_BEFORE from '../../../images/buttons/bell.svg';
import HOME_LOGO from '../../../images/buttons/home.svg';
import USER_IMAGE from '../../../images/buttons/test_image_user.png';
import Section from './Section';

export default function Header() {
  const pathName = useRouter().pathname;
  const [menuState, setMenuState] = useState<
    {
      name: string;
      selected: boolean;
      path: string;
    }[]
  >([
    {
      name: '두어 프로젝트',
      selected: false,
      path: '/project',
    },
    {
      name: '팀 모집',
      selected: false,
      path: '/recruit',
    },
    {
      name: '팀 관리',
      selected: false,
      path: '/manage',
    },
  ]);

  const handelMenuColor = useCallback(
    (path: string) => {
      setMenuState(
        menuState.map((menu) =>
          menu.path.substring(0, menu.path.length) === path.substring(0, menu.path.length)
            ? { ...menu, selected: true }
            : { ...menu, selected: false },
        ),
      );
    },
    [menuState],
  );

  useEffect(() => {
    handelMenuColor(pathName);
  }, [pathName]);

  // test function for SignIn/register
  const [userState, setUserState] = useState<boolean>(true);
  const testUserStatus = () => {
    if (userState) {
      setUserState(false);
    } else {
      setUserState(true);
    }
  };

  return (
    <HeaderContainer>
      <Section>
        <ForwardLink href="/">
          <LogoImageWrapper>
            <Image width={176} height={60} src={HOME_LOGO} alt="home button" />
          </LogoImageWrapper>
        </ForwardLink>

        <Navigation>
          <MenuList>
            {menuState.map((menu) => {
              const { selected, name, path } = menu;

              return (
                <Menu isSelected={selected} key={name}>
                  <ForwardLink href={path}>{name}</ForwardLink>
                </Menu>
              );
            })}
          </MenuList>

          {userState ? (
            <>
              <ForwardLink href="/alert">
                <AlertIconImageWapper>
                  <Image width={50} height={50} src={ALERT_ICON_BEFORE} alt="alert button" className="alert_icon" />
                </AlertIconImageWapper>
              </ForwardLink>
              <UserIconImageWapper>
                <Image width={50} height={50} src={USER_IMAGE} onClick={testUserStatus} alt="my page button" />
              </UserIconImageWapper>
            </>
          ) : (
            <AuthButton type="button" onClick={testUserStatus}>
              <ForwardLink href="/signIn">로그인/회원가입</ForwardLink>
            </AuthButton>
          )}
        </Navigation>
      </Section>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px 4px ${({ theme }) => theme.color.shadow10};
  font-family: ${({ theme }) => theme.font.regular};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const LogoImageWrapper = styled.div`
  cursor: pointer;
  width: 176px;
  height: 60px;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.xSmall};
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
`;

const Menu = styled.li<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? props.theme.color.blue0 : props.theme.color.black20)};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0 ${({ theme }) => theme.space.xSmall};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.blue0};
  }
`;

const AlertIconImageWapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.space.xTiny};

  .alert_icon {
    filter: invert(73%) sepia(8%) saturate(18%) hue-rotate(315deg) brightness(92%) contrast(104%);

    &:hover {
      filter: invert(22%) sepia(93%) saturate(6835%) hue-rotate(246deg) brightness(89%) contrast(97%);
    }
  }
`;

const UserIconImageWapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.space.xSmall};
`;

const AuthButton = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.blue0};
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.xTiny};
  color: ${({ theme }) => theme.color.blue0};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.regular};
  text-align: center;
`;
