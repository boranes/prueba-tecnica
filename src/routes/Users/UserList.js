import { useEffect, useState } from "react";
import StyledUserList from "../../styled-components/Users/StyledUserList";
import StyledContainer from "../../styled-components/Layout/StyledContainer";
import UserService from "../../services/Users/users.service";
import UserCard from "../../components/UserCard/UserCard";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserList = () => {
  const { currentUser } = useSelector((state) => state.auth);
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

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <StyledContainer>{printUsers()}</StyledContainer>
    </>
  );
};

export default UserList;
