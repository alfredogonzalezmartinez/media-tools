import type { CloudinaryImage } from './types';

export function parseCloudinaryImage(image: CloudinaryImage): AppImage {
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
