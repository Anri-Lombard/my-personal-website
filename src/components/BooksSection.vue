<template>
  <section class="section-interests">
    <div class="u-center-text u-margin-bottom-large">
      <h2 class="heading-secondary mb-5">
        My Books, Builds, and Blogs for The Curious
      </h2>
      <!-- TODO: -->
      <h3>Updated 31 October 2021</h3>
    </div>
    <Books />
  </section>
</template>

<script>
import Books from "./Books";

export default {
  name: "BooksSection",
  components: {
    Books,
  },
};
</script>
