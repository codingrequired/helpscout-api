import {Person} from "./person";

export type ArticleRevisionRef = {
    id: string;
    articleId: string;
    createdBy: Person;
    createdAt: string;
}
