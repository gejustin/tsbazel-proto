import * as React from "react";
import { createRoot } from 'react-dom/client';

const App: React.FC<{}> = () => {
  return (
    <h1>Hello, world!</h1>
  )
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);