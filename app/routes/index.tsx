// app/routes/index.tsx

import { PrismaClient } from '@prisma/client';
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';

const getUsers = createServerFn({ method: 'GET' }).handler(async () => {
  const prisma = new PrismaClient();
  const result = prisma.user.findMany();
  console.log(result);
  return result;
});

export const Route = createFileRoute('/')({
  component: Home,
  async loader() {
    return await getUsers();
  },
});

function Home() {
  const users = Route.useLoaderData();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
