import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {MAIN, ARTICLE_PAGE} from "../config/RoutesConfig";

import ArticlesList from "@/components/articles-list/articles-list.vue";
import ArticleCard from "@/components/UI components/article-card/article-card.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: MAIN,
    component: ArticlesList,
  },
  {
    path: ARTICLE_PAGE,
    component: ArticleCard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
