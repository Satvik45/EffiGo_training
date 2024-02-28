import { useEffect, useState } from "react";
import UserData from "./components/UserData";
import "./App.css";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [idFilter, setIdFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [addressFilter, setAddressFilter] = useState("");

  

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  const filteredUsers = users.filter((user) =>
  user.id.toString().includes(idFilter) &&
  user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
  user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
  user.address.street.toLowerCase().includes(addressFilter.toLowerCase())
);

  return (
    <>
      <div className="container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
            </tr>
            <tr className="input-row">
              <th>
                <input
                  type="text"
                  id="idFilter"
                  value={idFilter}
                  onChange={(e) => setIdFilter(e.target.value)}
                  className="small-input"
                />
              </th>
              <th>
                <input
                  type="text"
                  id="nameFilter"
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  id="emailFilter"
                  value={emailFilter}
                  onChange={(e) => setEmailFilter(e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  id="addressFilter"
                  value={addressFilter}
                  onChange={(e) => setAddressFilter(e.target.value)}
                />
              </th>
            </tr>
          </thead>
  
          <tbody>
            <UserData users={filteredUsers} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
