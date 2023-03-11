<script>
	import ContentContainer from '$lib/components/ContentContainer/ContentContainer.svelte';
	import '$lib/styles/app.postcss';
</script>

<div class="flex min-h-screen w-full flex-col bg-slate-50">
	<header class="w-full bg-slate-200 py-4">
		<ContentContainer>
			<a href="/">
				<h1 class="text-3xl font-bold text-orange-600">
					Media<span class="text-gray-500">Tools</span>
				</h1>
			</a>
		</ContentContainer>
	</header>

	<main class="py-4">
		<ContentContainer>
			<slot />
		</ContentContainer>
	</main>
</div>
