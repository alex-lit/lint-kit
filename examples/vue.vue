<!-- eslint-disable     vue/multi-word-component-names -->
<script setup lang="ts">
  //  sdf

  /**
   * Sd
   *
   * @param a
   */
  const a = (a) => a + 1;
</script>

<template>
  <div
    class="article-access xxx top-[-5px] left-[-5px] aspect-video"
    :ui="{
      ololo: `
        xxxx top-[-5px] aspect-video text-black underline
        before:block before:w-2
        hover:font-bold hover:text-black/70
        focus:font-bold focus:text-black/70
      `,
    }"
  >
    <div
      :class="`
        xxxx top-[-5px] aspect-video text-black underline
        not-autofill:not-open:
        before:block before:w-2
        hover:font-bold hover:text-black/70
        focus:font-bold focus:text-black/70
      `"
      :ui="`
        sssaspect-video yyyy xxxx top-[-5px] aspect-video text-black underline
        before:block before:w-2
        hover:font-bold hover:text-black/70
        focus:font-bold focus:text-black/70
      `"
    >
      <div class="foo"></div>

      <div></div>
    </div>
  </div>
</template>

<style lang="scss" module>
  .vue {
    @apply xxxx top-[-5px] aspect-video text-black underline before:block before:w-2 hover:font-bold hover:text-black/70 focus:font-bold focus:text-black/70;

    inset-inline-start: 10px;
    position: relative;

    &:hover,
    &:focus {
      color: red;
    }

    &.asd {
      color: red;
    }

    &__dsf {
    }
  }
</style>
