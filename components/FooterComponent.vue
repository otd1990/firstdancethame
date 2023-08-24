<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top row">
        <div class="footer__links col-12 col-sm-6 col-md-4 mb-3">
          <p class="footer__links--header">Useful Links</p>
          <a class="footer__links--link" href="/about.html">About</a>
          <a class="footer__links--link" href="/classes.html">Classes</a>
          <a class="footer__links--link" href="/contact.html">Contact</a>
        </div>
        <div class="footer__intouch col-12 col-sm-6 col-md-4 mb-3">
          <p class="footer__links--header">Where To Find Us</p>
          <div class="footer__intouch--item">
            <i class="fas fa-map-marker-alt"></i>
            <div class="footer__intouch--main">
              <p>The Old school House</p>
              <p>Long Crendon, Bucks, HP18 9AF</p>
            </div>
          </div>
        </div>
        <div class="footer__intouch col-12 col-sm-6 col-md-4 mb-3">
          <p class="footer__links--header">Get In Touch</p>
          <div class="footer__intouch--item anchor">
            <i class="fas fa-phone-alt"></i>
            <div class="footer__intouch--main">
              <a class="header__social--link" href="tel:07860685789"
                >07860685789</a
              >
            </div>
          </div>
          <div class="footer__intouch--item anchor">
            <i class="fas fa-envelope"></i>
            <div class="footer__intouch--main">
              <a
                class="header__social--link"
                href="mailto:firstdancethame@gmail.com"
                >firstdancethame@gmail.com</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="footer__copy">
        <p class="mb-0">&copy; First Dance {{ thisYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const thisYear = ref(new Date().getFullYear());
</script>
