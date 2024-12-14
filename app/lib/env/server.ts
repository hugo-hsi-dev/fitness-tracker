import { serverOnly } from '@tanstack/start';
import { z } from 'zod';

const serverEnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string(),
});

export const getEnv = serverOnly(() => {
  return serverEnvSchema.parse(process.env);
});
