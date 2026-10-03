import { useState } from "react";
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import Card from "./components/Card.jsx";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  const handleClick = () => {
    alert(`Hello, ${name || "stranger"}!`);
  };

  return (
    <div className="app">
      <h1>Day 2 - React Components</h1>

      <Card title="Greeting Card">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button label="Say Hello" onClick={handleClick} />
      </Card>
    </div>
  );
};

export default App;
