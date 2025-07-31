import {buildUrl} from "../http-utils";
import {AssetResponse} from "./asset";

export type CreateArticleAssetType = 'image' | 'attachment';

export type CreateArticleAssetRequest = {
    articleId: string;
    assetType: CreateArticleAssetType;
    fileName: string;
    file: File;
}

export async function createArticleAsset(apiKey: string, request: CreateArticleAssetRequest) {
    const url = buildUrl(`/v1/assets/article`);

    const formData = new FormData();
    formData.append('key', apiKey);
    formData.append('articleId', request.articleId);
    formData.append('assetType', request.assetType);
    formData.append('fileName', request.fileName);
    formData.append('file', request.file);

    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        const data = await response.json();
        return data as AssetResponse;
    }

    throw new Error(response.statusText);
}
