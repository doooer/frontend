import * as yup from 'yup';

import { auth } from '~/shared/constants/messages';

export interface FindPasswordRequest {
  password: string;
  confirmPassword: string;
}

const { password, confirmPassword } = auth;
const PASSWORD_REGEXP = /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

export const FindPasswordSchema = yup.object().shape({
  password: yup.string().matches(PASSWORD_REGEXP, password.error.wrong).required(password.error.required),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], confirmPassword.error.mismatch)
    .required(confirmPassword.error.required),
});
