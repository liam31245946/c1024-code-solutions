type Prop = {
  onClick: () => void;
};

export function PrevButton({ onClick }: Prop) {
  return (
    <>
      <button onClick={onClick}> Prev</button>
    </>
  );
}
