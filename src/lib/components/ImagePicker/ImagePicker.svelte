<script lang="ts">
	import { IMAGE_ACTIONS, type IMAGE_ACTION } from '$lib/Constants/images/imageActions';
	import { getNewUniqueId } from '$lib/utils/id/getNewUniqueId';
	import Dropzone from 'dropzone';
	import { onMount } from 'svelte';

	export let action: IMAGE_ACTION;

	const dropzoneID = `dropzone-${getNewUniqueId()}`;
	const actionUrl = IMAGE_ACTIONS[action]?.url;

	onMount(() => {
		const dropzone = new Dropzone(`#${dropzoneID}`, {
			uploadMultiple: false,
			acceptedFiles: '.jpg,.png,.webp',
			maxFiles: 1
		});
	});
</script>

<form
	id={dropzoneID}
	class="flex aspect-video w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 shadow-2xl"
	action={actionUrl}
>
	<button
		class="text-bold pointer-events-none rounded-full bg-orange-600 px-6 py-4 text-xl font-bold text-white"
	>
		Upload image
	</button>
	<strong class="mt-4 text-lg text-gray-500">or drop a image</strong>
</form>
