import { EditViewController } from '~/domains/mypage/edit/Edit.view.controller';
import { useEditViewModel } from '~/domains/mypage/edit/Edit.view.model';

export default function Edit() {
  const viewModel = useEditViewModel();

  return <EditViewController viewModel={viewModel} />;
}
