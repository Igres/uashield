import axios from 'axios-https-proxy-fix'
import { SiteData, ProxyData, sitesUrl, proxiesUrl,targetUrl, TargetDataAlternative } from './types'

export const getSites = () => axios.get<SiteData[]>(sitesUrl, { timeout: 10000 })
export const getProxies = () => axios.get<ProxyData[]>(proxiesUrl, { timeout: 10000 })
export const getTargets = () => axios.get<TargetDataAlternative[]>(targetUrl, { timeout: 10000 })