import {searchArticles, SearchArticlesRequest, SearchArticlesResponse} from "./search-articles";
import {listRelatedArticles, ListRelatedArticlesRequest, ListRelatedArticlesResponse} from "./list-related-articles";
import {listRevisions, ListRevisionsRequest, ListRevisionsResponse} from "./list-revisions";
import {getArticle, GetArticleRequest, GetArticleResponse} from "./get-article";
import {getRevision, GetRevisionRequest, GetRevisionResponse} from "./get-revision";
import {createArticle, CreateArticleRequest, CreateArticleResponse} from "./create-article";
import {updateArticle, UpdateArticleRequest, UpdateArticleResponse} from "./update-article";
import {updateViewCount, UpdateViewCountRequest} from "./update-view-count";
import {deleteArticle} from "./delete-article";
import {saveArticleDraft, SaveArticleDraftRequest} from "./save-article-draft";
import {deleteArticleDraft, DeleteArticleDraftRequest} from "./delete-article-draft";
import {
    listArticlesByCollection,
    ListArticlesByCollectionRequest,
    ListArticlesByCollectionResponse
} from "./list-articles-by-collections";
import {
    ListArticlesByCategoriesResponse,
    listArticlesByCategory,
    ListArticlesByCategoryRequest
} from "./list-articles-by-category";

export type ArticlesClient = {
    listArticlesByCollection: (request: ListArticlesByCollectionRequest) => Promise<ListArticlesByCollectionResponse>;
    listArticlesByCategory: (request: ListArticlesByCategoryRequest) => Promise<ListArticlesByCategoriesResponse>;
    searchArticles: (request: SearchArticlesRequest) => Promise<SearchArticlesResponse>;
    listRelatedArticles: (request: ListRelatedArticlesRequest) => Promise<ListRelatedArticlesResponse>;
    listRevisions: (request: ListRevisionsRequest) => Promise<ListRevisionsResponse>;
    getArticle: (request: GetArticleRequest) => Promise<GetArticleResponse>;
    getRevision: (request: GetRevisionRequest) => Promise<GetRevisionResponse>;
    createArticle: (request: CreateArticleRequest) => Promise<CreateArticleResponse>;
    updateArticle: (request: UpdateArticleRequest) => Promise<UpdateArticleResponse>;
    updateViewCount: (request: UpdateViewCountRequest) => Promise<null>;
    deleteArticle: (request: UpdateViewCountRequest) => Promise<null>;
    saveArticleDraft: (request: SaveArticleDraftRequest) => Promise<null>;
    deleteArticleDraft: (request: DeleteArticleDraftRequest) => Promise<null>
}


export function createArticlesClient(apiKey: string): ArticlesClient {
    return {
        listArticlesByCollection: (request: ListArticlesByCollectionRequest) => listArticlesByCollection(apiKey, request),
        listArticlesByCategory: (request: ListArticlesByCategoryRequest) => listArticlesByCategory(apiKey, request),
        searchArticles: (request: SearchArticlesRequest) => searchArticles(apiKey, request),
        listRelatedArticles: (request: ListRelatedArticlesRequest) => listRelatedArticles(apiKey, request),
        listRevisions: (request: ListRevisionsRequest) => listRevisions(apiKey, request),
        getArticle: (request: GetArticleRequest) => getArticle(apiKey, request),
        getRevision: (request: GetRevisionRequest) => getRevision(apiKey, request),
        createArticle: (request: CreateArticleRequest) => createArticle(apiKey, request),
        updateArticle: (request: UpdateArticleRequest) => updateArticle(apiKey, request),
        updateViewCount: (request: UpdateViewCountRequest) => updateViewCount(apiKey, request),
        deleteArticle: (request: UpdateViewCountRequest) => deleteArticle(apiKey, request),
        saveArticleDraft: (request: SaveArticleDraftRequest) => saveArticleDraft(apiKey, request),
        deleteArticleDraft: (request: DeleteArticleDraftRequest) => deleteArticleDraft(apiKey, request),
    }
}
