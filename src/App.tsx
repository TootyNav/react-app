import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "London", "Manchester", "Bangkok"];

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        items={items}
        heading="List of Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
