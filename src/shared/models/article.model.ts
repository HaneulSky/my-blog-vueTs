import type {IUser} from "./user.model";

export interface IArticle {
    id: string;
    content?: string;
    description?: string;
    title?: string;
    urlImage?: string;
    link?: string;
    user?: IUser;
    createdAt?: Date;
    updatedAt?: Date;
}
