
<script lang="ts">
	import { Paper, Container, Title, Space, colorScheme } from '@svelteuidev/core';

	import type { AreaChartOptions, ScaleTypes, ToolbarControlTypes } from '@carbon/charts/interfaces';

	import { AreaChart } from "@carbon/charts-svelte";

	import "@carbon/styles/css/styles.css";
	import "@carbon/charts/styles.css";

    const options: AreaChartOptions = {
	height: "150px",
	grid: {
		x: {
			enabled: false
		},
		y: {
			enabled: false
		}
	},
	axes: {
		bottom: {
			visible: false,
			title: "2019 Annual Sales Figures",
			mapsTo: "date",
			scaleType: "time" as ScaleTypes.TIME
		},
		left: {
			visible: false,
			mapsTo: "value",
			scaleType: "linear" as ScaleTypes.LINEAR
		}
	},
	color: {
		gradient: {
			enabled: true
		}
	},
    legend: {  enabled: false },
	toolbar: { enabled: false }

    }

	// const options: AreaChartOptions = {
	// 	height: '400px',
	// 	axes: {
	// 		left: { mapsTo: 'value' },
	// 		bottom: { mapsTo: 'group', scaleType: 'labels' as ScaleTypes.LABELS }
	// 	},
	// 	// toolbar: {controls: [{type: 'Make fullscreen' as ToolbarControlTypes.MAKE_FULLSCREEN}]},
	// 	toolbar: { enabled: false }
	// };
</script>

<Paper withBorder p="md" radius="md">
	<Title order={4} override={{ fontSize: '' }}>Fund Performance</Title>
	<Space h="md" />
	<Container fluid>
		<AreaChart
			theme={$colorScheme === 'light' ? 'white' : 'g100'}
            data={[
                {
                    "group": "Dataset 1",
                    "date": 1558453260000,
                    "value": 2
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453320000,
                    "value": 3
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453380000,
                    "value": 5
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453440000,
                    "value": 1
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453500000,
                    "value": 4
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453560000,
                    "value": 4
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453620000,
                    "value": 3
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453680000,
                    "value": 4
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453740000,
                    "value": 2
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453800000,
                    "value": 0
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453860000,
                    "value": 5
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453920000,
                    "value": 5
                },
                {
                    "group": "Dataset 1",
                    "date": 1558453980000,
                    "value": 6
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454040000,
                    "value": 2
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454100000,
                    "value": 3
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454160000,
                    "value": 6
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454280000,
                    "value": 2
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454340000,
                    "value": 6
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454400000,
                    "value": 0
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454460000,
                    "value": 3
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454520000,
                    "value": 2
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454580000,
                    "value": 4
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454640000,
                    "value": 3
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454700000,
                    "value": 4
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454760000,
                    "value": 2
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454820000,
                    "value": 4
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454880000,
                    "value": 1
                },
                {
                    "group": "Dataset 1",
                    "date": 1558454940000,
                    "value": 1
                },
                {
                    "group": "Dataset 1",
                    "date": 1558455000000,
                    "value": 3
                },
                {
                    "group": "Dataset 1",
                    "date": 1558455060000,
                    "value": 2
                }
            ]}
			{options}
		/>
	</Container>
</Paper>