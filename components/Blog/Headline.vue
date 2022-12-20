<template>
  <v-card v-ripple class="blog-headline" dark>
    <v-img :src="imgAPI.blog[16]" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
      height="460px">
      <a href="/blog/cv-builder-app" target="_blank" class="anchor-content">
        <v-card-title class="headline-title use-text-title">CV Maker | Resume Builder</v-card-title>
      </a>
    </v-img>
  </v-card>
</template>

<style scoped lang="scss">
@import './blog-style.scss';

.headline-title {
  margin-bottom: 0 !important;
  color: #ffffff !important;
}

a {
  padding: 35px !important;
}
</style>

<script>
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  data() {
    return {
      imgAPI: imgAPI,
      link: link
    }
  }
}
</script>
