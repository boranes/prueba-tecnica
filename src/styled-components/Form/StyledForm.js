import styled from "styled-components";
import { borderColor } from "../../css/css-settings";
import { primaryFontColor } from "../../css/css-settings";
import { errorColor } from "../../css/css-settings";

const StyledForm = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid ${borderColor};
  padding: 30px 50px;

  h1 {
    color: ${primaryFontColor};
    margin: 0 auto 30px;
  }

  .error-message {
    color: ${errorColor};
    margin: 0;
    margin-top: 20px;
    display: none;

    &.visible {
      display: block;
    }
  }
`;

export default StyledForm;
