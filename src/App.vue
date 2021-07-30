<template>
  <body id="website">
    <Typing />

    <Heading />

    <main>
      <BuilderBrightsSection />

      <AboutMeSection />

      <BooksSection />

      <BuildsSection />

      <BlogsSection />
      
    </main>
    <Footer />
  </body>
</template>

<script>
import Heading from "./components/Heading.vue";
import BuilderBrightsSection from "./components/BuilderBrightsSection.vue";
import AboutMeSection from "./components/AboutMeSection.vue";
import BooksSection from "./components/BooksSection.vue";
import BuildsSection from "./components/BuildsSection.vue";
import BlogsSection from "./components/BlogsSection.vue";
import Footer from "./components/Footer.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Typing from "./components/Typing.vue";

export default {
  name: "App",
  components: {
    Heading,
    BuilderBrightsSection,
    AboutMeSection,
    BooksSection,
    BuildsSection,
    BlogsSection,
    Footer,
    Typing,
  },
};
</script>

<style lang="scss">
@import "../sass/main.scss";
</style>
