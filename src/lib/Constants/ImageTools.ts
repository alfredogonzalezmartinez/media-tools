enum IMAGE_ACTION {
	Upload = 'upload',
	RemoveBackground = 'removeBackground'
}

type ImageTool = {
	apiUrl: string;
	appUrl: string;
	isEnabled: boolean;
	title: string;
};

type ImageTools = {
	[action in IMAGE_ACTION]: ImageTool;
};

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
};
