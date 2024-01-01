import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  OnClosed: () => void;
}

const Alert = ({ children, OnClosed }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={OnClosed}
      ></button>
    </div>
  );
};

export default Alert;

// add this in app
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
