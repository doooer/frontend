import styled from '@emotion/styled';
import React from 'react';
import { Controller } from 'react-hook-form';

import { Main, Section } from '~/domains/_layout/defaultLayout';

import SubHeader from '../components/SubHeader';
import Input from './components/Input';
import { EditViewModel } from './Edit.view.model';

export const EditView: React.VFC<EditViewModel> = React.memo(
  ({ control, errors, handleEditSubmit, hasAdditionalInfo, toggleAdditionalInfo, getValues }) => {
    return (
      <Main>
        <SubHeader />

        <Section>
          <Content>
            <TitleWrapper>
              <Title>기본 정보 입력</Title>
              <SubTitle>필수정보를 입력하고 팀 모집에 신청하세요!</SubTitle>
            </TitleWrapper>

            <InputWrapper>
              <InputLabel>이름</InputLabel>
              <Controller
                control={control}
                name="name"
                defaultValue=""
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    width={374}
                    value={value}
                    placeholder="이름을 입력하세요"
                    onBlur={onBlur}
                    onChange={onChange}
                    maxLength={10}
                  />
                )}
              />
            </InputWrapper>
          </Content>
        </Section>
      </Main>
    );
  },
);

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: ${({ theme: { space } }) => `${space.xSmall} 0px ${space.xSmall} ${space.xSmall}`};
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSize.title};
  font: ${(props) => props.theme.font.bold};
  color: ${(props) => props.theme.color.black0};
  font-weight: 700;
`;

const SubTitle = styled.p`
  margin-top: ${(props) => props.theme.space.xSmall};
  font: ${(props) => props.theme.font.medium};
  color: #c4c4c4;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: 500;
`;

const InputWrapper = styled.div`
  margin-top: ${(props) => props.theme.space.large};
  width: 100%;
  padding: ${({ theme: { space } }) => `${space.xSmall} 0px ${space.large} ${space.xSmall}`};
`;

const InputLabel = styled.p`
  color: ${(props) => props.theme.color.black0};
  font-size: ${(props) => props.theme.fontSize.xLarge};
  font-weight: 500;
  font: ${(props) => props.theme.font.medium};
`;
