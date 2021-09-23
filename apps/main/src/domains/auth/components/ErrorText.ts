import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ErrorText = styled.p<{ width?: number; border?: boolean }>`
  width: calc(${(props) => props.width}% + 1px);
  max-width: 442px;

  ${(props) =>
    props.border &&
    css`
      border-top: 2px solid ${props.theme.color.red};
    `};

  padding-top: ${({ theme }) => theme.space.tiny};
  margin: -2px 0 0 -1px;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  color: ${({ theme }) => theme.color.red};
  position: relative;
`;

ErrorText.defaultProps = {
  border: true,
  width: 86,
};

export default ErrorText;
