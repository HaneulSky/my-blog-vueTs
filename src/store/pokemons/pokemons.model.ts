import type {Store as VuexStore, DispatchOptions, CommitOptions, GetterTree, ActionTree, MutationTree} from "vuex";

import type {IPokemonData} from "@/shared/models/pokemon-data.model";
import type {Namespaced, ResponseApi} from "../store.model";
import type {ModulesName} from "@/constants/modules-name";
import type {ISearchParams} from "@/shared/models/search-params.model";

interface Mutations {
    setPokemons(state: PokemonsState, recipes: []): void;
    changeCurrentPage(state: PokemonsState, page: number): void;
    setLoading(state: PokemonsState, bool: boolean): void;
}

interface Actions {
    fetchPokemons(context: AugmentedActionContext, params: ISearchParams): Promise<ResponseApi<IPokemonData>>;
}

interface Getters {}

interface AugmentedActionContext {
    commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
    state: PokemonsState;
    dispatch<K extends keyof Actions>(key: K, payload: Parameters<Actions[K]>[1], options?: DispatchOptions): ReturnType<Actions[K]>;
}

export interface PokemonsState {
    allPokemons: [];
    currentPage: number;
    isLoading: boolean;
}

export type NamespacedMutations = Namespaced<Mutations, ModulesName.RECIPES>;
export type NamespacedGetters = Namespaced<Getters, ModulesName.RECIPES>;
export type NamespacedActions = Namespaced<Actions, ModulesName.RECIPES>;

export type Store<S> = Omit<VuexStore<S>, "getters" | "commit" | "dispatch"> & {
    commit<S extends keyof NamespacedMutations, P extends Parameters<NamespacedMutations[S]>[1]>(key: S, payload: P, options?: CommitOptions): ReturnType<NamespacedMutations[S]>;
} & {
    getters: {
        [K in keyof NamespacedGetters]: ReturnType<NamespacedGetters[K]>;
    };
} & {
    dispatch<K extends keyof NamespacedActions>(key: K, payload: Parameters<NamespacedActions[K]>[1], options?: DispatchOptions): ReturnType<NamespacedActions[K]>;
};

export interface PokemonsModule {
    state: () => PokemonsState;
    getters: GetterTree<PokemonsState, PokemonsState> & Getters;
    mutations: MutationTree<PokemonsState> & Mutations;
    actions: ActionTree<PokemonsState, PokemonsState> & Actions;
    namespaced: boolean;
}
