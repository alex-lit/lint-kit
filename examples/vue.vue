<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  //
</script>

<template>
  <TestTest
    :key="1"
    class="azaza azazas bg-blue-500 bg-blue-500 mx-[10px] my-[10px] ololo px-4 py-2 rounded rounded text-base text-white xy-app-header__logo"
    @click="() => {}"
  />
</template>

<style lang="scss" module>
  .inset {
    inset-block-end: 0;
    inset-block-start: 0;
    inset-inline-end: 0;
    inset-inline-start: 0;
  }

  .margin {
    margin-inline-start: 0;
  }

  .padding {
    padding-inline-end: 0;
    padding-inline-start: 0;
  }

  .float {
    float: inline-start;
  }

  .text-align {
    text-align: start;
  }

  .ui-autocomplete__search {
    background-color: white;
    border-block-end: 1px solid var(--ui-color-border);
    inset-inline-start: 0;
    margin-block-end: 0;
    padding: 16px;
    position: sticky;
    transform: translateY(-16px);
    z-index: 1;
  }
</style>
