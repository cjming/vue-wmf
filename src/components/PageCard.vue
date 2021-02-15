<template>
  <div class="page-card" v-if="!lastOne">
    <figure class="image" v-if="page.thumbnail !== null">
      <img :src="page.thumbnail.url" />
    </figure>
    <figure v-else></figure>
    <div class="teaser-text">
      <div class="teaser-text-title">{{ page.title }}</div>
      <div class="teaser-text-description">{{ page.description }}</div>
    </div>
  </div>
  <div class="page-card teaser-text last-div" v-else>
    <span>Search for pages containing [x]…</span>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    },
    lastOne: {
      type: Boolean,
      required: true
    }
  }
};
</script>
