import { useEffect, useState } from "react";
import UserData from "./components/UserData";
import "./App.css"
const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  
    const [users, setUsers]= useState([]);

    const fetchUsers = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if(data.length>0){
          setUsers(data);
        }
      } catch (error) {
        console.error(error);
        
      }
    }

    useEffect(() => {
      fetchUsers(API);
    }, [])
    
    return<>
    <div className="container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
        </tr>
      </thead>
      

      <tbody>
        <UserData users = {users}/>
      </tbody>
    </table>
    </div>
    </>
    ;
}

export default App;
