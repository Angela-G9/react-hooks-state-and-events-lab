import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${mode}`}>
      <button onClick={toggleMode}>{mode} Mode</button>
    </div>
  );
}

export default App;
