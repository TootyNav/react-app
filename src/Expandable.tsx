interface Props {
  children: string;
  maxChars?: number;
}

const Expandable = ({ children, maxChars = 100 }: Props) => {
  return <p>{children.substring(0, maxChars)}</p>;
};

export default Expandable;
