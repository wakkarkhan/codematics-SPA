<template>
  <v-card v-ripple class="blog-headline" dark>
    <v-img target="_blank" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
      height="460px">
      <a href="/blog/cv-builder-app" class="anchor-content">
        <v-card-title class="headline-title use-text-title">CV Maker | Resume Builder</v-card-title>
        <!-- <v-card-subtitle class="use-text-subtitle">Resume CV Builder app is a free and effective resume maker with an
          intuitive user interface that facilitates the
          creation of a convincing and professional resume with multiple data-driven templates in a matter of minutes to
          land a
          dream job.</v-card-subtitle> -->
      </a>
    </v-img>
  </v-card>
</template>

<style scoped lang="scss">
@import './blog-style.scss';

.blog-headline {
  background: rgb(215, 215, 215);
  background: -moz-linear-gradient(0deg, rgba(215, 215, 215, 1) 0%, rgba(87, 75, 177, 1) 100%);
  background: -webkit-linear-gradient(0deg, rgba(215, 215, 215, 1) 0%, rgba(87, 75, 177, 1) 100%);
  background: linear-gradient(0deg, rgba(215, 215, 215, 1) 0%, rgba(87, 75, 177, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d7d7d7", endColorstr="#574bb1", GradientType=1);
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
