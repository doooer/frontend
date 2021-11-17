import { EditViewController } from '~/domains/profile/edit/Edit.view.controller';
import { useEditViewModel } from '~/domains/profile/edit/Edit.view.model';

export default function Edit() {
  const viewModel = useEditViewModel();

  return <EditViewController viewModel={viewModel} />;
}
