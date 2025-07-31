export type CollectionResponse<T> = {
    page: number;
    pages: number;
    count: number;
    items: T[];
}
