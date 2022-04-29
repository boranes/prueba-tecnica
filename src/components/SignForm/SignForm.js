import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMessage from "../../hooks/useMessage";
import StyledPrimaryButton from "../../styled-components/Buttons/StyledPrimaryButton";
import StyledForm from "../../styled-components/Form/StyledForm";
import StyledInput from "../../styled-components/Form/StyledInput";

const SignForm = ({ title, buttonText, signFunction }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { message, showMessage } = useMessage();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(signFunction(email, password))
      .then(() => {
        navigate("/users", { replace: false });
      })
      .catch((error) => {
        showMessage(error);
        return;
      });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit} width="200px">
        <h1>{title}</h1>
        <StyledInput type="text" placeholder="Your email" ref={emailRef} />
        <StyledInput
          type="password"
          placeholder="Your password"
          ref={passwordRef}
        />
        <StyledPrimaryButton>{buttonText}</StyledPrimaryButton>
        <div
          data-testid="error-message"
          className={`${message.status} error-message`}
        >
          {message?.message}
        </div>
      </StyledForm>
    </>
  );
};

export default SignForm;
