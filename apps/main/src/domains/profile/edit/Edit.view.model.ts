import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { ViewModel } from '~/core/ViewModel';
import { EditRequest, EditRequestSchema, EditResponse } from '~/domains/profile/edit/Edit.model';

export type EditViewModel = ViewModel<typeof useEditViewModel>;

export const useEditMutation = () => {
  return useMutation<EditResponse, Error, EditRequest>({});
};

export function useEditViewModel() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<EditRequest>({
    resolver: yupResolver(EditRequestSchema),
    defaultValues: {},
  });

  const [hasAdditionalInfo, setHasAdditionalInfo] = useState(false);

  const [jobGroup, setJopGroup] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Array<string>>([]); // 직무

  const handleEditSubmit = handleSubmit((formData) => {
    console.log('Edit FormData: ', formData);
  });

  const toggleAdditionalInfo = useCallback(() => {
    setHasAdditionalInfo((prev) => !prev);
  }, []);

  return {
    control,
    errors,
    getValues,
    hasAdditionalInfo,
    toggleAdditionalInfo,
    handleEditSubmit,
    jobs,
    setJobs,
    jobGroup,
    setJopGroup,
  };
}
