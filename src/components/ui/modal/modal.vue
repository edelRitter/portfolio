<template>
  <div class="portfolio-modal">
    <div class="portfolio-modal__content">
      <p class="portfolio-modal__close" @click="closeModal"></p>
      <div class="portfolio-modal__wrap">
        <!-- default view -->
        <div class="portfolio-modal__opened" v-show="status === 'confirmation'">
          <slot name="body"> Default body content </slot>
        </div>
        <!-- /default view -->
      </div>
    </div>
    <div class="portfolio-modal__bg" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    status: String,
  },
  methods: {
    closeModal() {
      this.$emit('modalOff');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@use './style.scss';
</style>
