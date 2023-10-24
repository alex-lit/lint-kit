<script lang="ts">
  /* eslint-disable vue/block-lang */
</script>

<template lang="pug">
.container
  .row
    .col-sm-3(
      :zzz="{ a: 4, b: 8, csdfgsdfgsdfgdfsg: 3455555555555, dsfsdf: '4534534534534534534', z: 'ew fsadf asdf asdf asdfasdf' }",
      v-bind:key="item.id",
      v-for="item in ['a', 'b']"
    ) 
      .artist(:class="item") 
        img.artist__image(
          @clicl="() => ololo(console)",
          a="34",
          v-bind:src="item.image"
        ) 
        h4.text-center {{ item.title }}
        div
          CodeMentorComponent
</template>
