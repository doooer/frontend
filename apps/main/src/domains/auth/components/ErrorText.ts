import styled from '@emotion/styled';

const ErrorText = styled.p`
  width: calc(86% + 1px);
  max-width: 442px;
  border-top: 2px solid ${({ theme }) => theme.color.red};
  padding-top: ${({ theme }) => theme.space.tiny};
  margin: -2px 0 0 -1px;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  color: ${({ theme }) => theme.color.red};
  position: relative;
`;

export default ErrorText;
