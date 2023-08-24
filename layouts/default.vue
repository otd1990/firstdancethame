<template>
  <div class="default__layout">
    <NavComponent />
    <main>
      <div class="slot--container">
        <slot />
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>
