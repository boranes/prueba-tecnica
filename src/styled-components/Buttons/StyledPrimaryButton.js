import styled from "styled-components";
import {
  borderColor,
  primaryColor,
  primaryFontColor,
} from "../../css/css-settings";

const StyledPrimaryButton = styled.button`
  background-color: transparent;
  border: 1px solid ${borderColor};
  color: ${primaryFontColor};
  cursor: pointer;
  font-weight: 600;
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginbottom};
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  margin-top: ${(props) => props.margintop};
  padding: 10px;
  text-decoration: none;

  &:hover {
    background-color: ${primaryColor};
    color: #fff;
    transition: all 0.3s;
  }
`;

export default StyledPrimaryButton;
