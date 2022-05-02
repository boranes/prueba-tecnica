import StyledContainer from "../../styled-components/Layout/StyledContainer";
import StyledBorderedLink from "../../styled-components/Links/StyledBorderedLink";

const NotFound = () => {
  return (
    <>
      <StyledContainer>
        <StyledBorderedLink to={"/login"} margin="15px auto">
          Go back
        </StyledBorderedLink>
        <div style={{ textAlign: "center" }}>
          <h1>Page not found</h1>
        </div>
      </StyledContainer>
    </>
  );
};

export default NotFound;
