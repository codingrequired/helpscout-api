export type CategoryVisibility = 'public' | 'private';
export type CategoryDefaultSort = 'custom' | 'popularity' | 'name' | 'updatedAt';

export type Category = {
    id: string;
    number: number;
    slug: string;
    visibility: CategoryVisibility;
    collectionId: string;
    order: number;
    defaultSort: CategoryDefaultSort;
    name: string;
    description: string;
    articleCount: number;
    publishedArticleCount: number;
    publicUrl: string;
    createdBy: number;
    updatedBy: number;
    createdAt: string;
    updatedAt: string;
}
