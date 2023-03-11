type Action = {
	url: string;
};

type ImageActions = {
	[action in IMAGE_ACTION]: Action;
};

export enum IMAGE_ACTION {
	Upload = 'upload',
	RemoveBackground = 'removeBackground'
}

export const IMAGE_ACTIONS: ImageActions = {
	upload: { url: '/api/images/upload' },
	removeBackground: { url: '/api/images/remove-background' }
};
