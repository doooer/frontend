import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';

import { Main, Section } from '~/domains/_layout/defaultLayout';
import ArrowIcon from '~/shared/assets/images/icons/arrowDown.svg';
import PlusIcon from '~/shared/assets/images/icons/plus.svg';
import Button from '~/shared/components/Button';
import Text from '~/shared/components/Text';
import { JOB_GROUP, JOB_TYPE } from '~/shared/constants/job';

import SubHeader from '../components/SubHeader';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import InputArea from './components/InputArea';
import SelectBox from './components/SelectBox';
import TextArea from './components/TextArea';
import { EditViewModel } from './Edit.view.model';

export const EditView: React.VFC<EditViewModel> = React.memo(
  ({
    control,
    errors,
    handleEditSubmit,
    hasAdditionalInfo,
    toggleAdditionalInfo,
    getValues,
    jobs,
    setJobs,
    jobGroup,
    setJopGroup,
  }) => {
    return (
      <Main>
        <SubHeader />

        <Section>
          <Content>
            <TitleWrapper>
              <Title>
                <Text font="bold" fontSize="title">
                  기본 정보 입력
                </Text>
              </Title>
              <Text fontSize="large" textColor="grey">
                필수정보를 입력하고 팀 모집에 신청하세요!
              </Text>
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
                <SelectBox
                  options={JOB_GROUP}
                  placeholder="직군 선택"
                  value={JOB_GROUP.find((jg) => jg.id === jobGroup)?.value ?? '직군 선택'}
                  onSelect={(id: string) => {
                    setJopGroup(id);
                    setJobs([]);
                  }}
                />
                <Text
                  textColor={jobs.length > 0 ? 'violet20' : 'black20'}
                  fontSize="large"
                  font="medium"
                  style={{ marginLeft: 40 }}
                >
                  {jobs.length > 0
                    ? `${jobs.length}개의 직무를 선택하셨어요! (${jobs.length}/3)`
                    : '직군과 직무를 선택해주세요. 최대 3개의 직무 선택 가능합니다.'}
                </Text>
              </InputJobHeader>
              <InputJobContent>
                {jobGroup &&
                  JOB_TYPE.filter(({ group }) => group === jobGroup).map(({ id, value }) => (
                    <CheckBox
                      key={id}
                      text={value}
                      selected={!!jobs.find((j) => j === id)}
                      buttonStyle={{ marginTop: 40, marginRight: 32 }}
                      id={id}
                      onSelect={(keyID: string) => {
                        if (jobs.includes(keyID)) {
                          setJobs((prev) => prev.filter((p) => p !== keyID));
                        } else if (jobs.length < 3) {
                          setJobs((prev) => [...prev, keyID]);
                        }
                      }}
                    />
                  ))}
              </InputJobContent>
            </InputArea>

            <InputArea label="소개">
              <TextArea placeholder="20자 이상 200자 이내로 작성해 주세요." value="" maxLength={200} />
            </InputArea>

            <TitleWrapper>
              <Title>
                <Text font="bold" fontSize="title" textColor="blue0">
                  추가 정보 입력
                </Text>
                <TitleIcon onClick={toggleAdditionalInfo}>
                  <IconButton src={ArrowIcon} isUp={hasAdditionalInfo} />
                </TitleIcon>
              </Title>
              <Text fontSize="large" textColor="grey">
                추가정보를 입력하여 멋진 개인 프로필을 완성하세요!
              </Text>
            </TitleWrapper>

            {hasAdditionalInfo && (
              <Content>
                <InputArea label="스택 / 툴" />

                <InputArea label="학력" />

                <InputArea label="수상" />

                <InputArea label="자격증" />

                <InputArea label="링크" />

                <InputArea label="대표번호" />

                <InputArea label="이메일" />

                <InputArea label="오픈 카톡방 링크" />
              </Content>
            )}

            <Footer>
              <Button onClick={() => {}} text="완료" width={165} />
            </Footer>
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

const Title = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.space.xSmall};
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const TitleIcon = styled.button`
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => props.theme.space.xSmall};
  padding: ${({ theme: { space } }) => `${space.xTiny} 0px`};
  background: none;
`;

const IconButton = styled(Image)<{ isUp: boolean }>`
  width: 32px;
  height: 32px;
  transform: ${({ isUp }) => `rotate(${-180 * (isUp ? 1 : 0)}deg)`};
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
  align-items: flex-end;
`;

const InputJobContent = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 176px;
`;

const Footer = styled.div`
  margin-top: ${(props) => props.theme.space.small};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
