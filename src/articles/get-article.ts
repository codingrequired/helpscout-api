import {buildUrl, sendGetRequest} from "../http-utils";
import {Article} from "./article";

export type GetArticleRequest = {
    articleIdOrArticleNumber: string | number;
    draft?: boolean;
}

export type GetArticleResponse = {
    article: Article;
}


export async function getArticle(apiKey: string, request: GetArticleRequest) {
    const {articleIdOrArticleNumber, ...options} = request;
    const url = buildUrl(`/v1/articles/${request.articleIdOrArticleNumber}`, options);
    return await sendGetRequest<GetArticleResponse>({url, apiKey: apiKey})
}
