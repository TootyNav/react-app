import { useState } from "react";
import Expandable from "./Expandable";
import Button from "./components/Button";

function App() {
  const [maxChar, SetmaxChar] = useState(100);

  const clickhandler = () => {
    maxChar === 100 ? SetmaxChar(1000) : SetmaxChar(100);
  };

  return (
    <>
      <Expandable maxChars={maxChar}>
        Green vines attached to the trunk of the tree had wound themselves
        toward the top of the canopy. Ants used the vine as their private
        highway, avoiding all the creases and crags of the bark, to freely move
        at top speed from top to bottom or bottom to top depending on their
        current chore. At least this was the way it was supposed to be.
        Something had damaged the vine overnight halfway up the tree leaving a
        gap in the once pristine ant highway.
      </Expandable>
      <Button OnClick={clickhandler}>
        {maxChar === 100 ? "More" : "Less"}
      </Button>
    </>
  );
}

export default App;

//Click button to show alert and close alert
// function App() {
//   const [alertVisible, SetAlertVisible] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert
//           OnClosed={() => {
//             SetAlertVisible(false);
//           }}
//         >
//           Hi
//         </Alert>
//       )}
//       <Button
//         colour="danger"
//         OnClick={() => {
//           SetAlertVisible(true);
//         }}
//       >
//         Click Me
//       </Button>
//     </div>
//   );
// }

// export default App;

//Display list and click on list
// import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         <strong>Hello</strong> World
//       </Alert>
//     </div>
//   );
// }

//import ListGroup from "./components/ListGroup";

// function App() {
//   const items = ["New York", "London", "Manchester", "Bangkok"];

//   const handleSelectItem = (item: string) => console.log(item);

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="List of Cities"
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//     </div>
//   );
// }
