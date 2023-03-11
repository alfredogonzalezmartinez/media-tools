import { PRIVATE_CLOUDINARY_UPLOAD_PRESET } from '$env/static/private';
import { cloudinary } from '../cloudinary/cloudinary';
import { parseCloudinaryImage } from '../cloudinary/parseCloudinaryImage';

type options = {
	file: string;
};

export async function removeBackgroundImage({ file }: options): Promise<AppImage> {
	const image = await cloudinary.uploader.upload(file, {
		background_removal: 'cloudinary_ai',
		upload_preset: PRIVATE_CLOUDINARY_UPLOAD_PRESET
	});

	return parseCloudinaryImage(image);
}
