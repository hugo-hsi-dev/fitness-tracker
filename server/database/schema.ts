import { integer, numeric, pgTable } from 'drizzle-orm/pg-core';

export const weightEntry = pgTable('weightEntry', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  weight: numeric({ precision: 4, scale: 2 }),
});
