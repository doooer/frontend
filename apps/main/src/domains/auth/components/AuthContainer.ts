import styled from '@emotion/styled';

const AuthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: ${({ theme }) => theme.space.small};
  color: ${({ theme }) => theme.color.black0};
`;

export default AuthContainer;
