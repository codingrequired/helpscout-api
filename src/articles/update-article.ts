import {buildUrl, sendPutRequest} from "../http-utils";
import {Article} from "./article";
import {ArticlePublishStatus} from "./article-publish-status";

export type UpdateArticleRequest = {
    articleId: string;
    status?: ArticlePublishStatus;
    slug?: string;
    name?: string;
    text?: string;
    categories?: string[];
    related?: string[];
    keywords?: string[];
}

export type UpdateArticleResponse = {
    article: Article;
}


export async function updateArticle(apiKey: string, request: UpdateArticleRequest) {
    const {articleId, ...body} = request;
    const url = buildUrl(`/v1/articles/${articleId}`, {reload: true});

    return await sendPutRequest<UpdateArticleResponse>({
        url,
        apiKey: apiKey,
        body,
        options: undefined
    });
}
