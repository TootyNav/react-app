interface Props {
  children: string;
  colour?: "primary" | "secondary" | "danger";
  OnClick: () => void;
}

const Button = ({ children, colour = "primary", OnClick }: Props) => {
  return (
    <div className={"btn btn-" + colour} onClick={OnClick}>
      {children}
    </div>
  );
};

export default Button;
