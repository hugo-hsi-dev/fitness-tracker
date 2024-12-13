import z from 'zod';

const serverEnvSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const serverEnv = serverEnvSchema.parse(process.env);
