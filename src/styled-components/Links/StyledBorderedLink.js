import { Link } from "react-router-dom";
import styled from "styled-components";
import { primaryColor } from "../../css/css-settings";

const StyledBorderedLink = styled(Link)`
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: ${(props) => props.margintop};
  padding: 10px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${primaryColor};
    color: #ffffff;
    text-decoration: none;
    transition: background-color 0.3s;
  }
`;

export default StyledBorderedLink;
