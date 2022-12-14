<script lang="ts">
	import { createStyles, ShellSection } from '@svelteuidev/core';
	import { BarChart2, Settings, LogOut, LineChart, ClipboardList, Contact } from 'lucide-svelte';
	import { page } from '$app/stores';

	let path: string;
	export let toggleOpen: () => void;

	$: path = $page.url.pathname;

	type Data = {
		link: string;
		label: string;
		icon: Object;
		external?: boolean;
	};

	const data: Data[] = [
		{ link: '/fund-information', label: 'Fund Information', icon: Contact },
		{ link: '/fund-performance', label: 'Fund Performance', icon: LineChart },
		{ link: '/annual-report', label: 'Semi Annual Report', icon: ClipboardList },
		{ link: '/fund-factsheet', label: 'Fund Factsheet', icon: BarChart2 }
	];

	const footerData: Data[] = [
		{
			link: '/',
			label: 'Settings',
			icon: Settings,
		},
		{
			link: '',
			label: 'Logout',
			icon: LogOut
		}
	];

	const useStyles = createStyles((theme) => ({
		root: {},
		navLink: {
			d: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm.value,
			fontWeight: 500,
			padding: '$xsPX',
			borderRadius: theme.radii.sm.value,
			[`${theme.dark} &`]: {
				bc: theme.fn.themeColor('dark', 7),
				color: theme.fn.themeColor('gray', 5),
				'&:hover': {
					bc: theme.fn.themeColor('gray', 9),
					color: 'white'
				}
			},
			backgroundColor: 'white',
			'&:hover': {
				bc: theme.fn.themeColor('gray', 0),
				color: theme.fn.themeColor('dark', 9)
			},
			color: theme.fn.themeColor('dark', 5),
			'&.active': {
				[`${theme.dark} &`]: {
					bc: theme.fn.themeColor('blue', 9),
					color: 'white',
					'& .linkIcon': {
						color: theme.fn.themeColor('blue', 3)
					}
				},
				bc: theme.fn.themeColor('blue', 0),
				color: theme.fn.themeColor('blue', 7)
			}
		},
		linkIcon: {
			marginRight: theme.space.smPX
		},
		footer: {
			pt: '$mdPX',
			mt: '$mdPX',
			borderTop: `1px solid ${theme.fn.themeColor('gray', 2)}`,
			[`${theme.dark} &`]: {
				borderTop: `1px solid ${theme.fn.themeColor('dark', 4)}`
			}
		}
	}));

	$: ({ classes, cx } = useStyles());
</script>

<ShellSection grow class={classes.root}>
	{#each data as item (item)}
		<a
			href={item.link}
			on:click={toggleOpen}
			class={cx(classes.navLink, { active: item.link === path })}
		>
			<svelte:component this={item.icon} class={classes.linkIcon} />
			<span>{item.label}</span>
		</a>
	{/each}
</ShellSection>
<ShellSection class={classes.root}>
	<div class={classes.footer}>
		{#each footerData as footerItem (footerItem)}
			<a
				href={footerItem.link}
				on:click={toggleOpen}
				class={classes.navLink}
				target={footerItem.external ? '_blank' : null}
			>
				<svelte:component this={footerItem.icon} class={classes.linkIcon} />
				<span>{footerItem.label}</span>
			</a>
		{/each}
	</div>
</ShellSection>