import {createStore, Store as BaseStore} from "vuex";

import {ArticlesState} from "./articles/articles.model";
import type {Store} from "./store.model";

import articles from "./articles/articles.store";

const store: BaseStore<ArticlesState> = createStore({
    modules: {
        articles,
    },
});

export function useStore() {
    return store as unknown as Store;
}

export default store;
