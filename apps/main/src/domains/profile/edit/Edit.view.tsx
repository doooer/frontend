import React from 'react';

import { Main } from '~/domains/_layout/defaultLayout';

import SubHeader from '../components/SubHeader';
import { EditViewModel } from './Edit.view.model';

export const EditView: React.VFC<EditViewModel> = React.memo(
  ({ control, errors, handleEditSubmit, hasAdditionalInfo, toggleAdditionalInfo }) => {
    return (
      <Main>
        <SubHeader />
      </Main>
    );
  },
);
