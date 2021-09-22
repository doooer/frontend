export const setAuthorization = (headers: any, token?: string) => {
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  } else {
    delete headers.Authorization;
  }
};
