import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

export const supabase = createClient<Database>(
	import.meta.env.SUPABASE_URL!,
	import.meta.env.SUPABASE_ANON_KEY!
);

export const getPathToImageInBucket = (fileName: string) =>
	supabase.storage.from('images').getPublicUrl(fileName);
