import {buildUrl, sendGetRequest} from "../http-utils";
import {CollectionResponse} from "../articles";
import {Category} from "./category";

export type ListCategoriesSort = 'number' | 'order' | 'name' | 'articleCount' | 'createdAt' | 'updatedAt';
export type ListCategoriesOrder = 'asc' | 'desc';

export type ListCategoriesRequest = {
    collectionId: string;
    page?: number;
    sort?: ListCategoriesSort;
    order?: ListCategoriesOrder;
}

export type ListCollectionsResponse = {
    categories: CollectionResponse<Category>
}

export async function listCategories(apiKey: string, request: ListCategoriesRequest) {
    const url = buildUrl(`/v1/collections/${request.collectionId}/categories`, request);
    return await sendGetRequest<ListCollectionsResponse>({url, apiKey: apiKey})
}
