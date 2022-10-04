<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	import { createStyles, Group, Paper, Space, Text, SimpleGrid } from '@svelteuidev/core';
	import SparkLine from '$lib/components/charts/SparkLine.svelte';

	import { Landmark, Info } from 'lucide-svelte';
	import Stats from 'lib/components/Stats.svelte';

	const useStyles = createStyles((theme) => ({
		root: {},
		infoSection: {
			my: '$12'
		},
		label: {
			fontFamily: '$fallback',
			fontWeight: '$bold'
		},
		value: {
			mt: '10px'
		},
        stats: {
            display: 'flex',
            flexDirection: 'column'
        },
		diff: {
			mt: '16px'
		}
	}));

	$: ({ classes } = useStyles());

    type annualReturnType = {
        title: string;
		value: number | string;
        diff: number;
    }

    const annualReturnData : annualReturnType[] = [
        {
            title: '1Y',
            value: 24.17,
            diff: 24
        },
        {
            title: '2Y',
            value: 7.32,
            diff: 7
        },
        {
            title: '3Y',
            value: -2.73,
            diff: -2
        },
        {
            title: '5Y',
            value: 3.89,
            diff: 3
        },
        {
            title: '10Y',
            value: 'NIL',
            diff: 0
        }

    ]
</script>

<div class={classes.root}>
	<Paper withBorder p="md" radius="md">
		<Group position="apart">
			<div>
				<Text weight="bold" size="xl">
					{data.portfolioName}
				</Text>
				<Text color="dimmed" size="sm">
					<Landmark />
					{data.portfolioCompany}
				</Text>
			</div>
			<div>
				<Text color="dimmed" size="sm">
					Latest Nav Price <Info />
				</Text>
				<Text weight="bold" size="xl">
					MYR {data.latestNavPrice}
				</Text>
			</div>
		</Group>
	</Paper>
	<Space h="lg" />
	<SparkLine />
	<Space h="lg" />
	<Paper withBorder p="md" radius="md">
		<Text weight="bold" size="md" class={classes.value}>Annualised Returns (MYR)</Text>
        <SimpleGrid cols={5}>
            {#each annualReturnData as annualReturn (annualReturn.title)}
                <Stats data={annualReturn}/>
            {/each}
        </SimpleGrid>
	</Paper>
</div>
