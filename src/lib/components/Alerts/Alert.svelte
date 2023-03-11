<script lang="ts">
	import { ALERT_VARIANT } from './AlertVariants';

	export let variant: ALERT_VARIANT = ALERT_VARIANT.Dark;

	type AlertStyles = {
		[variant in ALERT_VARIANT]: string;
	};

	const STYLES: AlertStyles = {
		danger: 'border-red-200 bg-red-100 text-red-800',
		dark: 'border-gray-200 bg-gray-100 text-gray-800',
		info: 'border-blue-200 bg-blue-100 text-blue-800',
		success: 'border-green-200 bg-green-100 text-green-800',
		warning: 'border-yellow-200 bg-yellow-100 text-yellow-800'
	};
</script>

<div class="{STYLES[variant]} mb-4 rounded-lg border p-4 font-semibold" role="alert">
	<slot />
</div>
