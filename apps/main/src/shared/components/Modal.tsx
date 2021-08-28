import styled from '@emotion/styled';
import React from 'react';

import { ThemeSpaceType } from '~/core/Theme';

interface ModalPropsType {
  width: number;
  height: number;
  padding: ThemeSpaceType;
  onClick?: () => void;
}

const Modal: React.FC<ModalPropsType> = ({ width, height, padding, onClick, children }) => {
  return (
    <Dialog width={width} height={height} padding={padding}>
      <button type="button" onClick={onClick}>
        ✕
      </button>
      <article>{children}</article>
    </Dialog>
  );
};
export default Modal;

const Dialog = styled.dialog<ModalPropsType>`
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
  box-sizing: border-box;
  padding: ${({ theme, padding }) => theme.space[padding]};
  overflow-y: scroll;

  button {
    background-color: transparent;
    position: absolute;
    top: ${({ theme }) => theme.space.small};
    right: ${({ theme }) => theme.space.small};
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.black20};

    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  }
`;
