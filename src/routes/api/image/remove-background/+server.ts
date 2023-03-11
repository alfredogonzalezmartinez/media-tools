import { removeBackgroundImage } from '$lib/server/services/image/removeBackground';
import { storeTemporaryWhileTaskRuns } from '$lib/server/utils/temporaryStorage/storeTemporaryWhileTaskRuns';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const file = formData.get('file') as Blob;
	const fileContent = Buffer.from(await file.arrayBuffer());

	try {
		const result = await storeTemporaryWhileTaskRuns(fileContent, (path) => {
			return removeBackgroundImage({ file: path });
		});

		return json(result);
	} catch (e) {
		// TODO: handle errors
		throw error(500);
	}
};
