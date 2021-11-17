import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Controller } from 'react-hook-form';

import { Main, Section } from '~/domains/_layout/defaultLayout';
import PlusIcon from '~/shared/assets/images/icons/plus.svg';
import Text from '~/shared/components/Text';
import { JOB_TYPE } from '~/shared/constants/job';

import SubHeader from '../components/SubHeader';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import InputArea from './components/InputArea';
import SelectBox from './components/SelectBox';
import TextArea from './components/TextArea';
import { EditViewModel } from './Edit.view.model';

const opts = [
  {
    key: 'opt1',
    value: 'opt1',
    text: 'opt1',
  },
  {
    key: 'opt2',
    value: 'opt2',
    text: 'opt2',
  },
  {
    key: 'opt3',
    value: 'opt3',
    text: 'opt3',
  },
];

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

            <InputArea label="이름">
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
            </InputArea>

            <InputArea label="프로필 사진">
              <InputImageContainer>
                <InputImage>
                  <Image src={PlusIcon} alt="plus-icon" width={24} height={24} />
                  <p>160 * 160</p>
                </InputImage>

                <ImagePresetContainer>
                  <ImagePreset />
                  <ImagePreset />
                  <ImagePreset />
                </ImagePresetContainer>
              </InputImageContainer>
            </InputArea>

            <InputArea label="직군">
              <InputJobHeader>
                <SelectBox options={opts} />
                <Text
                  textColor="violet20"
                  fontSize="large"
                  font="medium"
                >{`${1}개의 직무를 선택하셨어요! (${1}/3)`}</Text>
              </InputJobHeader>
              <InputJobContent>
                {JOB_TYPE.filter(({ group }) => group === 'jg1').map(({ id, value }) => (
                  <CheckBox key={id} text={value} buttonStyle={{ marginTop: 40, marginRight: 32 }} />
                ))}
              </InputJobContent>
            </InputArea>

            <InputArea label="소개">
              <TextArea placeholder="20자 이상 200자 이내로 작성해 주세요." value="" maxLength={200} />
            </InputArea>
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

const InputImageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const InputImage = styled.button`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.black20};

  p {
    color: ${(props) => props.theme.color.white};
    font-size: ${(props) => props.theme.fontSize.xSmall};
    font-family: ${(props) => props.theme.font.regular};
    font-weight: 400;
    margin-top: ${(props) => props.theme.space.tiny};
  }
`;

const ImagePresetContainer = styled.div`
  display: flex;
  margin-left: ${(props) => props.theme.space.xLarge};
  align-items: center;
`;

const ImagePreset = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.black20};
  margin-right: ${(props) => props.theme.space.large};
`;

const InputJobHeader = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: ${(props) => props.theme.space.tiny};

  p {
    margin-left: ${(props) => props.theme.space.large};
  }
`;

const InputJobContent = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 176px;
`;
