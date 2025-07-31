import {ArticlesClient, createArticlesClient} from "./articles";
import {AssetsClient, createAssetsClient} from "./assets";
import {CollectionsClient, createCollectionsClient} from "./collections";

export type DocsApiClient = {
    articles: ArticlesClient;
    assets: AssetsClient;
    collections: CollectionsClient;
}

export function createDocsApiClient(apiKey: string): DocsApiClient {
    return {
        articles: createArticlesClient(apiKey),
        assets: createAssetsClient(apiKey),
        collections: createCollectionsClient(apiKey),
    }
}
