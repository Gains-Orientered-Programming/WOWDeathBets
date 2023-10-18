import { exec } from 'child_process';
import * as dotenv from 'dotenv';

dotenv.config();

exec(
	`npx supabase gen types typescript --project-id ${process.env.SUPABASE_PROJECT_ID} > app/types/database.types.ts`,
	(err, out) => {
		if (err) {
			console.error(err);
		} else {
			console.log(out);
			console.log('DONE');
		}
	}
);
