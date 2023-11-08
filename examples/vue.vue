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

<style lang="scss">
  .inset {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  .margin {
    margin-left: 0;
  }

  .padding {
    padding-left: 0;
    padding-right: 0;
  }

  .float {
    float: left;
  }

  .text-align {
    text-align: left;
  }

  .ui-autocomplete__search {
    background-color: white;
    border-bottom: 1px solid var(--ui-color-border);
    left: 0;
    margin-bottom: 0;
    padding: 16px;
    position: sticky;
    transform: translateY(-16px);
    z-index: 1;
  }
</style>
