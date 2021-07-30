<template>
  <footer class="footer u-center-text">
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a
                href="https://www.linkedin.com/in/anri-lombard-ab37ab201/"
                class="footer__link"
                >Linkedin</a
              >
            </li>
            <li class="footer__item">
              <a href="https://github.com/Anri-Lombard" class="footer__link"
                >Github</a
              >
            </li>
            <li class="footer__item">
              <a href="mailto:anri.m.lombard@gmail.com" class="footer__link"
                >Email</a
              >
            </li>
            <li class="footer__item">
              <a href="https://twitter.com/anri_m_lombard" class="footer__link"
                >Twitter</a
              >
            </li>
            <li class="footer__item">
              <a href="https://anri-lombard.itch.io/" class="footer__link"
                >Games</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a
                href="https://www.buymeacoffee.com/anrilombard.com"
                class="footer__link"
                >your donation could help build the next project</a
              >
            </li>
          </ul>
          <p>Anri Lombard © {{ thisYear }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      thisYear: new Date().getFullYear(),
    };
  },
};
</script>