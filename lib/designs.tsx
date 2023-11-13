import { IEntry, IEntryGroup, IEntryGroups } from "./interfaces";

// NOTE: concepts

export const design_tdb_landing: IEntry = {
    id: "design_tdb_landing",
    title: "TDB Landing Site",
    date: "09.28.2023",
    category: "figma",
    summary: [
        "Very simple and VERY static landing page design for my iOS/iPadOS/macOS app, TDB. The idea of the app and it's overall functionality is super easy to understand, so I thought it's landing site should be the same. There's no need for a bunch of animations or slides advertising what it can do, one page with a demo and a download button should be enough. (NOT on the App Store yet.)",
    ],
    images: [
        {
            path: "/images/concepts/tdb-landing/tdb-landing-1.png",
            width: 2880,
            height: 2160,
        },
    ],
};

export const design_wallpaper_sync: IEntry = {
	id: "design_wallpaper_sync",
	title: "WallpaperSync",
    date: "08.17.2023",
	category: "figma",
	summary: [
		"This is another spontaneous project idea for a desktop app to set and automatically handle your different wallpapers on multiple devices. I'm personally a Synergy user, and have been for a long time, but I also manually switch back and forth between my Mac and PC. So, my intended use case came from having a folder of auto-rotating wallpapers on my Mac that I wanted to apply the exact same way to my PC, without any manually transferring of files through Google Drive or something.",
	],
	images: [
		{
			path: "/images/wallpaper-sync/wallpaper-sync.png",
			width: 3616,
			height: 3662,
		},
	],
};

export const design_tx4: IEntry = {
	id: "design_tx4",
	title: "TX4",
    date: "06.25.2023",
	category: "figma",
	summary: [
		"An actual attempt at my previously shown app, TX4. I tried to keep the same general ideas and structure of the original Qt creation, but with a much more thought out design before going into development. This was crucial because doing things on the fly with no plan, in Qt no less, lead to a terrible look and feel. Development on it has already started in React, but is very early stages.",
	],
	images: [
		{ path: "/images/tx4-for-real/map.png", width: 2680, height: 1810 },
		{ path: "/images/tx4-for-real/main.png", width: 2680, height: 1810 },
		{ path: "/images/tx4-for-real/viewer.png", width: 2680, height: 1810 },
		{ path: "/images/tx4-for-real/loading.png", width: 2680, height: 1810 },
	],
};

export const design_comma_interface_challenge: IEntry = {
	id: "comma-interface-challenge",
	title: "Comma Interface Challenge",
    date: "11.14.2022",
	category: "figma",
	summary: [
		"This was my take (apparently not very good) on a re-design of the Comma 3 interface. It came from an interview assignment called the 'Comma Interface Challenge', where Comma wanted modifications or whole different design structures for a 'Software updater' inside the UI. I supposedly didn't fully grasp the objective of the interview challenge though.",
	],
	images: [{ path: "/images/concepts/comma.png", width: 4720, height: 2655 }],
};

export const design_intros: IEntry = {
	id: "intros",
	title: '"Tro"... "Frame"... idk',
    date: "05.18.2023",
	category: "figma",
	summary: [
		"This is a concept for a website I’ve had for a long time. It’s a website where any and all TV show or movie intro “frames” are collected. Sort of like if IMDB or Rotten Tomatoes was only for intros and end credits.",
	],
	images: [
		{ path: "/images/tro-io/ImagePage.png", width: 1920, height: 947 },
		{ path: "/images/tro-io/SimilarImages.png", width: 1920, height: 1189 },
		{ path: "/images/tro-io/Banner.png", width: 1920, height: 368 },
		{ path: "/images/tro-io/intros.png", width: 2560, height: 1440 },
		{ path: "/images/tro-io/Titlebars.png", width: 1920, height: 1074 },
	],
};

export const design_opgg_spectate: IEntry = {
	id: "opgg-spectate",
	title: 'OP.GG "Spectate pro matches" / "Pros"',
    date: "08.21.2021",
	category: "figma",
	summary: [
		"This is a concept for the OP.GG ‘Pro Matches’ feature, integrated into their desktop client. I really liked the ‘Spectate Pro Players’ part of OP.GG’s website, but I thought it would be cool if you never had to leave the desktop client to load up and spectate pro games.",
	],
	images: [
		{ path: "/images/concepts/pros/liiv.png", width: 2208, height: 999 },
		{ path: "/images/concepts/pros/mundo.png", width: 2415, height: 843 },
		{ path: "/images/concepts/pros/t1.png", width: 2300, height: 694 },
		{ path: "/images/concepts/OPGG.png", width: 1575, height: 885 },
	],
};

export const design_lol_icon_tool: IEntry = {
	id: "lol-icon-tool",
	title: "LoL Icon Tool",
    date: "08.21.2021",
	category: "react",
	summary: [
		"This concept was made before the overhaul to the borders and ranks. This website allows you to pair borders to icons to banners to customize your LoL profile, or see what combinations look good. All level and rank borders/banners and every icon would be available to preview.",
	],
	images: [{ path: "/images/concepts/LoL.png", width: 1794, height: 1009 }],
};

