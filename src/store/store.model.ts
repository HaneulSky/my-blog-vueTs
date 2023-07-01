import type {ArticlesState, Store as ArticlesStore} from "./articles/articles.model";

export type State = {
    articles: ArticlesState;
};

export type Store = ArticlesStore<Pick<State, "articles">>;

export type Namespaced<T, N extends string> = {
    [P in keyof T & string as `${N}/${P}`]: T[P];
};

export interface ResponseApi<T> {
    results: T[];
}
