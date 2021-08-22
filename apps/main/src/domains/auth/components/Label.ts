import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.space.large};

  span {
    font-size: ${({ theme }) => theme.fontSize.large};
    margin-bottom: ${({ theme }) => theme.space.xxSmall};
  }

  div {
    .animate_div {
      margin: -1px;
      padding: 0;
      position: relative;
      width: 0px;
      height: 2px;
      left: 43%;
      background-color: ${({ theme }) => theme.color.blue};
      transition: 0.3s ease all;
      visibility: hidden;
    }

    input {
      width: 86%;
      max-width: 442px;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.black20};
      padding: ${({ theme }) => theme.space.tiny} 0;
      font-size: ${({ theme }) => theme.fontSize.small};

      &:focus {
        outline: none;

        ~ .animate_div {
          width: 86%;
          max-width: 442px;
          left: 0;
          visibility: visible;
        }

        &::placeholder {
          color: transparent;
        }
      }
    }
  }
`;

export default Label;
