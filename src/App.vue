<template>
  <div>
    <Menu />
    <Top id="portfolioTop" />
    <Artwork id="portfolioArtwork" />
    <Photography id="portfolioPhotography" />
    <Showcase id="portfolioShowcase" />
    <About id="portfolioAbout" />
  </div>
</template>

<script setup>
import Menu from "@/portfolio/menu/index.vue";
import Top from '@/portfolio/top/content_top/index.vue';
import Artwork from '@/portfolio/top/content_artwork/index.vue';
import Photography from '@/portfolio/top/content_photography/index.vue';
import Showcase from '@/portfolio/top/content_showcase/index.vue';
import About from '@/portfolio/top/content_about/index.vue';
</script>

<style>
@import '@/assets/vendors/reset.css';
@import '@/assets/vendors/default.css';
@import '~bootstrap/dist/css/bootstrap.min.css';
@import url('https://fonts.googleapis.com/css2?family=Manrope&family=Noto+Serif+JP&family=Playfair:wght@300;700&family=Raleway:wght@100;300&family=Roboto:wght@400;700&display=swap');

/** modules */
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/_media-queries.scss';
</style>
