export const auth = {
  name: {
    placeholder: '이름을 입력해주세요.',
    error: {
      required: '이름을 입력해주세요.',
      wrong: '사용자 이름을 1자 이상 10자 이내로 입력해 주세요.',
    },
  },
  email: {
    placeholder: '이메일을 입력해주세요.',
    error: {
      required: '이메일을 입력해주세요.',
      wrong: '올바른 이메일 주소를 입력해 주세요.',
      usedEmail: '이미 사용중인 이메일 주소입니다.',
    },
  },
  password: {
    placeholder: '비밀번호를 입력해주세요.',
    error: {
      required: '비밀번호를 입력해주세요.',
      wrong: '영문, 숫자, 특수문자를 모두 조합하여 8자 이상 20자 이내로 입력해 주세요.',
      mismatch: '비밀번호 확인란과 일치하지 않습니다.',
    },
  },
  confirmPassword: {
    placeholder: '비밀번호 확인란을 입력해주세요.',
    error: {
      required: '비밀번호 확인란을 입력해주세요.',
      mismatch: '비밀번호가 일치하지 않습니다.',
    },
  },
  notice: {
    placeholder: '개인정보처리방침과 회원약관에 동의해 주세요.',
    error: {
      required: '개인정보처리방침과 회원약관에 동의해 주세요.',
    },
  },
};
