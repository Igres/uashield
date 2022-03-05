export interface ProxyData {
  auth: string;
  id: number;
  ip: string;
}

export interface SiteData {
  atack: number;
  id: number;
  // eslint-disable-next-line camelcase
  need_parse_url: number;
  page: string;
  // eslint-disable-next-line camelcase
  page_time: number;
  url: string;
}

export interface TargetData {
  site: SiteData;
  proxy: Array<ProxyData>;
}

  //03.03.2022//
export interface TargetDataAlternative {
  site: SiteData;
  proxy: ProxyData;
  NeedAttack : boolean
}

export type DoserEventType = 'atack' | 'error';

export type GetSitesAndProxiesResponse = { sites: SiteData[]; proxies: ProxyData[]} | null
export type GetTargetsResponse = { target:TargetDataAlternative[]} | null
export const sitesUrl = 'https://raw.githubusercontent.com/opengs/uashieldtargets/v2/sites.json'
export const proxiesUrl = 'https://raw.githubusercontent.com/opengs/uashieldtargets/v2/proxy.json'
export const targetUrl = 'https://raw.githubusercontent.com/Igres/uashield/Filtration_pairs_brench/active_targets.json'
