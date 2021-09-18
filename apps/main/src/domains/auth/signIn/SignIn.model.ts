import * as yup from 'yup';

import { auth } from '~/shared/constants/messages';

export interface SignInRequest {
  email: string;
  password: string;
}

export const SignInRequestSchema = yup.object().shape({
  email: yup.string().email(auth.email.error.wrong).required(auth.email.error.required),
  password: yup.string().required(auth.password.error.required),
});
