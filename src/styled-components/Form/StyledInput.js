import styled from "styled-components";
import { borderColor } from "../../css/css-settings";

const StyledInput = styled.input`
  display: ${(props) => props.display ?? "inline"};
  background-color: #fff;
  border: 1px solid ${borderColor};
  padding: 10px;
  margin-bottom: 15px;
`;

export default StyledInput;
