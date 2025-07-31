import {buildUrl, sendGetRequest} from "../http-utils";
import {ArticleRevision} from "./article-revision";

export type GetRevisionRequest = {
    revisionId: string;
}

export type GetRevisionResponse = {
    revision: ArticleRevision;
}

export async function getRevision(apiKey: string, request: GetRevisionRequest) {
    const url = buildUrl(`/v1/revisions/${request.revisionId}`);
    return await sendGetRequest<GetRevisionResponse>({url, apiKey: apiKey})
}
