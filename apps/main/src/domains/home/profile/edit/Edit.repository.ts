import http from '~/core/lib/http';

import { EditRequest, EditResponse } from './Edit.model';

class EditRepository {
  editProfile(EditRequestData: EditRequest): Promise<EditResponse> {
    return http.post('/api/updateUserInfo', EditRequestData);
  }
}

export default new EditRepository();
