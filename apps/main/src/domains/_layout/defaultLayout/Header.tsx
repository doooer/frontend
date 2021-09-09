import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import HOME_LOGO from '../../../images/buttons/home.svg';
// import ALERT_ICON_AFTER from '../../../images/buttons/selected_bell.svg';
import USER_IMAGE from '../../../images/buttons/test_image_user.png';
import ALERT_ICON_BEFORE from '../../../images/buttons/unselected_bell.svg';

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
      <ContentsBox>
        <Link href="/">
          <Logo src={HOME_LOGO} alt="home button" />
        </Link>

        <Navigation>
          <MenuList>
            {menuState.map((menu) => (
              <Menu isSelected={menu.selected} key={menu.name}>
                <Link href={menu.path}>{menu.name}</Link>
              </Menu>
            ))}
          </MenuList>

          {userState ? (
            <>
              <Link href="/alert">
                <AlertIcon
                  src={ALERT_ICON_BEFORE}
                  // onMouseOver={(e: any) => (e.currentTarget.src = `${ALERT_ICON_AFTER}`)}
                  alt="alert button"
                />
              </Link>
              <UserIcon src={USER_IMAGE} onClick={testUserStatus} alt="my page button" />
            </>
          ) : (
            <AuthButton onClick={testUserStatus}>
              <Link href="/signIn">로그인/회원가입</Link>
            </AuthButton>
          )}
        </Navigation>
      </ContentsBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.space.xLarge};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 1px 4px ${({ theme }) => theme.color.shadow10};

  display: grid;
  grid-template-columns: 176px auto 176px;
  font-family: ${({ theme }) => theme.font.regular};

  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const ContentsBox = styled.div`
  grid-column-start: 2;
  display: flex;
  align-items: center;
`;

const Logo = styled(Image)`
  width: 176px;
  height: 60px;
  cursor: pointer;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
`;

const Menu = styled.li<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? props.theme.color.blue : props.theme.color.black20)};
  font-family: ${(props) => (props.isSelected ? props.theme.font.bold : props.theme.font.regular)};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-right: ${({ theme }) => theme.space.large};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
    font-family: ${({ theme }) => theme.font.bold};
  }
`;

const AlertIcon = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.space.xTiny};
`;

const UserIcon = styled(Image)`
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
  border: 1px solid ${({ theme }) => theme.color.blue};
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.xTiny};

  a {
    color: ${({ theme }) => theme.color.blue};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-family: ${({ theme }) => theme.font.regular};
    text-align: center;
    margin-bottom: -2px;
  }
`;
