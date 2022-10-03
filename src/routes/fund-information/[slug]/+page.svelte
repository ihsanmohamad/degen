<script lang="ts">
     /** @type {import('./$types').PageData} */
     export let data;
	import {
		createStyles,
		Group,
		Paper,
		Space,
		Text,
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
		}
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
                <Text color="dimmed" size="sm" >
                    Latest Nav Price <Info />
                </Text>
                <Text weight="bold" size="xl" >
					MYR {data.latestNavPrice}
				</Text>
            </div>
		</Group>
	</Paper>
    <Space h="lg" />
    <Paper withBorder p="md" radius="md">
        <Text weight="bold" size="xl" class={classes.value}>
            Fund Information
        </Text>
        <SimpleGrid  cols={2} class={classes.infoSection}>
            <div>
                <Group direction="column" align="baseline">
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Asset Class
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.assetClass}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Sector
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.sector}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Geographical Allocation
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.geoAllocation}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Approved by EPF
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.isApproved ? 'Yes' : 'No'}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Shariah Compliant
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.isShariahCompliant ? 'Yes' : 'No'}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            RSP Special List
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.isRspSpecialList ? 'Yes' : 'No'}
                        </Text>
                    </div>
                </Group>
            </div>
            <div>
                <Group direction="column" align="baseline">
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            ESG
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.isEsg ? "Yes" : "No"}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Fund Size (as at 31 Aug 2022)
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.fundSize}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Launch Date
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.launchDate}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Launch Price
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.launchPrice}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Pricing Basis
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.pricingBasis}
                        </Text>
                    </div>
                    <div>
                        <Text weight="bold" size="md" class={classes.value}>
                            Wholesale Fund
                        </Text>
                        <Text size="md" class={classes.value}>
                            {data.isWholesaleFund ? 'Yes' : 'No'}
                        </Text>
                    </div>
                </Group>
            </div>
        </SimpleGrid>
    </Paper>
</div>