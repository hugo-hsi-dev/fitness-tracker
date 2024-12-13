// app/routes/index.tsx
import { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { serverEnv } from '@/lib/env/server';

export const Route = createFileRoute('/')({
  component: Home,
  loader() {
    return serverEnv.DATABASE_URL[1];
  },
});

function Home() {
  const [state, setState] = useState(0);
  const url = Route.useLoaderData();
  return (
    <button
      type="button"
      onClick={() => {
        setState((prev) => prev + 1);
      }}
    >
      Add 1 to {state}? {url}
    </button>
  );
}
