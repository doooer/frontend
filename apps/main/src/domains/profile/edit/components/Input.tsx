import styled from '@emotion/styled';
import React from 'react';

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
  return (
    <Container isEmpty={value.length === 0} width={width}>
      <TextInput
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type="text"
        style={inputStyle}
        maxLength={maxLength}
      />
      {maxLength && <InputLength>{`${value.length}/${maxLength}`}</InputLength>}
    </Container>
  );
};

const Container = styled.div<{ isEmpty: boolean; width: number }>`
  width: ${(props) => `${props.width}px`};
  padding-bottom: ${(props) => props.theme.space.tiny};
  border-bottom: ${({ isEmpty, theme: { color } }) => `1px solid ${!isEmpty ? color.blue0 : color.black0}`};
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
