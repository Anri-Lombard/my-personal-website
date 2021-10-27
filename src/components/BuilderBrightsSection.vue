<template>
  <section class="section-weekly-builer-brights">
    <div class="u-center-text u-margin-bottom-large">
      <h1 class="heading-weekly-builder-brights mb-5">
        Monthly Builder Brights
      </h1>
      <div class="u-dotted-line"></div>
      <h2 class="mt-5 mb-5 heading-weekly-builder-brights--quote">
        {{ updateQuote() }}
      </h2>
      <div class="u-dotted-line"></div>
      <div class="u-link">
        <a
          class="anchor"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfmBozkOLadqmFhWcxyHOaLo1-CE0h3jmIWvI8MnKYev24UPA/viewform"
        >
          give suggestion for weekly builder brights
        </a>
      </div>
    </div>
    
  </section>
</template>

<script>

export default {
  name: "BuilderBrightsSection",
  data() {
    return {
      thisYear: new Date().getFullYear(),
      month: new Date().getMonth(),
      dayOfMonth: new Date().getDate(),
    };
  },
  // TODO:
  methods: {
    updateQuote() {
      if (this.month === 9) {
        return "If I could do stats in code I won't be writing quotes";
      } else if (this.month === 10) {
        return "The only stupid question is the one unasked";
      } else if (this.month === 11) {
        return "Be nice to nerds. Chances are you'll end up working for one.";
      } else if (this.month === 12) {
        return "Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That’s relativity.";
      } else if (this.month === 1) {
        return "The only normal people are the ones that you don’t know very well.";
      } else if (this.month === 2) {
        return "A smile is an inexpensive way to improve your looks.";
      } else if (this.month === 3) {
        return "If you want to leave footprints in the sands of time, don’t drag your feet.";
      }
    },
  },
};
</script>
