<script setup lang="ts">
  import ArticleAccessSelector from '~~/layers/articles/components/article-access-selector.vue';
  import { useArticleStore } from '~~/layers/articles/stores/article.store';

  const articleStore = useArticleStore();
</script>

<template>
  <UiCard :class="$style['article-access']">
    <UiSection>
      <template #title> Видимость материала </template>

      <ArticleAccessSelector v-model="articleStore.formData.allowed_for" />
    </UiSection>
  </UiCard>
</template>

<style lang="scss" module>
  .article-access {
    position: relative;
  }
</style>
