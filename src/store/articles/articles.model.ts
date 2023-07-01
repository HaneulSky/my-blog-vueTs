import type {Store as VuexStore, DispatchOptions, CommitOptions, GetterTree, ActionTree, MutationTree} from "vuex";

import type {IArticle} from "./../../shared/models/article.model";
import type {Namespaced, ResponseApi} from "../store.model";
import type {ModulesName} from "@/constants/modules-name";
import type {ISearchParams} from "@/shared/models/search-params.model";

interface Mutations {
  setArticles(state: ArticlesState, articles: IArticle[]): void;
  setLoading(state: ArticlesState, bool: boolean): void;
}

interface Actions {
  fetchArticles(context: AugmentedActionContext, params: ISearchParams): Promise<ResponseApi<IArticle>>;
  getAllArticles(context: AugmentedActionContext, params: ISearchParams): void;
}

interface Getters {}

interface AugmentedActionContext {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
  state: ArticlesState;
  dispatch<K extends keyof Actions>(key: K, payload: Parameters<Actions[K]>[1], options?: DispatchOptions): ReturnType<Actions[K]>;
}

export interface ArticlesState {
  allArticles: IArticle[];
  isLoading: boolean;
}

export type NamespacedMutations = Namespaced<Mutations, ModulesName.ARTICLES>;
export type NamespacedGetters = Namespaced<Getters, ModulesName.ARTICLES>;
export type NamespacedActions = Namespaced<Actions, ModulesName.ARTICLES>;

export type Store<S> = Omit<VuexStore<S>, "getters" | "commit" | "dispatch"> & {
  commit<S extends keyof NamespacedMutations, P extends Parameters<NamespacedMutations[S]>[1]>(key: S, payload: P, options?: CommitOptions): ReturnType<NamespacedMutations[S]>;
} & {
  getters: {
    [K in keyof NamespacedGetters]: ReturnType<NamespacedGetters[K]>;
  };
} & {
  dispatch<K extends keyof NamespacedActions>(key: K, payload?: Parameters<NamespacedActions[K]>[1], options?: DispatchOptions): ReturnType<NamespacedActions[K]>;
};

export interface ArticlesModule {
  state: () => ArticlesState;
  getters: GetterTree<ArticlesState, ArticlesState> & Getters;
  mutations: MutationTree<ArticlesState> & Mutations;
  actions: ActionTree<ArticlesState, ArticlesState> & Actions;
  namespaced: boolean;
}
