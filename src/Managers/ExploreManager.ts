import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { exploreRecentTrendsParams } from './Interfaces/explore';
import type { postResponse } from './Interfaces/Post';

class ExploreManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async recentTrends(params: exploreRecentTrendsParams) {
    const request = await this.getRequest(`/explore/trends?skip=${params?.skip ?? 0}&limit=${params?.limit ?? 20}${params?.type ? `&type=${params.type}` : ""}${params?.query ? `&query=${params.query}` : ""}${params?.locale ? `&locale=${params.locale}`: ""}`);

    const response = request as postResponse;
    return response;
  }

  public async recentBestTrends(params: exploreRecentTrendsParams) {
    const request = await this.getRequest(`/explore/trends/top?skip=${params?.skip ?? 0}&limit=${params?.limit ?? 20}${params?.type ? `&type=${params.type}` : ""}${params?.query ? `&query=${params.query}` : ""}${params?.locale ? `&locale=${params.locale}`: ""}`);

    const response = request as postResponse;
    return response;
  }
}

export default ExploreManager;
