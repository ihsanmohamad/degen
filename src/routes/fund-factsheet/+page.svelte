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

   const useStyles = createStyles((theme) => ({
		root: {},
		value: {
			my: '10px'
		},
		link: {
			textDecoration: 'none',
		},
		card: {
			'&:hover': {
				background: theme.fn.themeColor('gray', 2)
			}
		}
	}));

	$: ({ classes } = useStyles());
</script>

<div class={classes.root}>
<a  href={"/fund-factsheet/rhb-dana-hazeem"} class={classes.link}>
<Paper withBorder p="md" radius="md" class={classes.card}>
	<Group position="apart">
		<div>
			<Text weight="bold" size="xl" class={classes.value}>
				RHB Dana Hazeem
			</Text>
			<Text color="dimmed" size="sm" class={classes.value}>
				RHB ASSET MANAGEMENT SDN BHD
			</Text>
		</div>
	</Group>
</Paper>
</a>
</div>