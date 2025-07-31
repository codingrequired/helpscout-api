import {buildUrl, sendDeleteRequest} from "../http-utils";

export type DeleteArticleRequest = {
    articleId: string;
}

export async function deleteArticle(apiKey: string, request: DeleteArticleRequest) {
    const url = buildUrl(`/v1/articles/${request.articleId}`);
    return await sendDeleteRequest({url, apiKey: apiKey});
}
