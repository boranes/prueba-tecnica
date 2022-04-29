import { Navigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { useSelector } from "react-redux";
import SignForm from "../../components/SignForm/SignForm";
import StyledFormPage from "../../styled-components/Pages/StyledFormPage";
import StyledDefaultLink from "../../styled-components/Links/StyledDefaultLink";

export const Login = () => {
  const { currentUser } = useSelector((state) => state.auth);

  if (currentUser) {
    return <Navigate to="/users" />;
  }

  return (
    <StyledFormPage>
      <SignForm title="Welcome!" buttonText="Login" signFunction={login} />
      <div>
        <p>
          Not a member?{" "}
          <StyledDefaultLink to="/register" strong={1}>
            Sign up now
          </StyledDefaultLink>
        </p>
      </div>
    </StyledFormPage>
  );
};

export default Login;
