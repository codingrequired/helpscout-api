import {ArticlePublishStatus} from "./article-publish-status";

export type Article = {
    id: string;
    number: number;
    collectionId: string;
    slug: string;
    status: ArticlePublishStatus;
    hasDraft: boolean;
    name: string;
    text: string;
    categories: string[];
    related: string[];
    publicUrl: string;
    popularity: number;
    keywords: string[];
    viewCount: number;
    changeOrigin: string;
    createdBy: number;
    updatedBy: number;
    createdAt: string;
    updatedAt: string;
    lastPublishedAt: string;
}
