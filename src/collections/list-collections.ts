import {buildUrl, sendGetRequest} from "../http-utils";
import {CollectionResponse} from "../articles";
import {Collection} from "./collection";

export type ListCollectionsVisibility = 'all' | 'public' | 'private';
export type ListCollectionsSort = 'number' | 'visibility' | 'order' | 'name' | 'createdAt' | 'updatedAt';
export type ListCollectionsOrder = 'asc' | 'desc';

export type ListCollectionsRequest = {
    page?: number;
    siteId?: string;
    visibility?: ListCollectionsVisibility;
    sort?: ListCollectionsSort;
    order?: ListCollectionsOrder;
}

export type ListCollectionsResponse = {
    collections: CollectionResponse<Collection>
}

export async function listCollections(apiKey: string, request: ListCollectionsRequest) {
    const url = buildUrl(`/v1/collections`, request);
    return await sendGetRequest<ListCollectionsResponse>({url, apiKey: apiKey})
}
