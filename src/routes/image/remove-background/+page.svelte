<script>
	import ImagePicker from '$lib/components/ImagePicker/ImagePicker.svelte';
	import ToolDisabledAlert from '$lib/components/Alerts/ToolDisabledAlert.svelte';
	import ToolTitle from '$lib/components/ToolTitle/ToolTitle.svelte';
	import { IMAGE_TOOL } from '$lib/Constants/ImageTools';

	const backgroundRemover = IMAGE_TOOL.removeBackground;
</script>

<svelte:head>
	<title>{backgroundRemover.title}</title>
</svelte:head>

<ToolTitle>{backgroundRemover.title}</ToolTitle>

{#if backgroundRemover.isEnabled}
	<ImagePicker actionUrl={backgroundRemover.apiUrl} />
{:else}
	<ToolDisabledAlert />
{/if}
