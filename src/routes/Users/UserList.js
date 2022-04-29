import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  if (!users.length) {
    return <p>No users were found</p>;
  }
};

export default UserList;
