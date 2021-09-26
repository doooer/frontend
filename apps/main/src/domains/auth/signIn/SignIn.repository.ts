import http from '~/core/lib/http';

import { SignInRequest, SignInResponse } from './SignIn.model';

// TODO(@youngjung): Server Swagger 정상화 후 재정의 필요

class SignInRepository {
  signIn(signInRequestData: SignInRequest): Promise<SignInResponse> {
    return http.post('/api/login', signInRequestData);
  }
}

export default new SignInRepository();
