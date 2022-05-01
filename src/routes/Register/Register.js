import { Navigate } from "react-router-dom";
import { register } from "../../actions/auth";
import StyledFormPage from "../../styled-components/Pages/StyledFormPage";
import StyledDefaultLink from "../../styled-components/Links/StyledDefaultLink";
import SignForm from "../../components/SignForm/SignForm";
import { useSelector } from "react-redux";

const Register = () => {
  const { currentUser } = useSelector((state) => state.auth);

  if (currentUser) {
    return <Navigate to="/users" />;
  }

  return (
    <StyledFormPage>
      <SignForm
        title="Sign up"
        buttonText="Create account"
        signFunction={register}
      />
      <div>
        <p>
          Already registered?{" "}
          <StyledDefaultLink to="/login" strong={1}>
            Sign in
          </StyledDefaultLink>
        </p>
      </div>
    </StyledFormPage>
  );
};

export default Register;
