export type CollectionVisibility = 'public' | 'private';

export type Collection = {
    id: string;
    siteId: string;
    number: number;
    slug: string;
    visibility: CollectionVisibility;
    order: number;
    name: string;
    description: string;
    publicUrl: string;
    articleCount: number;
    publishedArticleCount: number;
    createdBy: number;
    updatedBy: number;
    createdAt: string;
    updatedAt: string;
}
