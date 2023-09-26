<template>
  <section class="hero">
    <div class="hero__image">
      <div class="hero__text">
        <h3>First Dance</h3>
        <p class="">
          Providing a unique no pressure space to nurture your child's
          creativity, promote well being and confidence through Dance.
        </p>
        <p>
          My aim is for all my students to learn Ballet for its wonderful
          ability to teach grace, discipline and self confidence, but above all
          have fun!
        </p>
        <p>
          Whether you are new to Ballet or have previous experience, First Dance
          offers classes for all.
        </p>
        <div class="my-4 text-center">
          <a href="about.html" class="button button__primary">FIND OUT MORE</a>
        </div>
      </div>
    </div>
  </section>
  <section class="about">
    <div class="container">
      <h1>Welcome to First Dance!</h1>
      <div class="about__sub">
        <p class="about__sub--desc">Dance</p>
        <p class="about__sub--desc">Learn</p>
        <p class="about__sub--desc">Inspire</p>
        <p class="about__sub--desc">Enjoy</p>
      </div>
      <div class="row mt-4 mb-5">
        <div class="col-12">
          <p class="about__me--text text-center">
            At First Dance we are passionate about teaching children to dance in
            a relaxed, structured setting. Each class is meticulously planned to
            ensure children are; inspired, show creativity and have fun
          </p>
        </div>
      </div>
      <div class="about__me row">
        <div class="col-12 col-md-7">
          <h3 class="about__me--header">About Me</h3>
          <p class="about__me--text">
            I have been dancing since I was two years old. Following a short
            experience with a very structured toddler group, my parents decided
            I might be better placed in Ballet, as during the group all I wanted
            to do was get up and perform in front of all of the other children
            and parents… (much to the organisers frustration, as this meant the
            other children followed my lead oops!)
          </p>
          <p class="about__me--text">
            The class was great but did not allow room for my free spirited
            nature, when I heard music all I wanted was to dance and so my
            journey began…
          </p>
          <p class="about__me--text">
            After proudly collecting my I.S.T.D (Imperial Society Teachers of
            Dance) graded and vocational examination certificates (Primary-
            Advanced 1), I was lucky enough to be accepted into vocational
            training at Northern Ballet School (Manchester, UK). During this
            time I studied Ballet, Tap, Modern, Jazz, Street Dance, Musical
            Theatre and Contemporary dance. I am now almost complete in my
            I.S.T.D DDE (Diploma in Dance Education), to further my teaching
            expertise and enable me to enter my students for examination, just
            as I undertook all those years ago.
          </p>
          <p class="about__me--text">
            I am also mum to my wonderful daughter, who is quickly following in
            my footsteps at only two years old!
          </p>
        </div>
        <div class="col-12 col-md-5">
          <div class="about__me__images">
            <div class="image--1">
              <img src="images/ed-4.jpg" alt="First Dance About Me" />
            </div>
          </div>
        </div>
        <div class="col-12 mt-5 mt-md-3 mb-3">
          <div class="image--2">
            <img
              src="images/gov-logo.jpg"
              alt="First Dance I.S.T.D (Imperial Society Teachers of Dance) Logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="home_qlinks">
    <div class="home__qlinks">
      <div class="container-lg">
        <h2 class="home__qlinks">Quick Links</h2>
      </div>
    </div>
    <div class="container-lg card__container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="card">
            <a class="card__link" href="classes.html">
              <span class="card__link--effect"></span>
              <div
                class="card__header"
                style="background-image: url('images/class-2-sm.jpg')"
              >
                <span class="card__title">Classes</span>
              </div>
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="card">
            <a class="card__link" href="timetable.html">
              <div
                class="card__header"
                style="background-image: url('images/class-3-sm.jpg')"
              >
                <span class="card__title">Timetable</span>
              </div>
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="card">
            <a class="card__link" href="contact.html">
              <div
                class="card__header"
                style="background-image: url('images/fd-studio-sm.jpg')"
              >
                <span class="card__title">Contact</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home_qlinks .card a {
  color: inherit;
  text-decoration: none;
}

.home__qlinks {
  padding: 2rem 0 4rem 0;
}

.card__container {
  margin-top: -7rem;
}

@media only screen and (max-width: 1400px) {
  .home_qlinks .container-lg {
    max-width: 1390px;
  }
}

@media only screen and (max-width: 576px) {
  .home__qlinks {
    padding-left: 4.5rem;
  }

  .card__container {
    margin-top: -6rem;
  }
}
</style>
