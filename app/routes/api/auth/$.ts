import { createAPIFileRoute } from '@tanstack/start/api';

import { auth } from '@/lib/auth/auth';

export const APIRoute = createAPIFileRoute('/api/auth/$')({
  GET: ({ request }) => {
    return auth.handler(request);
  },
  POST: ({ request }) => {
    console.log(request);
    return auth.handler(request);
  },
});
