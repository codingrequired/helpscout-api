import {buildUrl, sendGetRequest} from "../http-utils";
import {Collection} from "./collection";

export type GetCollectionRequest = {
    collectionIdOrNumber: string | number;
}

export type GetCollectionResponse = {
    collection: Collection;
}

export async function getCollection(apiKey: string, request: GetCollectionRequest) {
    const url = buildUrl(`/v1/collections/${request.collectionIdOrNumber}`, request);
    return await sendGetRequest<GetCollectionResponse>({url, apiKey: apiKey})
}
