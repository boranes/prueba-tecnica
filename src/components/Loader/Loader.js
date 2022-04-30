import StyledLoader from "../../styled-components/Loader/StyledLoader";
import { SpinnerCircular } from "spinners-react";

const Loader = () => {
  return (
    <StyledLoader>
      <SpinnerCircular color="green" height={50} width={50}></SpinnerCircular>
    </StyledLoader>
  );
};

export default Loader;
