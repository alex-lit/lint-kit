<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  const articleStore = 1;
</script>

<template>
  <UiCard class="article-access left-[-5px] top-[-5px] m-5">
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
