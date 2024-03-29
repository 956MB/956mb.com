import { IEntry, IEntryGroup, IEntryGroups } from "./interfaces";

// NOTE: icons

export const icon_adobe: IEntry = {
	id: "icon_photoshop",
	title: "Adobe Rosetta Icons",
	date: "1.1.2024",
	category: "icon",
    summary: [
		"Variant Rosetta style icons for various Adobe applications (Photoshop, Illustrator, Bridge, InDesign, Audition). Made by me.",
	],
	link: "https://store.956mb.com/l/adobe-rosetta-icons",
	count: 30,
	items: [
		{
			path: "/images/adobe-icons/rosetta-thumb.gif",
			width: 1024,
			height: 1024,
		},
	],
};

export const icon_vscodium: IEntry = {
	id: "icon_vscodium",
	title: "VSCodium",
	date: "10.28.2023",
	category: "icon",
    summary: [
		"B/W versions of an unofficial VSCodium icon. Credit to <a href=\"https://github.com/VSCodium/vscodium/issues/491#issuecomment-729040072\">@setanarut</a> for the original variation of the logo.",
	],
	link: "https://store.956mb.com/l/vscodium-icon",
	count: 2,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://github.com/VSCodium/vscodium/issues/491#issuecomment-729040072\">@setanarut</a>",
	items: [
		{
			path: "/images/extras/icons/vscodium-1.png",
			width: 1024,
			height: 1024,
		},
	],
};

export const icon_parallels: IEntry = {
	id: "icon_parallels",
	title: "Parallels",
	date: "09.08.2023",
	category: "icon",
    summary: [
		"My edits to a custom Parallels icon by <a href=\"https://www.reddit.com/r/MacOS/comments/mucnsz/i_got_tired_of_the_parallels_desktop_icon_not/2\">u/JonMarksbury</a>, using the Windows 11 background. Credit to him for the original concept.",
	],
	link: "https://store.956mb.com/l/parallels-icon",
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.reddit.com/r/MacOS/comments/mucnsz/i_got_tired_of_the_parallels_desktop_icon_not/2\">u/JonMarksbury</a>",
	items: [
		{
			path: "/images/extras/icons/parallels-1.png",
			width: 1024,
			height: 1024,
		},
	],
};

export const icon_tdb: IEntry = {
	id: "icon_tdb",
	title: "TDB",
	date: "09.03.2023",
	category: "icon",
    summary: [
		"App icon for my iOS/iPadOS/macOS app <a href=\"https://www.tdb.fyi/\">TDB</a>. Made by me.",
	],
	items: [
		{
			path: "/images/extras/icons/tdb.png",
			width: 1024,
			height: 1024,
		},
	],
};

export const icon_2048we: IEntry = {
	id: "icon_2048we",
	title: "2048WE",
	date: "06.22.2023",
	category: "icon",
    summary: [
		"The custom app icon for my Apple Watch app, 2048WE (Apple Watch Edition). Made by me.",
	],
	link: "https://store.956mb.com/l/2048we-icon",
	count: 4,
	items: [
		{
			path: "/images/extras/icons/2048WE/2048WE.png",
			width: 512,
			height: 512,
		},
	],
};

export const icons = [
    icon_adobe,
	icon_vscodium,
    icon_parallels,
    icon_tdb,
    icon_2048we
];
export const icons_section: IEntryGroup = {
	title: "Icons",
	category: "icons",
	description:
		"App icons I have personally created or just slightly modified",
	items: icons,
    credit: false
};

// NOTE: wallpapers

