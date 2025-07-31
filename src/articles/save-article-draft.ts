import {buildUrl, sendPutRequestIgnoreResponse} from "../http-utils";

export type SaveArticleDraftRequest = {
    articleId: string;
    text: string;
}

export async function saveArticleDraft(apiKey: string, request: SaveArticleDraftRequest) {
    const {articleId, ...body} = request;
    const url = buildUrl(`/v1/articles/${articleId}/drafts`);
    return await sendPutRequestIgnoreResponse({url, apiKey: apiKey, body})
}
