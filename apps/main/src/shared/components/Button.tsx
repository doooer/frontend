import styled from '@emotion/styled';
import React from 'react';

import Text from './Text';

interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  width: number;
}

const Button: React.FC<Props> = ({ text, onClick, disabled = false, width }) => (
  <StyledButton disabled={disabled} width={width} onClick={onClick}>
    <Text font="medium" fontSize="xLarge" textColor="white">
      {text}
    </Text>
  </StyledButton>
);

const StyledButton = styled.button<{ disabled: boolean; width: number }>`
  background: ${({ disabled, theme: { color } }) => (disabled ? color.black20 : color.blue0)};
  padding: ${(props) => `${props.theme.space.xxxSmall} 0px`};
  align-items: center;
  justify-content: center;
  width: ${(props) => `${props.width}px`};
  text-align: center;
  border-radius: 6px;
`;

export default React.memo(Button);
