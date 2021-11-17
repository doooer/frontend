import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { ThemeColorType, ThemeSpaceType } from '~/core/Theme';

interface DefaultButtonType {
  available?: boolean;
  width: number;
  padding: ThemeSpaceType;
  color: ThemeColorType;
  background: ThemeColorType;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
}

function Button({
  available,
  width,
  padding,
  color,
  background,
  onClick,
  type,
  children,
}: PropsWithChildren<DefaultButtonType>) {
  return (
    <StyledButton
      available={available}
      width={width}
      padding={padding}
      color={color}
      background={background}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<DefaultButtonType>`
  width: ${({ width }) => width}px;
  padding: ${({ theme, padding }) => theme.space[padding]};
  color: ${({ theme, color }) => theme.color[color]};
  border-radius: 6px;
  background-color: ${({ available, theme, background }) =>
    available === true ? theme.color[background] : theme.color.black20};

  &:hover {
    background-color: ${({ available, theme }) => (available === true ? theme.color.blue10 : theme.color.black20)};
  }
`;

StyledButton.defaultProps = {
  available: true,
};

export default Button;
