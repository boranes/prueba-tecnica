import { useEffect, useState } from "react";
import StyledUserList from "../../styled-components/Users/StyledUserList";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
      ]);
    }, 500);
  }, []);

  if (!users.length) {
    return <p>No users were found</p>;
  }

  return (
    <StyledUserList role="list">
      {users.map((user) => {
        return (
          <div key={user.id} role="listitem">
            {user.first_name}
          </div>
        );
      })}
    </StyledUserList>
  );
};

export default UserList;
