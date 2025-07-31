import {listCategories, ListCategoriesRequest, ListCollectionsResponse} from "./list-categories";
import {getCategory, GetCategoryRequest, GetCategoryResponse} from "./get-category";

export type CategoriesClient = {
    listCategories: (request: ListCategoriesRequest) => Promise<ListCollectionsResponse>;
    getCategory: (request: GetCategoryRequest) => Promise<GetCategoryResponse>;
}

export function createCategoriesClient(apiKey: string): CategoriesClient {
    return {
        listCategories: (request: ListCategoriesRequest) => listCategories(apiKey, request),
        getCategory: (request: GetCategoryRequest) => getCategory(apiKey, request),
    }
}