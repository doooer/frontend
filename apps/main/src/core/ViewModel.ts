export type ViewModel<ViewModelHook extends (...args: any) => any> = ReturnType<ViewModelHook>;
