import styled from '@emotion/styled';

const EyeButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  position: relative;
  left: ${({ theme }) => theme.space.xSmall};
`;

export default EyeButton;
