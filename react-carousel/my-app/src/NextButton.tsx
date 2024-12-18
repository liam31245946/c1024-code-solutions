type Prop = {
  onClick: () => void;
};

export function NextButton({ onClick }: Prop) {
  return (
    <>
      <button onClick={onClick}>Next </button>
    </>
  );
}
