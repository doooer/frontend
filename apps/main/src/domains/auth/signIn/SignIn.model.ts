import * as yup from 'yup';

import { auth } from '~/shared/constants/messages';

export interface SignInRequest {
  userName: string;
  password: string;
}

export interface SignInResponse {}

export const SignInRequestSchema = yup.object().shape({
  userName: yup.string().email(auth.email.error.wrong).required(auth.email.error.required),
  password: yup.string().required(auth.password.error.required),
});
