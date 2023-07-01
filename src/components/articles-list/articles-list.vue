<template>
  <div v-if="isLoading">
    <ArticleCard v-for="(item, row) in articles" :key="item.id" :title="item.title" :description="item.description" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';

// import type {IArticle} from "../../shared/models/article.model"

import { useStore } from "../../store/index"

// const state = reactive({
//   articles: [] as IArticle[]
// });

onMounted(() => {
  getArticles()
});

const store = useStore();

const getArticles = () => {
	store.dispatch('articles/getAllArticles');
};

const articles = computed(() => store.state.articles.allArticles);
const isLoading = computed(() => store.state.articles.isLoading);
</script>
