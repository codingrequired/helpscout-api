import {buildUrl} from "../http-utils";
import {AssetResponse} from "./asset";

export type CreateSettingsAssetType = 'logo' | 'favicon' | 'touchicon';

export type CreateSettingAssetRequest = {
    assetType: CreateSettingsAssetType;
    file: File;
}

export async function createSettingsAsset(apiKey: string, request: CreateSettingAssetRequest) {
    const url = buildUrl(`/v1/assets/article`);

    const formData = new FormData();
    formData.append('key', apiKey);
    formData.append('assetType', request.assetType);
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
