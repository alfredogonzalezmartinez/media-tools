import type { UploadApiResponse } from 'cloudinary';

export function parseCloudinaryImage(image: UploadApiResponse): AppImage {
	return {
		create_at: image.created_at,
		format: image.format,
		height: image.height,
		width: image.width,
		id: image.asset_id,
		resource_type: image.resource_type,
		size: image.bytes,
		tags: image.tags,
		url: image.secure_url
	};
}
