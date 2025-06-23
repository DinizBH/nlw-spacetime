interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps) {
  return (
    <>
      <br />
      <button>{props.title}</button>
    </>
  );
}
