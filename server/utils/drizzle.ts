import { drizzle } from 'drizzle-orm/node-postgres';
export { and, eq, or, sql } from 'drizzle-orm';

import * as schema from '../database/schema';

export const tables = schema;

export function useDrizzle() {
  return drizzle(useRuntimeConfig().databaseUrl, { schema });
}

export type User = typeof schema.weightEntry.$inferSelect;
