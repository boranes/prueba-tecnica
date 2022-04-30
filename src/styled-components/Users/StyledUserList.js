import styled from "styled-components";

const StyledUserList = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 15px;
  padding: 0;
  margin: 50px 0;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 992px) {
    grid-template-columns: auto auto auto;
  }
`;

export default StyledUserList;
