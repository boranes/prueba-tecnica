import StyledAvatar from "../../styled-components/Images/StyledAvatar";
import StyledUserCard from "../../styled-components/Users/StyledUserCard";
import StyledBorderedLink from "../../styled-components/Links/StyledBorderedLink";

const UserCard = ({ user }) => {
  return (
    <StyledUserCard role="listitem">
      <StyledAvatar
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        type="rounded"
      />
      <span className="name">
        {user.first_name} {user.last_name}
      </span>
      <span className="email">{user.email}</span>
      <StyledBorderedLink to={`/users/${user.id}`}>
        See profile
      </StyledBorderedLink>
    </StyledUserCard>
  );
};

export default UserCard;
