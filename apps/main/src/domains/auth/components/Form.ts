import styled from '@emotion/styled';

const Form = styled.form`
  margin: ${({ theme }) => theme.space.large} 0 ${({ theme }) => theme.space.small} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.large};
`;

export default Form;
