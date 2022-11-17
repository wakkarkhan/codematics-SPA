<template>
  <v-card :class="[orientation, type]" class="product-card">
    <a :href="href" v-ripple class="hidden-link">&nbsp;</a>
    <figure>
      <img class="avatar" :src="img" :alt="title" />
      <div class="overlay d-inline-flex flex-column justify-center">
        <div class="body">
          <h6 class="title pb-2 text-truncate">{{ title }}</h6>
          <p class="use-text-paragraph">{{ desc }}</p>
          <a icon class="icon" :href=href>
            <i class="ion-logo-linkedin" />
          </a>
        </div>
      </div>
    </figure>
  </v-card>
</template>

<style lang="scss" scoped>
  @import './product-card';

  .avatar {
    margin: auto;
  }

  .desc p {
    overflow: hidden !important;
  }

  .use-text-paragraph {
    font-weight: var(--font-regular);
    font-size: 16px;
    line-height: 24px;
  }

  figure:hover {
    opacity: 0.6 !important;
  }

  .overlay:hover {
    opacity: 2 !important;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    color: #f1f1f1;
    width: 100%;
    transition: .5s ease;
    opacity: 0;
    color: white;
    font-size: 20px;
    padding: 20px;
    height: 100%;
    text-align: center;
  }

  i {
    color: white;
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
    title: {
      type: String,
      required: true
    },
    desc: {
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
    }
  }
}
</script>
