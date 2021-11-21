import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useState } from 'react';

import Icon from '~/shared/assets/images/icons/arrowDownGrey.svg';
import Text from '~/shared/components/Text';

interface Props {
  options: Array<{ id: string; value: string }>;
  placeholder: string;
  value: string | null;
  onSelect: (id: string) => void;
}

const SelectBox: React.FC<Props> = ({ options, value, placeholder, onSelect }) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive((prev) => !prev);
  };

  const onItemSelect = (id: string) => {
    onSelect(id);
    setActive(false);
  };

  return (
    <Wrapper>
      <Container onClick={onClick} isEmpty={!value}>
        <Inner>
          <Text font="medium" fontSize="large" textColor={!value ? 'black20' : 'blue0'}>
            {value ?? placeholder}
          </Text>
          <InnerIcon src={Icon} active={active} />
        </Inner>
      </Container>

      {active && (
        <OptionsContainer>
          {options.map(({ id, value: label }) => (
            <Opt key={id} onClick={() => onItemSelect(id)}>
              <Text textColor="black20" font="medium" fontSize="large">
                {label}
              </Text>
            </Opt>
          ))}
        </OptionsContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 240px;
`;

const Container = styled.button<{ isEmpty: boolean }>`
  position: relative;
  padding-bottom: ${(props) => props.theme.space.tiny};
  border-bottom: ${({ theme: { color }, isEmpty }) => `1px solid ${isEmpty ? color.black20 : color.blue0}`};
  background: none;
  min-width: 240px;
`;

const Inner = styled.div`
  padding: ${({ theme: { space } }) => `${space.xSmall} ${space.xSmall} ${space.tiny} ${space.xSmall}`};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const InnerIcon = styled(Image)<{ active: boolean }>`
  width: 24px;
  height: 24px;
  transform: ${({ active }) => `rotate(${active ? -180 : 0}deg)`};
`;

const OptionsContainer = styled.div`
  background: ${(props) => props.theme.color.white};
  min-width: 240px;
  border-radius: 6px;
  border: ${(props) => `1px solid ${props.theme.color.black20}`};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 68px;
`;

const Opt = styled.div`
  width: 100%;
  cursor: pointer;
  padding: ${({ theme: { space } }) => `${space.xSmall} ${space.xSmall} ${space.xxxSmall} ${space.xSmall}`};

  &:hover {
    background-color: ${(props) => props.theme.color.blue0};

    p {
      color: ${(props) => props.theme.color.white};
    }
  }
`;

export default SelectBox;
