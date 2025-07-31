import {buildUrl, sendGetRequest} from "../http-utils";
import {CollectionResponse} from "./collection-response";
import {ArticleSearch} from "./article-search";

export type SearchArticlesStatus = 'all' | 'published' | 'notpublished';
export type SearchArticlesVisibility = 'all' | 'public' | 'private';

export type SearchArticlesRequest = {
    page?: number;
    query: string;
    collectionId?: string;
    siteId?: string;
    status?: SearchArticlesStatus;
    visibility?: SearchArticlesVisibility;
}

export type SearchArticlesResponse = {
    articles: CollectionResponse<ArticleSearch>;
}

export async function searchArticles(apiKey: string, request: SearchArticlesRequest) {
    const url = buildUrl(`/v1/search/articles`, request);
    return await sendGetRequest<SearchArticlesResponse>({url, apiKey: apiKey})
}
