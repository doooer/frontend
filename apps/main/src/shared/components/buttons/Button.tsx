import styled from '@emotion/styled';
import React from 'react';

import { ThemeColorType, ThemeSpaceType } from '~/core/Theme';

// eslint-disable-next-line no-undef
interface DefaultButtonType extends React.HTMLProps<HTMLButtonElement> {
  available?: boolean;
  width: number;
  padding: ThemeSpaceType;
  color: ThemeColorType;
  background: ThemeColorType;
  onClick?: () => void;
}

const Button: React.FC<DefaultButtonType> = ({ available, width, padding, color, background, onClick, children }) => {
  return (
    <StyledButton
      available={available}
      width={width}
      padding={padding}
      color={color}
      background={background}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<DefaultButtonType>`
  width: ${({ width }) => width}px;
  padding: ${({ theme, padding }) => theme.space[padding]};
  color: ${({ theme, color }) => theme.color[color]};
  border-radius: 6px;
  background-color: ${({ available, theme, background }) =>
    available === true ? theme.color[background] : theme.color.black20};
`;

StyledButton.defaultProps = {
  available: true,
};

export default Button;
