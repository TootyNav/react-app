import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "London", "Manchester", "Bangkok"];
  let selectedIndex = 0;

  //event handler
  const handleClick = (event: MouseEvent) => console.log(MouseEvent);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "active list-group-item"
                : "list-group-item"
            }
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
