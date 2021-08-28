import styled from '@emotion/styled';
import React from 'react';

interface LabelPropsType {
  htmlFor: string;
  width?: number;
}

const Label: React.FC<LabelPropsType> = ({ htmlFor, width, children }) => {
  return (
    <LabelContainer width={width} htmlFor={htmlFor}>
      {children}
    </LabelContainer>
  );
};

const LabelContainer = styled.label<LabelPropsType>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.space.large};

  span {
    font-size: ${({ theme }) => theme.fontSize.large};
    margin-bottom: ${({ theme }) => theme.space.xxSmall};
  }

  .input_container {
    width: 100%;

    .animate_div {
      margin: -1px;
      padding: 0;
      position: relative;
      width: 0px;
      height: 2px;
      left: ${(props) => props.width! / 2}%;
      background-color: ${({ theme }) => theme.color.blue};
      transition: 0.3s ease all;
      visibility: hidden;
    }

    input {
      width: ${(props) => props.width}%;
      max-width: 442px;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.black20};
      padding: ${({ theme }) => theme.space.tiny} 0;
      font-size: ${({ theme }) => theme.fontSize.small};

      &:focus {
        outline: none;

        ~ .animate_div {
          width: calc(${(props) => props.width}% + 1px);
          max-width: 442px;
          left: 0;
          visibility: visible;
        }

        &::placeholder {
          color: transparent;
        }
      }
    }
    span {
      width: fit-content;
      margin-left: ${({ theme }) => theme.space.xxxSmall};
      color: ${({ theme }) => theme.color.black20};
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;

Label.defaultProps = {
  width: 86,
};

export default Label;
