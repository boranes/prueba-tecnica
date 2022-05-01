import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Paginator from "../../components/Paginator/Paginator";
import UserCard from "../../components/UserCard/UserCard";
import UserService from "../../services/Users/users.service";
import StyledContainer from "../../styled-components/Layout/StyledContainer";
import StyledUserList from "../../styled-components/Users/StyledUserList";

const UserList = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const printUsers = () => {
    if (loading) {
      return <Loader />;
    }

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

  const shouldPaginatorBePrinted = () => {
    return users.length && !loading && totalPages > 1;
  };

  useEffect(() => {
    setLoading(true);
    UserService.getUsers(currentPage).then((data) => {
      setUsers(data.data);
      setTotalPages(data.total_pages);
      setLoading(false);
    });
  }, [currentPage]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <StyledContainer>{printUsers()}</StyledContainer>
      {shouldPaginatorBePrinted() ? (
        <Paginator
          totalPages={totalPages}
          path="/users"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default UserList;
