import React from "react";
import Header from "./components/Header";
import Parent from "./components/Parent";
import CounterExample from "./components/CounterExample"; 
import "./App.css";

function App() {
  const name = "Vikas";

  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h1>Hello! This is Vite + React</h1>
        <hr />
        <h2>Welcome, {name}</h2>
        <hr />
        <Parent />
        <hr />
        <CounterExample />
      </div>
    </>
  );
}

export default App;
