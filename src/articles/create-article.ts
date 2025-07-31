import {buildUrl, sendPostRequest} from "../http-utils";
import {ArticlePublishStatus} from "./article-publish-status";
import {Article} from "./article";

export type CreateArticleRequest = {
    collectionId: string;
    status?: ArticlePublishStatus;
    slug?: string;
    name: string;
    text: string;
    categories?: string[];
    related?: string[];
    keywords?: string[];
}

export type CreateArticleResponse = {
    article: Article
}

export async function createArticle(apiKey: string, request: CreateArticleRequest) {
    const url = buildUrl(`/v1/articles`, {reload: true});
    return await sendPostRequest<CreateArticleResponse>({url, apiKey: apiKey, body: request})
}
