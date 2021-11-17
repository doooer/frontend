import styled from '@emotion/styled';
import React from 'react';

interface Props {
  value: string;
  maxLength: number;
  placeholder: string;
}

const TextArea: React.FC<Props> = ({ value, maxLength, placeholder }) => {
  return (
    <Container>
      <StyledTextArea maxLength={maxLength} placeholder={placeholder}>
        {value}
      </StyledTextArea>
      <Status>{`${value.length}/${maxLength}`}</Status>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 1038px;
  height: 140px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;

  resize: none;
  padding: ${({ theme: { space } }) => `${space.xSmall} ${space.small} ${space.large} ${space.small}`};
  color: ${(props) => props.theme.color.black0};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-family: ${(props) => props.theme.font.regular};
  font-weight: 400;
  border-radius: 6px;
  border: ${(props) => `1px solid ${props.theme.color.black20}`};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${(props) => props.theme.color.black20};
    font-size: ${(props) => props.theme.fontSize.medium};
    font-family: ${(props) => props.theme.font.regular};
    font-weight: 400;
  }
`;

const Status = styled.p`
  position: absolute;
  bottom: 14px;
  right: 20px;
  color: ${(props) => props.theme.color.black20};
  font-size: ${(props) => props.theme.fontSize.xSmall};
  font-family: ${(props) => props.theme.font.regular};
  font-weight: 400;
`;

export default TextArea;
