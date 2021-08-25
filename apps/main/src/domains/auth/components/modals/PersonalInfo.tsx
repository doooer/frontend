import Modal from '~/domains/_layout/defaultLayout/components/Modal';

interface PersonalInfoPropsType {
  onClick: () => void;
}

export default function PersonalInfo({ onClick }: PersonalInfoPropsType) {
  return (
    <Modal width={800} height={500} padding="large" onClick={onClick}>
      <h2>개인정보처리방침</h2>
      <p>PersonalInfo test</p>
    </Modal>
  );
}
