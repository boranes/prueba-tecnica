import { useRef } from "react";
import useMessage from "../../hooks/useMessage";
import UserService from "../../services/Users/users.service";
import StyledPrimaryButton from "../../styled-components/Buttons/StyledPrimaryButton";
import StyledForm from "../../styled-components/Form/StyledForm";
import StyledInput from "../../styled-components/Form/StyledInput";

const UserForm = ({ user, setUser }) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const { message, showMessage } = useMessage();

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedUser = {
      ...user,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
    };
    UserService.updateUser(updatedUser).then((data) => {
      setUser(data);
      showMessage("User updated!");
    });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    UserService.deleteUser(user.id).then((data) => {
      if (data === "") {
        showMessage("User deleted");
      }
    });
  };

  return (
    <StyledForm>
      <label htmlFor="firstName">First Name:</label>
      <StyledInput
        type="text"
        defaultValue={user?.first_name}
        id="firstName"
        display="block"
        ref={firstNameRef}
      />

      <label htmlFor="lastName">Last Name:</label>
      <StyledInput
        type="text"
        defaultValue={user?.last_name}
        id="lastName"
        display="block"
        labelText=""
        ref={lastNameRef}
      />

      <label htmlFor="email">Email:</label>
      <StyledInput
        type="email"
        defaultValue={user?.email}
        id="email"
        display="block"
        ref={emailRef}
      />

      <div className={`${message.status} error-message`}>
        {message?.message}
      </div>

      <div>
        <StyledPrimaryButton
          onClick={handleUpdate}
          margintop="15px"
          marginright="15px"
        >
          Update
        </StyledPrimaryButton>
        <StyledPrimaryButton onClick={handleDelete} margintop="15px">
          Delete
        </StyledPrimaryButton>
      </div>
    </StyledForm>
  );
};

export default UserForm;
