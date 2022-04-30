import styled from "styled-components";

const StyledAvatar = styled.img`
  border-radius: ${(props) => (props.type === "rounded" ? "50%" : 0)};
  display: ${(props) => props.display};
  height: 100px;
  margin: ${(props) => props.margin};
  width: 100px;

  @media (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;

export default StyledAvatar;
