import React from 'react';

import { ViewModel } from './ViewModel';

// const로 컴포넌트를 만든다면 해당 Type을,
export type ViewController<T extends ViewModel<any>> = React.FC<{
  viewModel: T;
}>;

// function으로 컴포넌트를 만든다면 해당 Type을 지정한다.
export type ViewControllerProps<VM extends ViewModel<any>> = { viewModel: VM };
