import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import UserForm from "../../components/UserForm/UserForm";
import UserService from "../../services/Users/users.service";
import StyledAvatar from "../../styled-components/Images/StyledAvatar";
import StyledContainer from "../../styled-components/Layout/StyledContainer";
import StyledBorderedLink from "../../styled-components/Links/StyledBorderedLink";

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const printUser = () => {
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
    });
  }, [userId]);

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
