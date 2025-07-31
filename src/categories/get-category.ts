import {buildUrl, sendGetRequest} from "../http-utils";
import {Category} from "./category";

export type GetCategoryRequest = {
    categoryIdOrNumber: string | number;
}

export type GetCategoryResponse = {
    category: Category;
}

export async function getCategory(apiKey: string, request: GetCategoryRequest) {
    const url = buildUrl(`/v1/categories/${request.categoryIdOrNumber}`, request);
    return await sendGetRequest<GetCategoryResponse>({url, apiKey: apiKey})
}
