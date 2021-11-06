import * as yup from 'yup';

export interface EditRequest {
  name: string;
}

export interface EditResponse {}

export const EditRequestSchema = yup.object().shape({
  name: yup.string().max(10).required(),
});
