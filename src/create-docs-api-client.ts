import {ArticlesClient, createArticlesClient} from "./articles";
import {AssetsClient, createAssetsClient} from "./assets";
import {CollectionsClient, createCollectionsClient} from "./collections";
import {CategoriesClient, createCategoriesClient} from "./categories";

export type DocsApiClient = {
    articles: ArticlesClient;
    assets: AssetsClient;
    collections: CollectionsClient;
    categories: CategoriesClient;
}

export function createDocsApiClient(apiKey: string): DocsApiClient {
    return {
        articles: createArticlesClient(apiKey),
        assets: createAssetsClient(apiKey),
        collections: createCollectionsClient(apiKey),
        categories: createCategoriesClient(apiKey)
    }
}
