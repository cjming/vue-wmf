<template>
  <div class="pages">
    <PageCard
      v-for="(page, index) in pages"
      :key="page.id"
      :page="page"
      :last-one="index === pages.length - 1"
    />
  </div>
</template>

<script>
import PageCard from "@/components/PageCard.vue";
import Service from "@/services/Service.js";

export default {
  name: "PageList",
  components: {
    PageCard
  },
  data() {
    return {
      pages: null
    };
  },
  created() {
    Service.getPages()
      .then(response => {
        this.pages = response.data.pages;
        console.log(response.data.pages);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
