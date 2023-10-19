import { Database } from './database.types';
export type DB = Database['public']['Tables'];

// Rows
export type Bets = DB['bets']['Row'];
// Inserts
export type BetsInsert = DB['bets']['Insert'];
// Updates
export type BetsUpdate = DB['bets']['Update'];
