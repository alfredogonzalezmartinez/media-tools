<script>
	import ContentContainer from '$lib/components/ContentContainer/ContentContainer.svelte';
	import '$lib/styles/app.postcss';
</script>

<svelte:head>
	<title>MediaTools</title>
</svelte:head>

<div class="w-full flex flex-col min-h-screen bg-slate-50">
	<header class="py-4 bg-slate-200 w-full">
		<ContentContainer>
			<a href="/">
				<h1 class="text-3xl text-orange-600 font-bold">
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
