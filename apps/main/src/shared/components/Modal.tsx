import styled from '@emotion/styled';
import React, { useState } from 'react';

import { ThemeSpaceType } from '~/core/Theme';

import useConfirm from '../hooks/useConfirm';

interface ModalStyleType {
  width: number;
  height: number;
  padding?: ThemeSpaceType;
}

interface ModalPropsType {
  title?: string;
  isOpen: boolean;
  cancelMessage?: string; // "데이터가 삭제됩니다", "취소 하시겠습니까?" 등  x 버튼 클릭시 보여지는 안내 문구
}

const Modal: React.FC<ModalPropsType & ModalStyleType> = ({
  width,
  height,
  padding = 'xLarge',
  title,
  isOpen,
  cancelMessage,
  children,
}) => {
  const [toggleModal, setToggleModal] = useState<boolean>(isOpen);
  const onClickCancelButton = useConfirm(cancelMessage, () => setToggleModal(false));

  return toggleModal ? (
    <Dialog width={width} height={height} padding={padding}>
      <DialogHeader padding={padding}>
        <h2>{title}</h2>
        <button type="button" onClick={cancelMessage ? onClickCancelButton : () => setToggleModal(false)}>
          ✕
        </button>
      </DialogHeader>
      <section>{children}</section>
    </Dialog>
  ) : null;
};

const Dialog = styled.dialog<ModalStyleType>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 30px 3px ${({ theme }) => theme.color.shadow10};
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;

  section {
    width: 100%;
    height: calc(100% - 96px);
    position: absolute;
    top: 96px;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0 ${({ theme, padding }) => padding && theme.space[padding]};
    overflow-y: scroll;
  }
`;

const DialogHeader = styled.header<{ padding?: ThemeSpaceType }>`
  width: 100%;
  height: 96px;
  background-color: ${({ theme }) => theme.color.blue0};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  h2 {
    position: absolute;
    top: ${({ theme }) => theme.space.medium};
    left: ${({ theme, padding }) => padding && theme.space[padding]};
    font-size: ${({ theme }) => theme.fontSize.large};
    font: ${({ theme }) => theme.font.regular};
    font-weight: 400;
    padding-top: ${({ theme }) => theme.space.tiny};
    color: ${({ theme }) => theme.color.white};
  }

  button {
    background-color: transparent;
    position: absolute;
    top: ${({ theme }) => theme.space.medium};
    right: ${({ theme }) => theme.space.large};
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    color: ${({ theme }) => theme.color.white};

    &:hover {
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0px) scale(0.98);
    }
  }
`;

export default Modal;
