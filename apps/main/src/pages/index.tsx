import { HomeViewController } from '~/domains/home/Home.view.controller';
import { useHomeViewModel } from '~/domains/home/Home.view.model';

export default function Home() {
  const viewModel = useHomeViewModel();

  return <HomeViewController viewModel={viewModel} />;
}
