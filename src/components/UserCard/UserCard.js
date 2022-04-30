const UserCard = ({ user }) => {
  return (
    <div role="listitem">
      <img src={user.avatar} alt={user.first_name} />
      <span>{user.first_name}</span>
      <span>{user.last_name}</span>
      <span>{user.email}</span>
    </div>
  );
};

export default UserCard;