export const design_plan: IEntry = {
	id: "pLan",
	title: "pLan",
    date: "05.30.2020",
	category: "photoshop",
	summary: [
		"“Logo” and “brand aesthetics” for my first programming language, pLan. Which of course doesn’t actually exist yet. It’ll be done in 20 years. I guess I really like coming up with names for programming languages and creating graphics for them more than I like learning how to actually make one.",
	],
	images: [{ path: "/images/concepts/pLan.png", width: 3840, height: 2160 }],
};

export const designs = [
    design_tdb_landing,
	design_wallpaper_sync,
	design_tx4,
	design_intros,
	design_comma_interface_challenge,
	design_opgg_spectate,
	design_lol_icon_tool,
	design_plan,
];
export const designs_section: IEntryGroup = {
	title: "Concepts and Prototypes",
    category: "concept",
	description:
		"Collection of UI prototypes and ideas for past, present and future projects",
	items: designs,
};

// NOTE: scripts

export const script_circles_only: IEntry = {
	id: "script-circles-only-apparently",
	title: "Circles only, apparently",
    date: "11.12.2023",
	category: "script",
	tags: ["Circles"],
	linkBlog: "https://www.956mb.com/blog/circles-only-apparently",
	images: [
		{
			path: "/images/circles-only-apparently/circles_only_1.png",
			width: 1038,
			height: 504,
		},
		{
			path: "/images/circles-only-apparently/circles_only_2.png",
			width: 1041,
			height: 2411,
		},
		{
			path: "/images/circles-only-apparently/circles_only_3.png",
			width: 1284,
			height: 1272,
		},
		{
			path: "/images/circles-only-apparently/circles_only_4.png",
			width: 1236,
			height: 1770,
		},
	],
};

export const script_eggers_posters_gyea: IEntry = {
	id: "script-eggers-gyea",
	title: "Movie Posters",
    date: "07.19.2023",
	category: "script",
	tags: ["GYEA"],
	images: [
		{
			path: "/images/poster-edits/the-northman.png",
			width: 1500,
			height: 2202,
		},
		{
			path: "/images/poster-edits/the-revenant.png",
			width: 2000,
			height: 3000,
		},
		{ path: "/images/poster-edits/alien.png", width: 2000, height: 3000 },
		{
			path: "/images/poster-edits/the-lighthouse.png",
			width: 1778,
			height: 2667,
		},
	],
};

export const script_gyea: IEntry = {
	id: "script-hokj",
	title: '"GYEA"',
    date: "06.21.2023",
	category: "script",
	tags: ["GYEA"],
	linkBlog: "https://www.956mb.com/blog/is-this-anything",
	images: [{ path: "/images/concepts/gyea.png", width: 1745, height: 789 }],
};

export const script_brands: IEntry = {
	id: "script-brands-tab-hokj",
	title: "Brand logos",
    date: "05.25.2023",
	category: "script",
	tags: ["Tab"],
	images: [
		{
			path: "/images/brand-logos-scripts/IMG_V678.png",
			width: 1920,
			height: 1080,
		},
		{
			path: "/images/brand-logos-scripts/IMG_R78968.png",
			width: 2021,
			height: 1096,
		},
		{
			path: "/images/brand-logos-scripts/IMG_R121234.png",
			width: 2021,
			height: 1096,
		},
		{
			path: "/images/brand-logos-scripts/IMG_R90636.png",
			width: 2021,
			height: 1096,
		},
	],
};

export const script_tab: IEntry = {
	id: "script-tab",
	title: '"Tab"',
    date: "05.18.2023",
	category: "script",
	tags: ["Tab"],
	linkBlog: "https://www.956mb.com/blog/very-different-look-now",
	images: [{ path: "/images/concepts/tab.png", width: 1358, height: 929 }],
};

export const script_before_tab: IEntry = {
	id: "script-before-tab",
	title: "Before Tab",
    date: "04.23.2023",
	category: "script",
	tags: ["Tab"],
	linkBlog: "https://www.956mb.com/blog/something-new",
	images: [
		{
			path: "/images/something-new/IMG_54322.jpg",
			width: 1358,
			height: 929,
		},
	],
};

export const script_hokj: IEntry = {
	id: "script-hokj",
	title: '"Hokj"',
    date: "03.30.2023",
	category: "script",
	tags: ["Hokj"],
	linkBlog: "https://www.956mb.com/blog/continuation-variation",
	images: [{ path: "/images/concepts/hokj.png", width: 1362, height: 720 }],
};

export const scripts = [
    script_circles_only,
	script_eggers_posters_gyea,
	script_gyea,
	script_brands,
	script_tab,
	script_before_tab,
	script_hokj,
];
export const scripts_section: IEntryGroup = {
	title: "r/neography",
    category: "script",
	description:
		"Constructed scripts (and eventually conlangs) I make for fun",
	items: scripts,
};

// NOTE: sections

export const groups: IEntryGroups = [designs_section, scripts_section];