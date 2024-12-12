// app/routes/index.tsx
import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [state, setState] = useState(0);
  return (
    <button
      type="button"
      onClick={() => {
        setState((prev) => prev + 1);
      }}
    >
      Add 1 to {state}?
    </button>
  );
}
