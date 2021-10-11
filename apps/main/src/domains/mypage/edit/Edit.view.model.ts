import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { ViewModel } from '~/core/ViewModel';
import { EditRequest, EditResponse } from '~/domains/home/profile/edit/Edit.model';

export type EditViewModel = ViewModel<typeof useEditViewModel>;

export const useEditMutation = () => {
  return useMutation<EditResponse, Error, EditRequest>({});
};

export function useEditViewModel() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<EditRequest>({
    resolver: yupResolver(),
    defaultValues: {},
  });

  const [hasAdditionalInfo, setHasAdditionalInfo] = useState(false);

  const handleEditSubmit = handleSubmit((formData) => {
    console.log('Edit FormData: ', formData);
  });

  const toggleAdditionalInfo = useCallback(() => {
    setHasAdditionalInfo((prev) => !prev);
  }, []);

  return {
    control,
    errors,
    hasAdditionalInfo,
    toggleAdditionalInfo,
    handleEditSubmit,
  };
}
