import {buildUrl, sendGetRequest} from "../http-utils";
import {CollectionResponse} from "./collection-response";
import {ArticleRef} from "./article-ref";

export type ListArticlesByCollectionVisibility = 'all' | 'published' | 'notpublished';
export type ListArticlesByCollectionSort = 'number' | 'status' | 'name' | 'popularity' | 'createdAt' | 'updatedAt';
export type ListArticlesByCollectionOrder = 'asc' | 'desc';

export type ListArticlesByCollectionRequest = {
    collectionId: string;
    page?: number;
    status?: ListArticlesByCollectionVisibility;
    sort?: ListArticlesByCollectionSort;
    order?: ListArticlesByCollectionOrder;
    pageSize?: number;
}

export type ListArticlesByCollectionResponse = {
    articles: CollectionResponse<ArticleRef>;
}

export async function listArticlesByCollection(apiKey: string, request: ListArticlesByCollectionRequest) {
    const {collectionId, ...options} = request;
    const url = buildUrl(`/v1/collections/${collectionId}/articles`, options)
    return await sendGetRequest<ListArticlesByCollectionResponse>({url, apiKey: apiKey})
}
