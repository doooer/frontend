const useConfirm = (message: string = '', continueAction: Function) => {
  const action = () => {
    // eslint-disable-next-line no-undef
    if (window.confirm(message)) {
      continueAction();
    }
  };

  return action;
};

export default useConfirm;
