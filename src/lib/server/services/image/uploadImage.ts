import { PRIVATE_CLOUDINARY_UPLOAD_PRESET } from '$env/static/private';
import { cloudinary } from '../cloudinary/cloudinary';
import { parseCloudinaryImage } from '../cloudinary/parseCloudinaryImage';
import type { CloudinaryImage } from '../cloudinary/types';

type options = {
	file: string;
};

export async function uploadImage({ file }: options): Promise<AppImage> {
	const image = (await cloudinary.uploader.unsigned_upload(
		file,
		PRIVATE_CLOUDINARY_UPLOAD_PRESET
	)) as CloudinaryImage;

	return parseCloudinaryImage(image);
}
