import { Link } from "react-router-dom";
import styled from "styled-components";
import { primaryColor } from "../../css/css-settings";

const StyledDefaultLink = styled(Link)`
  color: ${primaryColor};
  font-size: 14px;
  font-weight: ${(props) => (props.strong ? 600 : 400)};
  padding: ${(props) => props.padding};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: strong;
    text-decoration: underline;
  }
`;

export default StyledDefaultLink;
