const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name, email, address } = curUser;
        const { street, city, zipcode } = curUser.address;

        return (
          <tr className="data-row" key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              {street}, {city}, {zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
