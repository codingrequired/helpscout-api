import {Person} from "./person";

export type ArticleRevision = {
    id: string;
    articleId: string;
    text: string;
    createdBy: Person;
    createdAt: string;
}
