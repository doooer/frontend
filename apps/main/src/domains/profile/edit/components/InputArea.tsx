import styled from '@emotion/styled';
import React from 'react';

import Text from '~/shared/components/Text';

interface Props {
  label: string;
}

const InputArea: React.FC<Props> = ({ label, children }) => (
  <Container>
    <Text font="medium" fontSize="xLarge">
      {label}
    </Text>
    <Content>{children}</Content>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: ${(props) => props.theme.space.large};
  padding: ${({ theme: { space } }) => `${space.xSmall} 0px ${space.large} ${space.xSmall}`};
`;

const Content = styled.div`
  margin-top: ${(props) => props.theme.space.xSmall};
`;

export default InputArea;
