<script lang="ts">
	import { createStyles } from '@svelteuidev/core';

	type data = {
		title: string;
		value: number | string;
        diff: number;
	};

	export let data: data;

	const useStyles = createStyles((theme) => ({
		root: {},
		stats: {
			display: 'flex',
			flexDirection: 'column'
		},
		value: {
			color: data.diff > 0 ? '$teal600' : '$red600'
		}
	}));

	$: ({ classes } = useStyles());
</script>

<div class={classes.stats}>
	<p>{data.title}</p>
	<p class={classes.value}>{`${data.value === 'NIL' ? 'NIL' : `${data.value} %`}` }</p>
</div>
