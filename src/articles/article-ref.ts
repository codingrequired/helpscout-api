import {HelpScoutArticlePublishStatus} from "../types/common";

export type ArticleRef = {
    id: string;
    number: number;
    collectionId: string;
    slug: string;
    status: HelpScoutArticlePublishStatus;
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
