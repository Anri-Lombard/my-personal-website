<template>
  <div class="build-box">
    <img
      class="build-box--image u-margin-bottom-small"
      :src="require(`@/assets/images/builds/${image}`)"
      alt="portfolio image"
    />
    <a :href="link" class="build-box--title">
      <h2 class="tertiary-heading">{{ title }}</h2>
    </a>
    <h3 class="build-box--date">{{ date }}</h3>
    <p class="build-box--info paragraph">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Build",
  data() {
    return {};
  },
  props: ["width", "image", "link", "title", "date", "description"],
};
</script>