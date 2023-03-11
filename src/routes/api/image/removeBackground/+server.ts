import { removeBackgroundImage } from '$lib/server/services/image/removeBackground';
import { storeTemporaryWhileTaskRuns } from '$lib/server/utils/temporaryStorage/storeTemporaryWhileTaskRuns';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const file = formData.get('file') as Blob;
	const fileContent = Buffer.from(await file.arrayBuffer());

	try {
		const result = await storeTemporaryWhileTaskRuns(fileContent, (path) => {
			return removeBackgroundImage({ file: path });
		});

		return new Response(JSON.stringify(result));
	} catch (e) {
		// TODO: handle errors
		throw error(500);
	}
};
