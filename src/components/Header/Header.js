import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import StyledPrimaryButton from "../../styled-components/Buttons/StyledPrimaryButton";
import StyledHeader from "../../styled-components/Header/StyledHeader";
import StyledContainer from "../../styled-components/Layout/StyledContainer";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledPrimaryButton onClick={handleLogout}>Logout</StyledPrimaryButton>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
