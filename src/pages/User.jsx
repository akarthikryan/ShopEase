
function User() {
  const users = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  return (
    <div className="page">
      <h1>Registered Users</h1>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        users.map((user, index) => (
          <div className="user-card" key={index}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default User;
