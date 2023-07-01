import type {IArticle} from "./article.model";
import type {IUser} from "./user.model";

export interface IComment {
    id: string;
    content?: string;
    articleId?: IArticle;
    userId?: IUser;
    createdAt?: Date;
    updatedAt?: Date;
}
