import styled from '@emotion/styled';
import React, { useState } from 'react';

interface Props {
  width: number;
  placeholder: string;
  onBlur: () => void;
  onChange: (...event: any[]) => void;
  value: string;
  inputStyle?: React.CSSProperties;
  maxLength?: number;
}

const Input: React.FC<Props> = ({ width, placeholder, onBlur, onChange, value, inputStyle, maxLength }) => {
  const [focused, setFocused] = useState(false);

  const onFocusIn = () => {
    setFocused(true);
  };

  const onFocusOut = () => {
    onBlur();
    setFocused(false);
  };

  return (
    <Container focused={focused} width={width}>
      <TextInput
        onChange={onChange}
        onBlur={onFocusOut}
        placeholder={placeholder}
        value={value}
        onFocus={onFocusIn}
        type="text"
        style={inputStyle}
      />
      {maxLength && <InputLength>{`${value.length + 1}/${maxLength}`}</InputLength>}
    </Container>
  );
};

const Container = styled.div<{ focused: boolean; width: number }>`
  width: ${(props) => `${props.width}px`};
  padding-bottom: ${(props) => props.theme.space.tiny};
  border-bottom: ${({ focused, theme: { color } }) => `1px solid ${focused ? color.blue0 : color.black0}`};
  margin-top: ${(props) => props.theme.space.xSmall};
  display: flex;
  flex-direction: row;
`;

const TextInput = styled.input`
  border: none;
  flex: 1;
  padding: ${({ theme: { space } }) => `${space.xSmall} ${space.xSmall} 0px ${space.xSmall}`};
  font: ${(props) => props.theme.font.medium};
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.color.black0};
  :focus {
    outline: none;
  }
`;

const InputLength = styled.p`
  display: inline;
  font-size: ${(props) => props.theme.fontSize.xSmall};
  font: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme.color.black20};
  font-weight: 400;
  align-self: flex-end;
`;

export default Input;
