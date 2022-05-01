import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import UserForm from "../../components/UserForm/UserForm";
import UserService from "../../services/Users/users.service";
import StyledAvatar from "../../styled-components/Images/StyledAvatar";
import StyledContainer from "../../styled-components/Layout/StyledContainer";
import StyledBorderedLink from "../../styled-components/Links/StyledBorderedLink";

const UserDetail = () => {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);

  const printUser = () => {
    if (loading) {
      return (
        <StyledContainer>
          <Loader />
        </StyledContainer>
      );
    }

    if (user) {
      return (
        <>
          <StyledAvatar
            src={user?.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            type="rounded"
            display="block"
            margin="15px auto"
          />
          <UserForm user={user} setUser={setUser} />
        </>
      );
    }

    return <p>User not found</p>;
  };

  useEffect(() => {
    UserService.getUser(userId).then((data) => {
      setUser(data.data);
      setLoading(false);
    });
  }, [userId]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <StyledContainer>
        <div>
          <StyledBorderedLink to={"/users"} margin="15px auto">
            Go back
          </StyledBorderedLink>
        </div>
        {printUser()}
      </StyledContainer>
    </>
  );
};

export default UserDetail;
