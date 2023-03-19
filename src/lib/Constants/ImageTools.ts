export type ImageTool = {
	apiUrl: string;
	appUrl: string;
	isEnabled: boolean;
	title: string;
};

export type ImageTools = {
	[action in ImageAction]: ImageTool;
};

export type ImageAction = (typeof IMAGE_ACTION)[keyof typeof IMAGE_ACTION];

export const IMAGE_ACTION = {
	upload: 'upload',
	removeBackground: 'removeBackground'
} as const;

export const IMAGE_TOOL: ImageTools = {
	upload: {
		apiUrl: '/api/image/upload',
		appUrl: '',
		isEnabled: false,
		title: ''
	},
	removeBackground: {
		apiUrl: '/api/remove-background',
		appUrl: '/image/remove-background',
		isEnabled: true,
		title: 'Image background remover'
	}
} as const;
