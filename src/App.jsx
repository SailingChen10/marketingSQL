import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white' }}>
      <h1>MarketingSQL Pro</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click me
      </button>
    </div>
  );
}

export default App;
