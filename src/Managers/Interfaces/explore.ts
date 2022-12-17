import type { ISO_639_CODE_LIST } from "../../utils/ISO-369-1";
import type { postTypes } from "./Post";

export interface exploreRecentTrendsParams {
    skip?: number,
    limit?: number,
    type?: postTypes,
    query?: string,
    locale?: ISO_639_CODE_LIST | "all"
} 