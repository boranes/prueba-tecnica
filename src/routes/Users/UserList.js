import { useEffect, useState } from "react";
import StyledUserList from "../../styled-components/Users/StyledUserList";
import StyledContainer from "../../styled-components/Layout/StyledContainer";
import UserService from "../../services/Users/users.service";
import UserCard from "../../components/UserCard/UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const printUsers = () => {
    if (!users.length) {
      return <p>No users were found</p>;
    }

    return (
      <StyledUserList role="list">
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </StyledUserList>
    );
  };

  useEffect(() => {
    UserService.getUsers(1).then((data) => {
      setUsers(data.data);
    });
  }, []);

  if (!users.length) {
    return <p>No users were found</p>;
  }

  return (
    <>
      <StyledContainer>{printUsers()}</StyledContainer>
    </>
  );
};

export default UserList;
