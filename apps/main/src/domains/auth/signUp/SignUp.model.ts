import * as yup from 'yup';

import { auth } from '~/shared/constants/messages';

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  personalInfoCheck: boolean;
  membersInfoCheck: boolean;
}

const { name, email, password, confirmPassword, notice } = auth;
const PASSWORD_REGEXP = /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

export const SignUpRequestSchema = yup.object().shape({
  name: yup.string().min(1, name.error.wrong).max(10, name.error.wrong).required(name.error.required),
  email: yup.string().email(email.error.wrong).required(email.error.required),
  password: yup.string().matches(PASSWORD_REGEXP, password.error.wrong).required(password.error.required),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], confirmPassword.error.mismatch)
    .required(confirmPassword.error.required),
  personalInfoCheck: yup.bool().oneOf([true], notice.error.required).required(notice.error.required),
  membersInfoCheck: yup.bool().oneOf([true], notice.error.required).required(notice.error.required),
});
