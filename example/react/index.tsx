import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={handleClick} type="button">
        {' '}
        {`count is ${count}`} /
      </button>
      <p>Edit src/App.tsx and save to test HMR</p>
    </div>
  );
}

export default App;
