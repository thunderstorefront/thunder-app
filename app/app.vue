<script lang="ts" setup>
useHead({
  title: 'Thunder',
  titleTemplate: getTitleTemplate,
  meta: [
    {
      name: 'description',
      content: 'Platform agnostic headless storefront'
    }
  ]
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  @apply transition-all ease-linear;
}
</style>
