// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [state, setState] = useState(0);
  return (
    <button
      type='button'
      onClick={() => {
        setState((prev) => prev + 1);
      }}
    >
      Add 1 to {state}?
    </button>
  );
}
