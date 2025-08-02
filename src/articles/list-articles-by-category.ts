import {buildUrl, sendGetRequest} from "../http-utils";
import {CollectionResponse} from "./collection-response";
import {ArticleRef} from "./article-ref";

export type ListArticlesByCategoryVisibility = 'all' | 'published' | 'notpublished';

// Custom is undocumented but is needed
export type ListArticlesByCategorySort =
    'custom'
    | 'number'
    | 'status'
    | 'name'
    | 'popularity'
    | 'createdAt'
    | 'updatedAt';

export type ListArticlesByCategoryOrder = 'asc' | 'desc';

export type ListArticlesByCategoryRequest = {
    categoryId: string;
    page?: number;
    status?: ListArticlesByCategoryVisibility;
    sort?: ListArticlesByCategorySort;
    order?: ListArticlesByCategoryOrder;
    pageSize?: number;
}

export type ListArticlesByCategoriesResponse = {
    articles: CollectionResponse<ArticleRef>;
}

export async function listArticlesByCategory(apiKey: string, request: ListArticlesByCategoryRequest) {
    const {categoryId, ...options} = request;
    const url = buildUrl(`/v1/categories/${categoryId}/articles`, options)
    return await sendGetRequest<ListArticlesByCategoriesResponse>({url, apiKey: apiKey})
}
