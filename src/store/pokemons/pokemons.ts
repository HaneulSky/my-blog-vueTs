import axios from "axios";
import {BASE_URL} from "@/constants/endpoints";
import {PokemonsModule} from "./pokemons.model";

const pokemonsModule: PokemonsModule = {
    state: () => ({
        allPokemons: [],
        isLoading: false,
        currentPage: 1,
    }),

    getters: {},

    mutations: {
        setPokemons(state, pokemon) {
            state.allPokemons = pokemons;
        },
        changeCurrentPage(state, page) {
            state.currentPage = page;
        },

        setLoading(state, bool) {
            state.isLoading = bool;
        },
    },

    actions: {
        async fetchPokemons({state}, endpoint) {
            try {
                const response = await axios.get(`${BASE_URL}/${endpoint}`, {
                    params: {
                        offset: state.currentPage * 20 - 20,
                        limit: 20,
                    },
                });

                const data = await response.data;

                return data;
            } catch (error) {
                throw error;
            }
        },
    },
    namespaced: true,
};

export default pokemonsModule;
