import styled from "styled-components";
import { borderColor, primaryColor } from "../../css/css-settings";

const StyledUserCard = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid ${borderColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  .name {
    color: ${primaryColor};
    font-size: 20px;
    margin-top: 15px;
  }

  .email {
    font-size: 14px;
    margin: 15px 0;
  }
`;

export default StyledUserCard;
