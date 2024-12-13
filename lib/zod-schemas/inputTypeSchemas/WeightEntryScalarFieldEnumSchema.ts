import { z } from 'zod';

export const WeightEntryScalarFieldEnumSchema = z.enum(['id','userId','createdAt','updatedAt']);

export default WeightEntryScalarFieldEnumSchema;
