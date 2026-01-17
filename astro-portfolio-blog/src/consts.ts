// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://dashing-lollipop-a699c4.netlify.app";
export const SITE_TITLE: string = "Casey Key";
export const SITE_DESCRIPTION: string = "Welcome to my blog and portfolio!";

// Repo info
export const REPO: string = "caseyjkey/astro-portfolio-blog"; // TODO: Update dynamically
export const DEFAULT_BRANCH: string = "main"; // TODO: Update dynamically

// SEO metadata
export const X_CREATOR: string = "@caseyjgkey";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Projects",
		href: "/projects",
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "About",
		href: "/about",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	it: "it",
};

// Hosting
export const HOSTING_SERVICE: "cloudflare" | "netlify" | "none" = "netlify";
