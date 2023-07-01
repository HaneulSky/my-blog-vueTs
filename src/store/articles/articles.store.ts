import axios from "axios";

import {BASE_URL} from "@/constants/endpoints";

import type {ArticlesModule} from "./articles.model";
import type {IArticle} from "@/shared/models/article.model";
import type {ResponseApi} from "../store.model";

const articlesModule: ArticlesModule = {
  state: () => ({
    allArticles: [] as IArticle[],
    isLoading: false,
  }),

  getters: {},

  mutations: {
    setArticles(state, article) {
      state.allArticles = article;
    },

    setLoading(state, bool) {
      state.isLoading = bool;
    },
  },

  actions: {
    async fetchArticles() {
      try {
        const response = await axios.get(BASE_URL + "/article");

        const data = await response.data;

        return data;
      } catch (error) {
        throw error;
      }
    },
    async getAllArticles({dispatch, commit}, params) {
      commit("setLoading", true);
      commit("setArticles", []);

      dispatch("fetchArticles", params).then((res: ResponseApi<IArticle>) => {
        commit("setArticles", res.results);
        commit("setLoading", false);
      });
    },
  },

  namespaced: true,
};

export default articlesModule;
