<template>
  <section class="pageAbout">
    <div class="box__grey">
      <div class="container">
        <h1 class="box__grey--title">Gallery</h1>
      </div>
    </div>
  </section>
  <section id="gallery">
    <div class="position-relative">
      <div id="gallery-container" class="row no-gutters"></div>
      <div id="loading" class="gallery__loading">
        <img
          src="images/loading.gif"
          alt="loading"
          class="gallery__loading--gif d-block"
        />
        <small>Loading...</small>
      </div>
    </div>
  </section>
</template>

<script setup>
const cont = ref("");
const content = ref([]);

onMounted(() => {
  returnedImages();
});

const showImgs = () => {
  const items = document.querySelectorAll(".gallery__item");
  setTimeout(function () {
    document.getElementById("loading").classList.add("hide");
  }, 1000);
};

const returnedImages = async () => {
  fetch("https://res.cloudinary.com/first-dance/image/list/show.json")
    .then((res) => res.json())
    .then((json) => {
      json.resources.map((resource) => {
        console.log(resource);
        content = [...content, resource];
      });
      fetch("https://res.cloudinary.com/first-dance/video/list/show.json")
        .then((res) => res.json())
        .then((json) => {
          json.resources.map((resource) => {
            console.log(resource);
            content = [...content, resource];
          });
        })
        .then(() => {
          content.map(({ public_id, format, version }) => {
            const t = public_id.substring(0, 3);
            console.log(" format ", format, format != "jpg");
            cont +=
              '<div class="col-12 col-md-6 col-lg-4 my-3"><div class="gallery__wrap">';
            if (format == "jpg") {
              cont +=
                '<img class="gallery__img gallery__item" src="https://res.cloudinary.com/first-dance/image/upload/v' +
                version +
                "/" +
                public_id +
                "." +
                format +
                '" alt="' +
                public_id +
                '" />';
            } else {
              cont +=
                '<iframe id="hero-video" class="embed-responsive-item gallery__video gallery__item" src="https://res.cloudinary.com/first-dance/video/upload/v' +
                version +
                "/" +
                public_id +
                "." +
                format +
                '" allow="fullscreen" ></iframe>';
            }
            cont += "</div></div>";
          });
          document.getElementById("gallery-container").innerHTML = cont;
        })
        .then(() => {
          showImgs();
        });
    });
};
</script>
