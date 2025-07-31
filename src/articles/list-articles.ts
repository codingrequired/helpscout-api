import {buildUrl, sendGetRequest} from "../http-utils";
import {CollectionResponse} from "./collection-response";
import {ArticleRef} from "./article-ref";

export type ListArticlesRequest = {
    collectionId: string;
    page?: number;
}

export type ListArticlesResponse = {
    articles: CollectionResponse<ArticleRef>;
}

export async function listArticles(apiKey: string, request: ListArticlesRequest) {
    const {collectionId, ...options} = request;
    const url = buildUrl(`/v1/collections/${request.collectionId}/articles`, options)
    return await sendGetRequest<ListArticlesResponse>({url, apiKey: apiKey})
}
