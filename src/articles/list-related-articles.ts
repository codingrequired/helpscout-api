import {buildUrl, sendGetRequest} from "../http-utils";
import {HelpScoutArticleRefCollection} from "../types/article-ref";
import {CollectionResponse} from "./collection-response";
import {ArticleRef} from "./article-ref";

export type ListRelatedArticlesStatus = 'all' | 'published' | 'notpublished';
export type ListRelatedArticlesSortOptions =
    'number'
    | 'status'
    | 'name'
    | 'popularity'
    | 'createdAt'
    | 'updatedAt';

export type ListRelatedArticlesOrder = 'desc' | 'asc';

export type ListRelatedArticlesRequest = {
    articleId: string;
    page?: number;
    status?: ListRelatedArticlesStatus;
    sort?: ListRelatedArticlesSortOptions;
    order?: ListRelatedArticlesOrder;
}

export type ListRelatedArticlesResponse = {
    articles: CollectionResponse<ArticleRef>;
}


export async function listRelatedArticles(apiKey: string, request: ListRelatedArticlesRequest) {
    const {articleId, ...options} = request;
    const url = buildUrl(`/v1/articles/${request.articleId}/related`, options);
    return await sendGetRequest<ListRelatedArticlesResponse>({url, apiKey: apiKey})
}
