import styled from '@emotion/styled';
import React from 'react';

interface Props {
  options: Array<{ key: string; value: string; text: string }>;
}

const SelectBox: React.FC<Props> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map(({ key, text, value }) => (
          <option key={key} value={value}>
            {text}
          </option>
        ))}
      </select>
    </Container>
  );
};

const Container = styled.div``;

export default SelectBox;
