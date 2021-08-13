import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

  const handelMenuColor = (path: string) => {
    setMenuState(
      menuState.map((menu) =>
        menu.path.substring(0, menu.path.length) === path.substring(0, menu.path.length)
          ? { ...menu, selected: true }
          : { ...menu, selected: false },
      ),
    );
  };

  useEffect(() => {
    handelMenuColor(pathName);
  }, [pathName]);

  // test function for login/register
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
          <Logo src="/images/buttons/home.svg" alt="home button" />
        </Link>

        <Navigation>
          <MenuList>
            {menuState.map((menu) => (
              <Menu onClick={() => handelMenuColor(menu.path)} isSelected={menu.selected} key={menu.name}>
                <Link href={menu.path}>{menu.name}</Link>
              </Menu>
            ))}
          </MenuList>

          {userState ? (
            <>
              <Link href="/alert">
                <AlertIcon alt="alert button" />
              </Link>
              <UserIcon onClick={testUserStatus} alt="my page button" />
            </>
          ) : (
            <AuthButton onClick={testUserStatus}>
              <Link href="/">로그인/회원가입</Link>
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
  box-shadow: 0 1px 4px ${({ theme }) => theme.color.shadow};

  display: grid;
  grid-template-columns: 176px auto 176px;
  font-family: ${({ theme }) => theme.font.regular};
`;

const ContentsBox = styled.div`
  grid-column-start: 2;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 176px;
  height: 60px;
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

const AlertIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  content: url('/images/buttons/unselected_bell.svg');
  margin-bottom: ${({ theme }) => theme.space.xTiny};

  &:hover {
    content: url('/images/buttons/selected_bell.svg');
  }
`;

const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.space.xSmall};
  content: url('/images/buttons/test_image_user.png');
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
