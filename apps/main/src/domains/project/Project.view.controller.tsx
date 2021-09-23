import React from 'react';

import { ViewController } from '~/core/ViewController';

import { ProjectView } from './Project.view';
import { ProjectViewModel } from './Project.view.model';

export const ProjectViewController: ViewController<ProjectViewModel> = React.memo(({ viewModel }) => {
  return <ProjectView {...viewModel} />;
});
