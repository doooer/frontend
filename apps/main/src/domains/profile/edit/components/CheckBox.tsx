import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

import Text from '~/shared/components/Text';

interface Props {
  selected?: boolean;
  text: string;
  buttonStyle?: CSSProperties;
  textStyle?: CSSProperties;
  id: string;
  onSelect: (id: string) => void;
}

const CheckBox: React.FC<Props> = ({ selected = false, text, buttonStyle, textStyle, onSelect, id }) => (
  <Container selected={selected} style={buttonStyle} onClick={() => onSelect(id)}>
    <Text
      textColor="white"
      fontSize="large"
      font="medium"
      style={{
        ...textStyle,
      }}
    >
      {text}
    </Text>
  </Container>
);

const Container = styled.button<{ selected: boolean }>`
  padding: ${({ theme: { space } }) => `${space.xxxSmall} ${space.large}`};
  background-color: ${({ selected, theme: { color } }) => (selected ? color.blue0 : color.black20)};
  width: fit-content;
  /* height: fit-content; */
  height: 48px;
  border-radius: 6px;
`;

export default React.memo(CheckBox);
