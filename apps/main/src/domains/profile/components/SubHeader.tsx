import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useEffect, useState } from 'react';

import ForwardLink from '~/shared/components/ForwardLink';

export default function SubHeader() {
  const pathName = useRouter().pathname;
  const [menuState, setMenuState] = useState<
    {
      name: string;
      selected: boolean;
      path: string;
    }[]
  >([
    {
      name: '나의 프로필',
      selected: false,
      path: '/profile',
    },
    {
      name: '프로필 수정',
      selected: false,
      path: '/profile/edit',
    },
    {
      name: '프로젝트 등록',
      selected: false,
      path: '/profile/project',
    },
    {
      name: '좋아요 리스트',
      selected: false,
      path: '/profile/likes',
    },
    {
      name: '설정',
      selected: false,
      path: '/profile/settings',
    },
  ]);

  const handelMenuColor = useCallback(
    (path: string) => {
      setMenuState(
        menuState.map((menu) => (pathName === menu.path ? { ...menu, selected: true } : { ...menu, selected: false })),
      );
    },
    [menuState],
  );

  useEffect(() => {
    handelMenuColor(pathName);
  }, [pathName]);

  return (
    <SubHeaderContainer>
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
      </Navigation>
    </SubHeaderContainer>
  );
}

const SubHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px 4px ${({ theme }) => theme.color.shadow10};
  font-family: ${({ theme }) => theme.font.regular};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
