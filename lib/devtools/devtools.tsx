import { Suspense } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { TanStackRouterDevtools } from '@/lib/devtools/tanstack-router-devtools';

export default function Devtools() {
  return (
    <>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
      <ReactQueryDevtools />
    </>
  );
}
