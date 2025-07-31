import {buildUrl, sendDeleteRequest} from "../http-utils";

export type DeleteArticleDraftRequest = {
    articleId: string;
}

export async function deleteArticleDraft(apiKey: string, request: DeleteArticleDraftRequest) {
    const url = buildUrl(`/v1/articles/${request.articleId}/drafts`);
    return await sendDeleteRequest({url, apiKey: apiKey});
}
