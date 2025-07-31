import {createArticleAsset, CreateArticleAssetRequest} from "./create-article-asset";
import {AssetResponse} from "./asset";
import {CreateSettingAssetRequest, createSettingsAsset} from "./create-settings-asset";

export type AssetsClient = {
    createArticleAsset: (request: CreateArticleAssetRequest) => Promise<AssetResponse>;
    createSettingsAsset: (request: CreateSettingAssetRequest) => Promise<AssetResponse>;
}

export function createAssetsClient(apiKey: string): AssetsClient {
    return {
        createArticleAsset: (request: CreateArticleAssetRequest) => createArticleAsset(apiKey, request),
        createSettingsAsset: (request: CreateSettingAssetRequest) => createSettingsAsset(apiKey, request),
    }
}
