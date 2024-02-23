function ListGroup() {
  let items = ["Bengaluru", "Mumbai", "Hyderabad", "Gurgaon", "Noida"];

  if (items.length == 0) return <p>No items found</p>;
  return (
    <>
      <h1> Lists</h1>
      <ul className="list-group">
        {items.map((items) => (
          <li className="list-group-item" key={items.id}>
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
