import ExpenseTracker from "./components/ExpenseTracker";
import Form from "./components/Form";

function App() {
  return (
    <>
      {/* <Form></Form> */}
      <ExpenseTracker></ExpenseTracker>
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
