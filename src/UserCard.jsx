const UserCard = (props) => {
  console.log(props);

  const { name, amount, married, address, greet } = props;

  return (
    <>
      <h1>{name}</h1>
      <p>💵{amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
      </ul>
    </>
  );
};

export default UserCard;
