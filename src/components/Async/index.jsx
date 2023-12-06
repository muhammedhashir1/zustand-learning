import React, { useEffect } from "react";
import { useAppStore } from "../../store/appStore";

const PageAsync = () => {
  const [users, loading, error, fetchUsers] = useAppStore((state) => {
    return [state.users, state.loading, state.error, state.fetchUsers];
  });
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}...</div>;
  }

  console.log(users);
  return (
    <div>
      <h3>Page3</h3>
      <h5>Users</h5>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id} style={{ listStyle: "none", textAlign: "left" }}>
              {user.first_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageAsync;
