import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "London", "Manchester", "Bangkok"];

  return (
    <div>
      <ListGroup items={items} heading="List of Cities"></ListGroup>
    </div>
  );
}

export default App;
