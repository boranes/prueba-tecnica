import styled from "styled-components";
import { primaryColor } from "../../css/css-settings";

const StyledPaginator = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 15px auto;
  padding: 0;

  li {
    margin: 0 5px;

    a {
      text-decoration: none;
      color: ${primaryColor};

      &.active {
        font-weight: 600;
      }
    }
  }
`;

export default StyledPaginator;
