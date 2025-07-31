import {buildUrl, sendGetRequest} from "../http-utils";
import {CollectionResponse} from "./collection-response";
import {ArticleRevisionRef} from "./article-revision-ref";

export type ListRevisionsRequest = {
    articleId: string;
    page?: number;
}

export type ListRevisionsResponse = {
    revisions: CollectionResponse<ArticleRevisionRef>;
}

export async function listRevisions(apiKey: string, request: ListRevisionsRequest) {
    const {articleId, ...options} = request;
    const url = buildUrl(`/v1/articles/${request.articleId}/revisions`, options);
    return await sendGetRequest<ListRevisionsResponse>({url, apiKey: apiKey})
}
