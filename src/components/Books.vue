<template>
  <div>
    <section v-if="sliderValue == 1" class="section-books">
      <div class="u-center-text u-margin-bottom-large">
        <h2 class="heading-underline">Books</h2>
      </div>
      <div class="u-slider u-center-text">
        <p href="#" class="boring-range-title u-slider--title">Boring</p>
        <input
          v-model="sliderValue"
          type="range"
          min="1"
          max="2"
          class="u-slider--actual u-slider--actual__boring"
        />
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <h3
            class="heading-tertiary u-margin-bottom-small section-books--first-heading"
          >
            What I am reading now
          </h3>
          <p class="paragraph section-books--first-paragraph">
            - <strong>Digital Minimalism</strong>
            <em>by Cal Newport</em>
          </p>

          <h3
            class="heading-tertiary u-margin-bottom-small section-books--second-heading"
          >
            My top 3 recommondations
          </h3>
          <p class="paragraph section-books--second-paragraph">
            1. <strong>Gifted Hands</strong> <em>by dr. Ben Carson</em> (and
            <strong>Educated</strong> <em>by Tara Westover</em>): to see how
            reading can help you cheat life from the bottom to the top.<br /><br />
            2. <strong>Why We Sleep</strong> <em>by Mathew Walker</em>: to see
            that we all have a superpower already. <br /><br />
            3. <strong>Watership Down</strong> <em>by Richard Adams</em>: to
            show you how fellowship is better than a lone adventure.<br /><br />
          </p>
          <h3
            class="heading-tertiary u-margin-bottom-small section-books--second-heading"
          >
            My Top 5 Of The Year
          </h3>
          <div class="row">
            <div class="col-1-of-2">
              <h4>2019</h4>
              <p class="section-books--2019">
                <strong>Elon Musk</strong> <em>by Ashlee Vance</em><br />
                <strong>Gifted Hands</strong> <em>by dr. Ben Carson</em><br />
                <strong>Why We Sleep</strong> <em>by Mathew Walker</em><br />
                <strong>Factfullness</strong> <em>by Hans Rosling</em><br />
                <strong>Make It Stick</strong> <em>by many scientists :)</em
                ><br />
              </p>
            </div>
            <div class="col-1-of-2">
              <h4>2020</h4>
              <p class="section-books--2020">
                <strong>Sapiens</strong> <em>by Yuval Harari</em><br />
                <strong>The Ride Of A Lifetime</strong> <em>by Bob Iger</em
                ><br />
                <strong>Educated</strong> <em>by Tara Westover</em><br />
                <strong>Shoe Dog</strong> <em>by Phil Knight</em><br />
                <strong>Atomic Habits</strong> <em>by James Clear</em><br />
              </p>
            </div>
          </div>
        </div>
        <div class="col-1-of-2">
          <div>
            <h2 class="u-center-text">My Favourites Of All Time</h2>
            <h3 class="u-margin-bottom-small u-center-text">
              <!--(TAP FOR A QUICK REVIEW)-->
            </h3>
          </div>

          <div class="composition">
            <img
              :src="require('../assets/images/books/BookElonMusk.jpg')"
              alt="Photo 1"
              class="composition__photo composition__photo--p1"
            />
            <img
              :src="require('../assets/images/books/BookWatershipDown.jpeg')"
              alt="Photo 2"
              class="composition__photo composition__photo--p2"
            />
            <img
              :src="require('../assets/images/books/BookFacfullness.jpg')"
              alt="Photo 3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>

    <section v-else-if="sliderValue == 2" class="section-books">
      <div class="u-center-text u-margin-bottom-large">
        <h2 class="heading-underline"><i class="icon-basic-book"></i>Books</h2>
      </div>
      <div class="u-slider u-center-text">
        <p href="#" class="boring-range-title u-slider--title">Fun</p>
        <input
          v-model="sliderValue"
          type="range"
          min="1"
          max="2"
          class="u-slider--actual u-slider--actual__boring"
        />
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <h3
            class="heading-tertiary u-margin-bottom-small section-books--first-heading"
          >
            <em>All</em> these books blew my mind!
          </h3>
          <p class="paragraph section-books--first-paragraph">
            You have <strong>not lived yet</strong> until you read all
            <strong>7</strong> Harry Potter books, all <strong>3</strong> Lord
            Of The Rings books and, of course,
            <strong>THE HOBBIT</strong>!<br /><br />No homework or chore is
            important enough to
            <strong>hold you from your life mission</strong> of revering every
            word in these books. Put it all on hold and, with my advice,
            <strong>get to it</strong>.
          </p>

          <h3
            class="heading-tertiary u-margin-bottom-small section-books--second-heading"
          >
            I recommend them all!"
          </h3>
          <h3
            class="heading-tertiary u-margin-bottom-small section-books--second-heading"
          >
            My Top 5 Of The Year
          </h3>
          <div class="row">
            <div class="col-1-of-2">
              <h4>2019</h4>
              <p class="section-books--2019">
                <strong>The Places You'll Go</strong> <em>by dr. Seuss</em
                ><br /><strong>The Rosie Project</strong>
                <em>by Graeme Simsion</em><br /><strong>The Martian</strong>
                <em>by Andy Weir</em><br />
                <strong>The Hobbit</strong> <em>by JRR Tolkien</em><br /><strong
                  >Fahrenheit 451</strong
                >
                <em>by Ray Bradbury</em>
              </p>
            </div>
            <div class="col-1-of-2">
              <h4>2020</h4>
              <p class="section-books--2020">
                <strong>All Harry Potter Books</strong>
                <em>by JK Rowling</em><br /><strong
                  >All Lord Of The Rings Books</strong
                >
                <em>by JRR Tolkien</em><br /><strong>Watership Down</strong>
                <em>by Richard Adams</em><br /><strong>The Great Gatsby</strong>
                <em>by F. Scott Fitzgerald</em><br /><strong
                  >Ender's Game</strong
                >
                <em>by Orson Scott Card</em>
              </p>
            </div>
          </div>
        </div>
        <div class="col-1-of-2">
          <div>
            <h2 class="u-center-text">My Favourites Of All Time</h2>
            <h3 class="u-margin-bottom-small u-center-text">
              <!--(TAP FOR A QUICK REVIEW)-->
            </h3>
          </div>

          <div class="composition">
            <img
              :src="require('../assets/images/books/BookTH.jpg')"
              alt="Photo 1"
              class="composition__photo composition__photo--p1"
            />
            <img
              :src="require('../assets/images/books/BookHarryPotterPS.jpg')"
              alt="Photo 2"
              class="composition__photo composition__photo--p2"
            />
            <img
              :src="require('../assets/images/books/BookLOTR.jpg')"
              alt="Photo 3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Books",
  data() {
    return {
      sliderValue: 1,
      sliderTitle: "Boring",
    };
  },
};
</script>
