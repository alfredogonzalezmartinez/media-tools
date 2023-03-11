import { temporaryWriteTask } from 'tempy';

type fileContent = string | Buffer | DataView | NodeJS.ReadableStream;

export async function storeTemporaryWhileTaskRuns<ReturnValueType>(
	fileContent: fileContent,
	callback: (tempPath: string) => ReturnValueType
): Promise<ReturnValueType> {
	const result = temporaryWriteTask(fileContent, async (tempPath) => {
		return await callback(tempPath);
	});

	return result;
}
