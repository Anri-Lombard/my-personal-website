<template>
  <header class="heading">
    <div class="heading__text-box">
      <h1 class="heading-primary">
        <span :class="titleClass" class="heading-primary--main primaryname">{{
          webTitle
        }}</span>
        <span :class="titleClass" class="heading-primary--sub subname">{{
          webSubtitle
        }}</span>
        <a
          href="javascript:void(0)"
          :class="titleClass"
          @click="changeWebTitle"
          class="btn btn--white btn--animate"
          >{{ webTitleButtonText }}</a
        >
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Heading",
  data() {
    return {
      webTitle: "Anri Lombard",
      webSubtitle: "where building happens",
      webTitleButtonText: "want to know me?",
      headingAnimationTime: 6000,
      transition: false,
    };
  },
  computed: {
    titleClass() {
      return { nameAnimation: this.transition };
    },
  },
  methods: {
    changeWebTitle() {
      this.transition = true;
      setTimeout(() => {
        this.webTitle = "A Fellow builder";
        this.webSubtitle = "Here to inpire another";
        this.webTitleButtonText = "Scroll down so i can...";
      }, this.headingAnimationTime / 2);
    },
  },
};
</script>