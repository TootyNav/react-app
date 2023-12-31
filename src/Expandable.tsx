interface Props {
  children: string;
  maxChars?: number;
}

const Expandable = ({ children, maxChars = 100 }: Props) => {
  return <p>{children.substring(0, maxChars)}</p>;
};

export default Expandable;

// function App() {
//   const [maxChar, SetmaxChar] = useState(100);

//   const clickhandler = () => {
//     maxChar === 100 ? SetmaxChar(1000) : SetmaxChar(100);
//   };

//   return (
//     <>
//       <Expandable maxChars={maxChar}>
//         Green vines attached to the trunk of the tree had wound themselves
//         toward the top of the canopy. Ants used the vine as their private
//         highway, avoiding all the creases and crags of the bark, to freely move
//         at top speed from top to bottom or bottom to top depending on their
//         current chore. At least this was the way it was supposed to be.
//         Something had damaged the vine overnight halfway up the tree leaving a
//         gap in the once pristine ant highway.
//       </Expandable>
//       <Button OnClick={clickhandler}>
//         {maxChar === 100 ? "More" : "Less"}
//       </Button>
//     </>
//   );
// }
