<template>
  <v-card :class="[orientation, type]" class="product-card">
    <a :href="href" v-ripple class="hidden-link">&nbsp;</a>
    <figure>
      <img class="avatar" :src="img" :alt="title" />
    </figure>
    <div class="desc">
      <div class="text text-center">
        <h6 class="title pb-2 text-truncate">{{ name }}</h6>
        <p class="use-text-paragraph text-truncate">{{ title }}</p>
      </div>
      <div>
        <v-btn :href="link.agency.servicesDetail" block class="button" color="primary">
          {{ $t('common.btn_detail') }}
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
  @import './product-card';

  .avatar {
    margin-right: 0 !important;
  }
</style>

<script>
import link from '~/static/text/link'
  
export default {
  data() {
    return {
      loaded: false,
      link: link,
    }
  },
  mounted() {
    this.loaded = true
  },

  props: {
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval
    },
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    href: {
      type: String,
      default: '#'
    },
  }
}
</script>
