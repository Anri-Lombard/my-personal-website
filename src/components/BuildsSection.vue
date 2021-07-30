<template>
  <section class="section-builds">
    <div class="u-center-text u-margin-bottom-large">
      <h2 class="heading-underline--white">My Builds</h2>
      <p style="color: white; font-weight: 600" class="u-center-text">
        Yes, you can click on them all...
      </p>
    </div>
    <div class="row">
      <div
        :key="build['title']"
        v-for="build in buildList.slice(0, arrayEndForFirstRow)"
        class="col-2-of-4"
      >
        <build
          :image="build['image']"
          :link="build['link']"
          :title="build['title']"
          :date="build['date']"
          :description="build['description']"
        />
      </div>
    </div>
    <div class="row">
      <div
        :key="build['title']"
        v-for="build in buildList.slice(
          arrayEndForFirstRow,
          arrayEndForFirstRow + 4
        )"
        class="col-1-of-4"
      >
        <build
          :image="build['image']"
          :link="build['link']"
          :title="build['title']"
          :date="build['date']"
          :description="build['description']"
        />
      </div>
    </div>

    <h1 class="heading-primary">
      <a
        @click="toggleSeeOldies"
        id="oldie"
        href="javascript:void(0)"
        class="btn btn--white"
        ><span
          v-if="
            seeOldies == false ? (oldieToggle = 'See') : (oldieToggle = 'Hide')
          "
          >{{ oldieToggle }}</span
        >
        builds before
        {{ oldieDate }}</a
      >
    </h1>

    <div style="margin-top: 10rem" v-if="seeOldies" class="row">
      <div
        :key="build['title']"
        v-for="build in buildList.slice(
          arrayEndForFirstRow + 4,
          arrayEndForFirstRow + 8
        )"
        class="col-1-of-4"
      >
        <build
          :image="build['image']"
          :link="build['link']"
          :title="build['title']"
          :date="build['date']"
          :description="build['description']"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Build from "./Build.vue";

export default {
  name: "BuildsSection",
  data() {
    return {
      seeOldies: false,
      arrayEndForFirstRow: 2,
      oldieToggle: "",
      oldieDate: "January 2021",
      buildList: [
        {
          image: "Screenshot 2021-04-19 at 8.29.19 PM.png",
          link: "https://tickerhack.netlify.app",
          title: "Ticker",
          date: "April 2021",
          description:
            "Make waking up more fun with this ever evolving task motivator (Made with vue, firebase, and a whole lot of ideas)\nDISCLAIMER: Only works on chrome and Mozilla firefox for now, with Safari your experience will be incomplete.",
        },
        {
          image: "Screenshot 2021-03-07 at 7.44.01 PM.png",
          link: "https://anri-lombard.github.io/SortTheRivalry/",
          title: "Sort The Rivalry",
          date: "March 2021",
          description:
            "Pick your rival and end the tension once and for all (my first vue.js app)",
        },
        {
          image: "Screenshot 2021-02-28 at 5.37.28 AM.png",
          link: "https://github.com/Anri-Lombard",
          title: "Anri Lombard Official Website",
          date: "February - March 2021",
          description:
            "Where builders could draw inspiration, my mom can check up on me, and collaborations can start by going to my github repo (Now revamped entirely in vue)",
        },
        {
          image: "Screenshot 2021-02-24 at 8.11.06 AM.png",
          link: "https://anri-lombard.github.io/MyFirstSite/",
          title: "First personal site",
          date: "January 2021",
          description:
            "My first attempt to sell myself... figuratively speaking (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)",
        },
        {
          image: "Rocket.png",
          link: "https://anri-lombard.itch.io/boost",
          title: "Boost",
          date: "January 2021",
          description:
            "Try your rocket through six solid stages without much light and cool particle effects (Created with c# and the unity engine)",
        },
        {
          image: "Screenshot 2021-02-24 at 9.13.39 AM.png",
          link: "https://anri-lombard.itch.io/hulk-smash",
          title: "Hulk Smash",
          date: "January 2021",
          description:
            "Bring nostalgia with the classic blockbreaking game, with an added twist: hulk from baby to... well... HULK (made with C# and the unity engine)",
        },
        {
          image: "Screenshot 2021-02-24 at 8.02.47 AM.png",
          link: "https://anri-lombard.github.io/Ottergram/",
          title: "OtterGram",
          date: "December 2020",
          description:
            "Oh yes, otters indeed! All fun to test my CSS zooming skills (This idea comes from Youtube and is created with a follow-along tutorial and my own twist. Made with web technologies)",
        },
        {
          image: "Screenshot 2021-02-24 at 8.20.04 AM.png",
          link: "https://anri-lombard.itch.io/DrumKit/",
          title: "Drum Kit",
          date: "December 2020",
          description:
            "No need for a drum set, I got you coverred with this drum mock-up (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)",
        },
        {
          image: "Screenshot 2021-02-24 at 7.56.13 AM.png",
          link: "https://anri-lombard.itch.io/TinDog/#carouselExampleControls",
          title: "Tindog",
          date: "December 2020",
          description:
            "Finding a friend for man's best friend (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)",
        },
        {
          image: "Screenshot 2021-02-24 at 8.08.41 AM.png",
          link: "https://anri-lombard.itch.io/SimonGame",
          title: "Simon Game",
          date: "December 2020",
          description:
            "Test your mind and try to keep up with the pattern as long as you can (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)",
        },
      ],
    };
  },
  methods: {
    toggleSeeOldies() {
      this.seeOldies = !this.seeOldies;
    },
  },
  components: {
    Build,
  },
};
</script>
