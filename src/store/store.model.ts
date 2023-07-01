import type {PokemonsState, Store as PokemonsStore} from "./pokemons/pokemons.model";

export type State = {
    recipes: PokemonsState;
};

export type Store = PokemonsStore<Pick<State, "recipes">>;

export type Namespaced<T, N extends string> = {
    [P in keyof T & string as `${N}/${P}`]: T[P];
};

export interface ResponseApi<T> {
    limit: number;
    offset: number;
    results: T[];
    count: number;
}
