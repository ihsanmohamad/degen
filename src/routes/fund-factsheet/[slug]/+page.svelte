<script lang="ts">
     /** @type {import('./$types').PageData} */
     export let data;
	import {
		createStyles,
		Group,
		Paper,
		Space,
		Text,
        Tooltip,
        Button,
        SimpleGrid
	} from '@svelteuidev/core';

    import { Landmark, Info } from 'lucide-svelte';

	const useStyles = createStyles((theme) => ({
		root: {},
        infoSection: {
            my: '$12',
        },
		label: {
			fontFamily: '$fallback',
			fontWeight: '$bold'
		},
		value: {
			mt: '10px'
		},
		diff: {
			mt: '16px'
		},
        center: {
			my: '$12',
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		},
	}));

	$: ({ classes } = useStyles());
</script>

<div class={classes.root}>
	<Paper withBorder p="md" radius="md">
		<Group position="apart">
			<div>
				<Text weight="bold" size="xl" >
					{data.portfolioName}
				</Text>
                <Text color="dimmed" size="sm" >
                    <Landmark /> {data.portfolioCompany}
                </Text>
			</div>
            <div>
                <Text weight="bold" size="xl" >
                    SEPTEMBER 2022
                </Text>
                <Text weight="bold" size="xl" >
					FUND FACTSHEET
				</Text>
            </div>
		</Group>
	</Paper>
    <Space h="lg" />
    <Paper withBorder p="md" radius="md">
        <SimpleGrid cols={2} >
            <img src="/1.png" alt="">
            <img src="/2.png" alt="">
        </SimpleGrid>
        <div class={classes.center}>
            <Tooltip
            wrapLines
            width={220}
            withArrow
            color="yellow"
            position="right"
            label='Concentration risk is accepted, within multiple industries, as the probability of loss due to a large dependence on a single vendor, geographic area, or investment portfolio.'
            >
            <Button color="#FF4F4F">Concentrated <Info slot="rightIcon"/></Button>
        </Tooltip>
    </div>
    </Paper>
</div>