import Modal from '~/domains/_layout/defaultLayout/components/Modal';

interface MembersInfoPropsType {
  onClick: () => void;
}

export default function MembersInfo({ onClick }: MembersInfoPropsType) {
  return (
    <Modal width={800} height={500} padding="large" onClick={onClick}>
      <h2>회원약관</h2>
      <p>MembersInfo test</p>
    </Modal>
  );
}
