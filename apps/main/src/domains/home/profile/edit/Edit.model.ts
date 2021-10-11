import * as yup from 'yup';

export interface EditRequest {
  email: string;
  password: string;
}

// {
//     "awardList": "string",
//     "certificateList": "string",
//     "educationList": "string",
//     "email": "string",
//     "id": 0,
//     "introduce": "string",
//     "jobCd": "string",
//     "name": "string",
//     "openChatUrl": "string",
//     "prflImgId": "string",
//     "refLink": "string",
//     "refLink2": "string",
//     "useTech": "string"
//   }

export interface EditResponse {}

export const EditRequestSchema = yup.object().shape({
  awardList: yup.string(),
  certificateList: yup.string(),
  educationList: yup.string(),
  email: yup.string(),
  introduce: yup.string(),
  jobCd: yup.string(),
  name: yup.string(),
  openChatUrl: yup.string(),
  prflImgId: yup.string(),
  refLink: yup.string(),
  refLink2: yup.string(),
  useTech: yup.string(),
});
