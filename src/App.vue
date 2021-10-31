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
// import BlogsSection from "./components/BlogsSection.vue";
import Footer from "./components/Footer.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Typing from "./components/Typing.vue";

export default {
  name: "App",
  metaInfo() {
    return {
      title: "Anri Lombard's Personal Website",
      meta: [
        {
          name: 'description', 
          content: 'Anri\'s website shows books, build, and blogs he has come accross, and aims to inspire builders to make wizardry real'
        },
        {
          property: 'og:title',
          content: 'Anri Lombard\'s Personal Website'
        },
        {
          property: 'og:site_name',
          content: 'Anri Lomabard'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'robots',
          content: 'index,follow'
        }
      ]
    }
  },
  components: {
    Heading,
    BuilderBrightsSection,
    AboutMeSection,
    BooksSection,
    BuildsSection,
    // BlogsSection,
    Footer,
    Typing,
  },
};
</script>

<style lang="scss">
@import "../sass/main.scss";
</style>
