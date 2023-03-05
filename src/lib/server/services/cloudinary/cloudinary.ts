import {
	PRIVATE_CLOUDINARY_API_KEY,
	PRIVATE_CLOUDINARY_API_SECRET,
	PRIVATE_CLOUDINARY_CLOUDNAME
} from '$env/static/private';
import Cloudinary from 'cloudinary';

const cloudinary = Cloudinary.v2;

cloudinary.config({
	cloud_name: PRIVATE_CLOUDINARY_CLOUDNAME,
	api_key: PRIVATE_CLOUDINARY_API_KEY,
	api_secret: PRIVATE_CLOUDINARY_API_SECRET,
	secure: true
});

export { cloudinary };
