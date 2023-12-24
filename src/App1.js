import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Artır</button>
    </div>
  );
}

export default App;
