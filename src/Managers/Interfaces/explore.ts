import type { LanguageCode } from "iso-639-1";
import type { postTypes } from "./Post";

export interface exploreRecentTrendsParams {
    skip?: number,
    limit?: number,
    type?: postTypes,
    query?: string,
    locale?: LanguageCode | "all"
} 