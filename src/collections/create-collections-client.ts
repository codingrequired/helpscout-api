import {listCollections, ListCollectionsRequest, ListCollectionsResponse} from "./list-collections";
import {getCollection, GetCollectionRequest, GetCollectionResponse} from "./get-collection";

export type CollectionsClient = {
    listCollections: (request: ListCollectionsRequest) => Promise<ListCollectionsResponse>;
    getCollection: (request: GetCollectionRequest) => Promise<GetCollectionResponse>;
}

export function createCollectionsClient(apiKey: string): CollectionsClient {
    return {
        listCollections: (request: ListCollectionsRequest) => listCollections(apiKey, request),
        getCollection: (request: GetCollectionRequest) => getCollection(apiKey, request),
    }
}
