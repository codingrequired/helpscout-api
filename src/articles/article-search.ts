import {ArticlePublishStatus} from "./article-publish-status";

export type ArticleSearch = {
    id: string;
    number: number;
    collectionId: string;
    slug: string;
    status: ArticlePublishStatus;
    hasDraft: boolean;
    name: string;
    publicUrl: string;
    popularity: number;
    viewCount: number;
    createdBy: number;
    updatedBy: number;
    createdAt: string;
    updatedAt: string;
    lastPublishedAt: string;
}
