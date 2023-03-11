<script>
	import Alert from './Alert.svelte';
	import { ALERT_VARIANT } from './AlertVariants';
</script>

<Alert variant={ALERT_VARIANT.Info}><slot /></Alert>
