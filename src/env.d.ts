/// <reference path="../.astro/types.d.ts" />

// ###> astro-i18n/type-generation ###
type PrimaryLocale = "en"
type SecondaryLocale = "it"|"de"|"fr"
type Locale = PrimaryLocale | SecondaryLocale
type RouteParameters = {"/":undefined;}
type Route = keyof RouteParameters
type TranslationVariables = {"index.title":object|undefined;"index.collab":object|undefined;"index.meta.keywords":object|undefined;"index.meta.description":object|undefined;"index.meta.url":object|undefined;"nav.contact":object|undefined;"nav.cookie":object|undefined;"about.age":object|undefined;"about.ongoing":object|undefined;"about.tbd":object|undefined;"about.months.0":object|undefined;"about.months.1":object|undefined;"about.months.2":object|undefined;"about.months.3":object|undefined;"about.months.4":object|undefined;"about.months.5":object|undefined;"about.months.6":object|undefined;"about.months.7":object|undefined;"about.months.8":object|undefined;"about.months.9":object|undefined;"about.months.10":object|undefined;"about.months.11":object|undefined;"about.experience.0":object|undefined;"about.experience.1":object|undefined;"about.experience.2":object|undefined;"about.experience.3":object|undefined;"about.education.0":object|undefined;"about.education.1":object|undefined;"about.education.2":object|undefined;"about.education.3":object|undefined;"about.education.4":object|undefined;"about.education.5":object|undefined;"about.languages.0":object|undefined;"about.languages.1":object|undefined;"about.languages.2":object|undefined;"about.languages.3":object|undefined;"about.languages.4":object|undefined;"about.languages.5":object|undefined;"about.exhibition.0":object|undefined;"about.exhibition.1":object|undefined;"about.exhibition.2":object|undefined;"about.cv":object|undefined;"projects.0.Title":object|undefined;"projects.0.Category":object|undefined;"projects.0.year":object|undefined;"projects.0.description":object|undefined;"projects.1.Title":object|undefined;"projects.1.Category":object|undefined;"projects.1.year":object|undefined;"projects.1.description":object|undefined;"projects.2.Title":object|undefined;"projects.2.Category":object|undefined;"projects.2.year":object|undefined;"projects.2.description":object|undefined;"projects.3.Title":object|undefined;"projects.3.Category":object|undefined;"projects.3.year":object|undefined;"projects.3.description":object|undefined;"projects.4.Title":object|undefined;"projects.4.Category":object|undefined;"projects.4.year":object|undefined;"projects.4.description":object|undefined;"projects.5.Title":object|undefined;"projects.5.Category":object|undefined;"projects.5.year":object|undefined;"projects.5.description":object|undefined;"projects.6.Title":object|undefined;"projects.6.Category":object|undefined;"projects.6.year":object|undefined;"projects.6.description":object|undefined;"projects.7.Title":object|undefined;"projects.7.Category":object|undefined;"projects.7.year":object|undefined;"projects.7.description":object|undefined;"projects.8.Title":object|undefined;"projects.8.Category":object|undefined;"projects.8.year":object|undefined;"projects.8.description":object|undefined;"projects.9.Title":object|undefined;"projects.9.Category":object|undefined;"projects.9.year":object|undefined;"projects.9.description":object|undefined;"projects.10.Title":object|undefined;"projects.10.Category":object|undefined;"projects.10.year":object|undefined;"projects.10.description":object|undefined;"projects.11.Title":object|undefined;"projects.11.Category":object|undefined;"projects.11.year":object|undefined;"projects.11.description":object|undefined;"projects.12.Title":object|undefined;"projects.12.Category":object|undefined;"projects.12.year":object|undefined;"projects.12.description":object|undefined;"projects.13.Title":object|undefined;"projects.13.Category":object|undefined;"projects.13.year":object|undefined;"projects.13.description":object|undefined;"projects.14.Title":object|undefined;"projects.14.Category":object|undefined;"projects.14.year":object|undefined;"projects.14.description":object|undefined;}
type Translation = keyof TranslationVariables
type Environment = "none"|"node"|"browser"
declare module "astro-i18n" {
	type GetStaticPathsProps = {paginate:Function;rss:Function}
	type GetStaticPathsItem = {params:Record<string,number|string|undefined>;props?:Record<string,unknown>}
	type DeepStringRecord = {[key: string]:string|DeepStringRecord}
	type TranslationDirectory = {i18n?:string;pages?: string}
	export type Translations = {[group: string]:{[locale: string]: DeepStringRecord}}
	export type TranslationFormatters = {[formatterName: string]:(value:unknown,...args:unknown[])=>unknown}
	export type TranslationLoadingRules = {groups:string[];routes: string[]}[]
	export type SegmentTranslations = {[secondaryLocale: string]:{[segment: string]:string}}
	export interface AstroI18nConfig {primaryLocale:string;secondaryLocales:string[];fallbackLocale:string;showPrimaryLocale:boolean;trailingSlash:"always"|"never";run:"server"|"client+server";translations:Translations;translationLoadingRules:TranslationLoadingRules;translationDirectory:TranslationDirectory;routes:SegmentTranslations;srcDir:string;}
	/** Typed astro-i18n config definition. */
	export function defineAstroI18nConfig(config: Partial<AstroI18nConfig>): Partial<AstroI18nConfig>
	/** The `astro-i18n` middleware. */
	export function useAstroI18n(
		config?: Partial<AstroI18nConfig> | string,
		formatters?: TranslationFormatters,
	): (...args: any[]) => any
	/** Workaround function to make astroI18n work inside getStaticPaths. This is because Astro's getStaticPaths runs before everything which doesn't allows astroI18n to update its state automatically. */
	function createGetStaticPaths(
		callback: (
			props: GetStaticPathsProps,
		) => GetStaticPathsItem[] | Promise<GetStaticPathsItem[]>,
	): (props: GetStaticPathsProps & {
		astroI18n?: {
			locale: string;
		};
	}) => Promise<GetStaticPathsItem[]>
	/**
	 * @param key The translation key, for example `"my.nested.translation.key"`.
	 * @param properties An object containing your interpolation variables and/or your variants, for example `{ variant: 3, interpolation: "text" }`.
	 * @param options `route`: Overrides the current route, you will be able to access that route's translations. `locale`: Overrides the current locale, this allows you to control which language you want to translate to. `fallbackLocale`: Overrides the fallback locale.
	 */
	export function t<T extends Translation>(
		key: T | string & {},
		...args: undefined extends TranslationVariables[T]
			? [
				properties?: keyof TranslationVariables extends T 
					? Record<string, unknown> 
					: TranslationVariables[T], 
				options?: {
					route?: Route | string & {}
					locale?: Locale | string & {}
					fallbackLocale?: Locale | string & {}
				}
			]
			: [
				properties: TranslationVariables[T], 
				options?: {
					route?: Route | string & {}
					locale?: Locale | string & {}
					fallbackLocale?: Locale | string & {}
				}
			]
	): string
	/**
	 * @param route A route in any of the configured languages, for example `"/en/my/english/route/[param]"`.
	 * @param parameters An object containing your route parameters, for example `{ slug: "my-blog-post-slug" }`.
	 * @param options `targetLocale`: Overrides the target locale. `routeLocale`: Overrides the given route locale, this is useful if astro-i18n cannot figure out the route's locale. `showPrimaryLocale`: Overrides the showPrimaryLocale parameter. `query`: Adds these query parameters at the end of the translated route.
	 */
	export function l<T extends Route>(
		route: T | string & {},
		...args: T extends keyof RouteParameters
			? undefined extends RouteParameters[T]
				? [
					parameters?: Record<string, string>, 
					options?: { 
						targetLocale?: string, 
						routeLocale?: string,
						showPrimaryLocale?: string,
						query?: Record<string, unknown>
					}
				]
				: [
					parameters: RouteParameters[T], 
					options?: { 
						targetLocale?: string, 
						routeLocale?: string,
						showPrimaryLocale?: string,
						query?: Record<string, unknown>
					}
				]
			: [
				parameters?: Record<string, string>, 
				options?: { 
					targetLocale?: string, 
					routeLocale?: string,
					showPrimaryLocale?: string,
					query?: Record<string, unknown>
				}
			]
	): string
	class AstroI18n {
		/** The detected runtime environment. */
		environment: Environment
		/** The current page route. */
		route: string
		/** All page routes. For example: `["/", "/about", "/posts/[slug]"]` */
		pages: string[]
		/** The equivalent page for the current route. For example if route is equal to `"/posts/my-cool-cat"` this could return `"/posts/[slug]"`. */
		page: string
		/** The current page locale. */
		locale: Locale
		/** All configured locales. */
		locales: Locale[]
		/** The default/primary locale. */
		primaryLocale: PrimaryLocale
		/** Locales other than the default/primary one. */
		secondaryLocales: SecondaryLocale[]
		/** The fallback locale, when a translation is missing in a locale the fallback locale will be used to find a replacement. */
		fallbackLocale: Locale
		/** True when astro-i18n is initialized. */
		isInitialized: boolean
		/**
		 * @param key The translation key, for example `"my.nested.translation.key"`.
		 * @param properties An object containing your interpolation variables and/or your variants, for example `{ variant: 3, interpolation: "text" }`.
		 * @param options `route`: Overrides the current route, you will be able to access that route's translations. `locale`: Overrides the current locale, this allows you to control which language you want to translate to. `fallbackLocale`: Overrides the fallback locale.
		 */
		t<T extends Translation>(
			key: T | string & {},
			...args: undefined extends TranslationVariables[T]
				? [
					properties?: keyof TranslationVariables extends T 
						? Record<string, unknown> 
						: TranslationVariables[T], 
					options?: {
						route?: Route | string & {}
						locale?: Locale | string & {}
						fallbackLocale?: Locale | string & {}
					}
				]
				: [
					properties: TranslationVariables[T], 
					options?: {
						route?: Route | string & {}
						locale?: Locale | string & {}
						fallbackLocale?: Locale | string & {}
					}
				]
		): string
		/**
		 * @param route A route in any of the configured languages, for example `"/en/my/english/route/[param]"`.
		 * @param parameters An object containing your route parameters, for example `{ slug: "my-blog-post-slug" }`.
		 * @param options `targetLocale`: Overrides the target locale. `routeLocale`: Overrides the given route locale, this is useful if astro-i18n cannot figure out the route's locale. `showPrimaryLocale`: Overrides the showPrimaryLocale parameter. `query`: Adds these query parameters at the end of the translated route.
		 */
		l<T extends Route>(
			route: T | string & {},
			...args: T extends keyof RouteParameters
				? undefined extends RouteParameters[T]
					? [
						parameters?: Record<string, string>, 
						options?: { 
							targetLocale?: string, 
							routeLocale?: string,
							showPrimaryLocale?: string,
							query?: Record<string, unknown>
						}
					]
					: [
						parameters: RouteParameters[T], 
						options?: { 
							targetLocale?: string, 
							routeLocale?: string,
							showPrimaryLocale?: string,
							query?: Record<string, unknown>
						}
					]
				: [
					parameters?: Record<string, string>, 
					options?: { 
						targetLocale?: string, 
						routeLocale?: string,
						showPrimaryLocale?: string,
						query?: Record<string, unknown>
					}
				]
		): string
		/** Adds new translations at runtime. */
		addTranslations(translations: Translations): this
		/** Adds new translation formatters at runtime. */
		addFormatters(translationFormatters: TranslationFormatters): this
		/** Adds new translation loading rules at runtime. */
		addTranslationLoadingRules(translationLoadingRules: TranslationLoadingRules): this
		/** Adds new route segment translations at runtime. */
		addRoutes(routes: SegmentTranslations): this
		/** Tries to parse one of the configured locales out of the given route. If no configured locale is found it will return `null`. */
		extractRouteLocale(route: string): string|null
		/** Initializes astro-i18n on the server-side. */
		initialize(config?: Partial<AstroI18nConfig> | string, formatters?: TranslationFormatters = {}): Promise<void>
		/** Redirects the user to the given destination. */
		redirect(destination: string | URL, status = 301)
	}
	export const astroI18n: AstroI18n
}
// ###< astro-i18n/type-generation ###
