import React, { useState } from 'react'

function CounterExample() {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState([]);

  // Increase Counter
  const btnHandler = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  // Get User List
  const userHandler = () => {
    const userList = [
      { id: "U001", name: "John", email: "john@gmail.com" },
      { id: "U002", name: "Bob", email: "bob@gmail.com" },
      { id: "U003", name: "Jonny", email: "jonny@gmail.com" }
    ];
    setUser(userList);
  };

  // ✅ Corrected: Update all users (add address)
  const updateHandler = () => {
    const updatedUsers = user.map((u) => ({
      ...u,
      address: "MP Nagar, Bhopal"
    }));
    setUser(updatedUsers);
  };

  // ✅ Corrected: Delete all users (clear list)
  const deleteHandler = () => {
    setUser([]);
  };

  return (
    <div>
      <h1>Counter Example</h1>
      <h2>Counter: {counter}</h2>

      {/* User List */}
      {user.length > 0 ? (
        user.map((item) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            {item.address && <p>Address: {item.address}</p>}
            <hr />
          </div>
        ))
      ) : (
        <p>No users available</p>
      )}

      {/* Buttons */}
      <button onClick={btnHandler}>Increase Counter</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease Counter</button>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
      <hr />
      <button onClick={userHandler}>Get Users</button>
      <button onClick={updateHandler}>Update Users</button>
      <button onClick={deleteHandler}>Delete Users</button>
    </div>
  );
}

export default CounterExample;
