export const SITE = {
	title: "Kumina's Projects",
	description: "The wikipedia of Kumina's awesome projects that never gets finished lmao.",
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'kum1na',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://discord.kumina.wtf`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'': [
			{ text: 'Home', link: 'en/home' },
		],
		'Minecraft Servers': [
			{ text: 'KuminaMC', link: 'en/kuminamc' },
		],
		'Discord Servers': [
			{ text: 'Labcord (English)', link: 'en/labcord' },
		],
		'Applications': [
			{ text: 'PaskaVPN', link: 'en/paskavpn' },
			{ text: 'BatchHelper', link: 'en/batchhelper' },
		],
	},
};