export const extra_hongdae_variants: IEntry = {
	id: "extra_hongdae_variants",
	title: "Apple Store 홍대 Variants",
	date: "1.15.2024",
	category: "wallpaper",
	tags: ["6K", "color"],
	summary: [
		"Eight color variations of the Apple Store Hongdae (홍대) wallpapers. The grey brought down to black, and several Lightroom changes to add some variety. I did not design these!",
	],
	link: "https://drive.google.com/drive/folders/1lJRSJZwxUlsaq0SXEuaK57L-cK8vq4sH?usp=sharing",
    count: 8,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.apple.com/kr/retail/hongdae/\">Apple 홍대.</a>",
	items: [
		{
			path: "/images/extras/wallpapers/hongdae-variants-thumb.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_graffiti_variants: IEntry = {
	id: "extra_graffiti_variants",
	title: "Graffiti Variants",
	date: "12.29.2023",
	category: "wallpaper",
	tags: ["6K", "color"],
	summary: [
		"Several color variants of the great graffiti wallpaper by <a href=\"https://twitter.com/BasicAppleGuy\">@BasicAppleGuy</a>. I DID NOT DESIGN THIS, ONLY MODIFIED IT. Credit to him for the amazing art.",
	],
	link: "https://drive.google.com/drive/folders/1oI_40YXzpUyvsNE6RHtasf7fuyO_lcD8?usp=sharing",
    count: 5,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://basicappleguy.com/haberdashery/graffiti\">@BasicAppleGuy</a>",
	items: [
		{
			path: "/images/extras/wallpapers/graffiti-variant-thumb.png",
			width: 1920,
			height: 1245,
		},
	],
};

export const extra_d: IEntry = {
	id: "extra_d",
	title: "\"D\" / \"O\"",
	date: "12.29.2023",
	category: "wallpaper",
	tags: ["6K", "paint"],
	summary: [
		"I have NO idea what this is, I just started painting. Made by me. <a href=\"https://www.956mb.com/designs/#logo_d\">\"D\" / \"O\"</a>. ",
	],
	link: "https://drive.google.com/drive/folders/1mYTo3YpLKCwEOMqpEMnuSm0Sqar4z5qj?usp=sharing",
	items: [
		{
			path: "/images/concepts/d/d-wallpaper-thumb.png",
			width: 2304,
			height: 1296,
		},
	],
};

export const extra_pLan: IEntry = {
	id: "extra_pLan",
	title: "pLan",
	date: "12.29.2023",
	category: "wallpaper",
	tags: ["6K", "paint"],
	summary: [
		"Painting used as the banner/background of my fake programming language \"brand\", <a href=\"https://www.956mb.com/designs/#logo_plan\">pLan</a>. Made by me.",
	],
    count: 2,
	link: "https://drive.google.com/drive/folders/1HNcP5ZXG5qLHVh9LqCcKtsjbRhOXWd_s?usp=sharing",
	items: [
		{
			path: "/images/concepts/pLan/pLan-thumb.png",
			width: 2048,
			height: 1152,
		},
	],
};

export const extra_polestar_synergy: IEntry = {
	id: "extra_polestar_synergy",
	title: "Polestar Synergy",
	date: "09.14.2023",
	category: "wallpaper",
	tags: ["5K"],
	summary: [
		"Photos of the Polestar Synergy prototype from the Polestar Design Contest 2022/23. All credit to <a href=\"hhttps://about.polestar.com/polestar-design-contest/2022/\">Polestar</a> for the photogrpahs.",
	],
	link: "https://drive.google.com/drive/folders/1-naPWu9jKup8hzA-rwvFCK-5hIV5vpP7?usp=sharing",
	count: 5,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://about.polestar.com/polestar-design-contest/2022/\">Polestar</a>",
	items: [
		{
			path: "/images/extras/wallpapers/Polestar-Synergy-Back.png",
			width: 1920,
			height: 2242,
		},
	],
};

export const extra_maybe_tomorrow: IEntry = {
	id: "extra_maybe_tomorrow",
	title: "maybe tomorrow...",
	date: "09.13.2023",
	category: "wallpaper",
	tags: ["5K", "COLOR"],
	summary: [
		'Upscaled, cleaned and recolored versions of the AMAZING "maybe tomorrow..." album art from <a href="http://www.lowroarmusic.com/">Low Roar</a>. RIP Ryan Karazija.',
	],
	link: "https://drive.google.com/drive/folders/1BuaV2bpohb--hNgEav1sElaX-LXYMP91?usp=sharing",
	count: 4,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.lowroarmusic.com/\">RIP Ryan Karazija</a>",
	items: [
		{
			path: "/images/extras/wallpapers/maybe-tomorrow-red.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_ghibli_colors: IEntry = {
	id: "extra_ghibli_colors",
	title: "スタジオジブリ作品: Colors",
	date: "09.12.2023",
	category: "wallpaper",
	tags: ["5K", "COLOR"],
	summary: [
		"The beautiful Studio Ghibli wordmark and logo in a variety of colors. Logo property of <a href=\"https://www.ghibli.jp/\">Studio Ghibli</a>.",
	],
	link: "https://drive.google.com/drive/folders/1zuMZQfx7B_pTh7Y1vErBXOpoWqe6ik1k?usp=sharing",
	count: 25,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.ghibli.jp/\">Studio Ghibli</a>",
	items: [
		{
			path: "/images/extras/wallpapers/ghibli-colors-green3.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_ghibli_greens: IEntry = {
	id: "extra_ghibli_greens",
	title: "Ghibli Greens",
	date: "09.11.2023",
	category: "wallpaper",
	tags: ["5K"],
	summary: [
		'My Favorite greenery frames from every <a href=\"https://www.ghibli.jp/\">Studio Ghibli</a>. movie. Credit to <a href="https://www.reddit.com/r/ghibli/comments/fo3mnu/thanks_to_ia_ive_made_a_collection_of_flawless_hq/?utm_source=share&utm_medium=web2x&context=3">u/Weenbell</a> for the original Reddit post containing the screen grabs.',
	],
	link: "https://drive.google.com/drive/folders/1hcvKaCeBN--SbUPbZbhA24J_2oyZE4Rt?usp=sharing",
	count: 111,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.ghibli.jp/\">Studio Ghibli</a>",
	items: [
		{
			path: "/images/extras/wallpapers/Ghibli-Greens-poppy-26.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_westworld_s3: IEntry = {
	id: "extra_westworld_s3",
	title: "Westworld S3",
	date: "09.10.2023",
	category: "wallpaper",
	tags: ["5K"],
	summary: [
		'Remade the Westworld "W" logo, as well as upscaled frames from the season 3 intro. All credit to <a href="http://elastic.tv/">Elastic.tv</a>, the creator of the great intro sequence.',
	],
	link: "https://drive.google.com/drive/folders/1S2GS2Dw7t_RnFX1U4yl_rjJ0-mOjkZWa?usp=sharing",
	count: 26,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"http://elastic.tv/\">Elastic.tv</a>",
	items: [
		{
			path: "/images/extras/wallpapers/WWF-deepred.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_dune: IEntry = {
	id: "extra_dune",
	title: "Dune",
	date: "09.09.2023",
	category: "wallpaper",
	tags: ["5K"],
	summary: ["Nothing needs to be said, it's Dune."],
	link: "https://drive.google.com/drive/folders/1YM573MPs-J3vYygf9N5B_NtzS2BH6PbI?usp=sharing",
	count: 1,
    credit: "???",
	items: [
		{
			path: "/images/extras/wallpapers/dune.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_armored_core_vi: IEntry = {
	id: "extra_armored_core_vi",
	title: "ARMORED CORE VI FIRES OF RUBICON",
	date: "09.08.2023",
	category: "wallpaper",
	tags: ["5K"],
	summary: [
		"Frames from the 'ARMORED CORE VI FIRES OF RUBICON' reveal trailer, upscaled to 5K. Images from the trailer property of <a href=\"https://www.fromsoftware.jp/ww/\">FromSoftware</a> and <a href=\"https://www.bandainamcoent.com/\">Bandai Namco</a>.",
	],
	link: "https://drive.google.com/drive/folders/1MMuairvZA4f0Gb8miA26VI1_ytuXxEyl?usp=sharing",
	count: 9,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.fromsoftware.jp/ww/\">Bandai Namco</a>",
	items: [
		{
			path: "/images/extras/wallpapers/ACVI-00027.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_colors_and_shapes: IEntry = {
	id: "extra_colors_and_shapes",
	title: "Colors and Shapes",
	date: "09.07.2023",
	category: "wallpaper",
	tags: ["5K"],
	summary: [
		"Frames from <a href=\"https://www.macmillerswebsite.com/\">Mac Miller</a>'s (RIP) music video for 'Colors and Shapes'. All credit to <a href=\"https://www.stashmedia.tv/mac-miller-colors-and-shapes-by-sam-mason-and-hornet/\">Hornet/Sam Mason/Stash</a> for creation of the video.",
	],
	link: "https://drive.google.com/drive/folders/15pwpAQRDgW4TadCb07zq2TUDR5GtgMLk?usp=sharing",
	count: 15,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.stashmedia.tv/mac-miller-colors-and-shapes-by-sam-mason-and-hornet/\">Hornet/Sam Mason/Stash</a>. RIP Mac.",
	items: [
		{
			path: "/images/extras/wallpapers/CASWF-00169.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_hassan_massoudy: IEntry = {
	id: "extra_hassan_massoudy",
	title: "Hassan Massoudy",
	date: "09.07.2023",
	category: "wallpaper",
	tags: ["5K", "B/W"],
	summary: [
		"Almost every <a href=\"https://www.massoudy.net/\">Hassan Massoudy</a> piece, upscaled to 5K and modified to dark black and white. All credit to him for the absolutey phenomenal calligraphy.",
	],
	link: "https://drive.google.com/drive/folders/1i0Zf3II5JaSc4s6JnyORfPiu5Lnzm5gT?usp=sharing",
	count: 172,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.massoudy.net/\">Hassan Massoudy</a>",
	items: [
		{
			path: "/images/extras/wallpapers/_0010_HM326.png",
			width: 1920,
			height: 1502,
		},
	],
};

export const extra_oppenheimer: IEntry = {
	id: "extra_oppenheimer",
	title: "Oppenheimer Teaser",
	date: "09.05.2023",
	category: "wallpaper",
	tags: ["5K", "CROP"],
    summary: [
        "Just a crop of an early Oppenheimer teaser poster, upscaled to 5K. Credit I suppose to <a href=\"https://www.instagram.com/syncopyofficial/?hl=en\">Syncopy Inc.</a> as creators of the poster, and the film of course."
    ],
	link: "https://drive.google.com/drive/folders/1wZj5UQEBC6nW9DHeX3l1XZV31JuhIKlh?usp=sharing",
	count: 1,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.instagram.com/syncopyofficial/?hl=en\">Syncopy Inc.</a>",
	items: [
		{
			path: "/images/extras/wallpapers/oppenheimer.jpg",
			width: 1920,
			height: 1080,
		},
	],
};

export const extra_cybertruck: IEntry = {
	id: "extra_cybertruck",
	title: "Cybertruck Redesign",
	date: "09.04.2023",
	category: "wallpaper",
	tags: ["5K", "MANIPULATION"],
	summary: [
		'My photo manipulation and upscaling of a Cybertruck concept from <a href="https://www.reddit.com/r/cybertruck/comments/mlshr8/what_are_your_thoughts_about_this_for_farming_or/?utm_source=share&utm_medium=web2x&context=3">???</a> on Reddit. Credit to him for the original modification of Cybertruck design.',
	],
	link: "https://drive.google.com/drive/folders/1d2DtdnDqvSqY4KfGYtSjHVkodIIr9mjn?usp=sharing",
	count: 1,
    credit: "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.reddit.com/r/cybertruck/comments/mlshr8/what_are_your_thoughts_about_this_for_farming_or/?utm_source=share&utm_medium=web2x&context=3\">???</a>",
	items: [
		{
			path: "/images/extras/wallpapers/cybertruck-redesign.png",
			width: 1920,
			height: 1080,
		},
	],
};

export const wallpapers = [
    extra_hongdae_variants,
    extra_graffiti_variants,
    extra_d,
    extra_pLan,
	extra_polestar_synergy,
	extra_maybe_tomorrow,
	extra_ghibli_colors,
	extra_ghibli_greens,
	extra_westworld_s3,
	extra_dune,
	extra_armored_core_vi,
	extra_colors_and_shapes,
	extra_hassan_massoudy,
	extra_oppenheimer,
	extra_cybertruck,
];
export const wallpapers_section: IEntryGroup = {
	title: "Wallpapers",
	category: "wallpapers",
	description:
		"Collection of my favorite wallpapers that I've upscaled to 6K and/or edited for my own use",
	items: wallpapers,
    credit: true
};

export const groups: IEntryGroups = [icons_section, wallpapers_section];
