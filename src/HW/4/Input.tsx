type InputPropsType = {
  currentText: string; // НУЖНО ПРОТИПИЗИРОВАТЬ
  setCurrentText: Function; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input: React.FC<InputPropsType> = ({
  currentText,
  setCurrentText,
}) => {
  const onChangeHandler = (event: any) => {
    setCurrentText(event.target.value);
  };

  return (
    <input
      id={"hw04-input"}
      type="text"
      value={currentText}
      onChange={onChangeHandler}
    />
  );
};
