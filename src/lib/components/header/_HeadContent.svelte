<script lang="ts">
	import Logo from '$lib/images/Logo.svelte';
	import { Group, Text, Burger, Input } from '@svelteuidev/core';
	import { Search } from 'lucide-svelte';
	export let opened: boolean;
	export let toggleOpen: () => void;
</script>

<Group override={{ height: '100%', '@md': { px: 20 } }} position="apart">
	<Burger {opened} on:click={toggleOpen} override={{ d: 'block', '@md': { d: 'none' } }} />
	<a href="/" style="text-decoration: none;">
		<Group>
			<Logo size={35} />
			<Text color="blue" size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>
				Degen Interflow
			</Text>
		</Group>
	</a>
	<Input icon={Search} 
  placeholder="Search"
  radius="lg"
 />
</Group>