import styled from '@emotion/styled';

const ErrorText = styled.p`
  width: 86%;
  max-width: 442px;
  border-top: 2px solid ${({ theme }) => theme.color.red};
  padding-top: ${({ theme }) => theme.space.tiny};
  margin-top: -2px;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  color: ${({ theme }) => theme.color.red};
  position: relative;
`;

export default ErrorText;
