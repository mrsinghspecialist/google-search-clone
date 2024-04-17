export type WebSearchAPIResponse = {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: WebSearchResult[];
};

export type Url = {
  type: string;
  template: string;
};

export type Queries = {
  request: Request[];
  nextPage: NextPage[];
};

export type Request = {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
};

export type NextPage = {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
};

export type Context = {
  title: string;
};

export type SearchInformation = {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
};

export type WebSearchResult = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
};

export type Pagemap = {
  cse_thumbnail?: CseThumbnail[];
  metatags: Metatag[];
  cse_image?: CseImage[];
  thumbnail?: Thumbnail[];
};

export type CseThumbnail = {
  src: string;
  width: string;
  height: string;
};

export type Metatag = {
  "apple-itunes-app"?: string;
  "theme-color"?: string;
  viewport: string;
  "twitter:url"?: string;
  "og:url"?: string;
  "p:domain_verify"?: string;
  "og:image"?: string;
  "twitter:card"?: string;
  "og:site_name"?: string;
  origin?: string;
  title?: string;
  "og:description"?: string;
  "twitter:image"?: string;
  "article:publisher"?: string;
  "next-head-count"?: string;
  "twitter:site"?: string;
  "fb:admins"?: string;
  "botify-site-verification"?: string;
  "msapplication-tilecolor"?: string;
  "twitter:title"?: string;
  "og:type"?: string;
  "msvalidate.01"?: string;
  "og:title"?: string;
  "og:updated_time"?: string;
  "fb:pages"?: string;
  "fb:app_id"?: string;
  "ir-site-verification-token"?: string;
  "twitter:description"?: string;
  "twitter:aria-text"?: string;
  "og:aria-text"?: string;
  referrer?: string;
  country?: string;
  "og:image:width"?: string;
  "apple-mobile-web-app-title"?: string;
  "msapplication-tileimage"?: string;
  "og:image:alt"?: string;
  thumbnail?: string;
  "twitter:domain"?: string;
  author?: string;
  "og:image:height"?: string;
  version?: string;
  url?: string;
  "site:name"?: string;
  "og:locale"?: string;
  "og:image:type"?: string;
  "facebook-domain-verification"?: string;
  "article:modified_time"?: string;
  "format-detection"?: string;
  "og:image:secure_url"?: string;
};

export type CseImage = {
  src: string;
};

export type Thumbnail = {
  src: string;
};
