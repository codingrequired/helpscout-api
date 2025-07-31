import {buildUrl, sendGetRequest} from "../http-utils";
import {CollectionResponse} from "./collection-response";
import {ArticleRef} from "./article-ref";

export type ListArticlesVisibility = 'all' | 'published' | 'notpublished';
export type ListArticlesSort = 'number' | 'status' | 'name' | 'popularity'  | 'createdAt' | 'updatedAt';
export type ListArticlesOrder = 'asc' | 'desc';

export type ListArticlesRequest = {
    collectionId: string;
    page?: number;
    status?: ListArticlesVisibility;
    sort?: ListArticlesSort;
    order?: ListArticlesOrder;
    pageSize?: number;
}

export type ListArticlesResponse = {
    articles: CollectionResponse<ArticleRef>;
}

export async function listArticles(apiKey: string, request: ListArticlesRequest) {
    const {collectionId, ...options} = request;
    const url = buildUrl(`/v1/collections/${request.collectionId}/articles`, options)
    return await sendGetRequest<ListArticlesResponse>({url, apiKey: apiKey})
}
