import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home/Home";
import Student from "./components/student/student";
import PageAsync from "./components/Async";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      <Student />
      <PageAsync />
    </div>
  );
}

export default App;
