import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import * as Stack from '@react-motion-router/stack';

export default function Home() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <div>
        <Stack.Anchor href={viteLogo} params={{ fileType: "svg" }} download="Vite Logo">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Stack.Anchor>
        <Stack.Anchor href={reactLogo} params={{ fileType: "svg" }} download="React Logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Stack.Anchor>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to download
      </p>
    </>
  );
}
