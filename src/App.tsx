import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // const handleButtonClick = () => {
  //   return (
  //     <div>
  //       <Alert>Hi</Alert>
  //     </div>
  //   );
  // };

  const [alertVisible, SetAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert>Hi</Alert>}
      <Button
        colour="danger"
        OnClick={() => {
          SetAlertVisible(true);
        }}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;

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
