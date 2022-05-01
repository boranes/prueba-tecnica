import styled from "styled-components";
import { primaryColor } from "../../css/css-settings";

const StyledHeader = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid ${primaryColor};
  padding: 15px 0;

  @media (min-width: 768px) {
    padding: 15px 30px;
  }
`;

export default StyledHeader;
