function Child({ user }) {
  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h3>Child Component</h3>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Child;
