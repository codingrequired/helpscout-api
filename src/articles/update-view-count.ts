import {buildUrl, sendPutRequestIgnoreResponse} from "../http-utils";

export type UpdateViewCountRequest = {
    articleId: string;
    count?: number;
}

export async function updateViewCount(apiKey: string, request: UpdateViewCountRequest) {
    const {articleId, ...body} = request;
    const url = buildUrl(`/v1/articles/${articleId}/views`, {reload: true});
    return await sendPutRequestIgnoreResponse({url, apiKey: apiKey, body})
}
