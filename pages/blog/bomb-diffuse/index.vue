<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Bomb Diffuse Game</h4>
              <span class="caption">May 26, 2018 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[12]" alt="blog" />
              </figure>

              <h3>Click to download for <a target="_blank"
                  href="https://apps.apple.com/us/app/bomb-diffuse/id1235562902">iOS</a> and
                <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.game.bombdiffuse">Android</a>
              </h3>
              <p>The bomb diffuse is a simple, fast and entertaining game by <a href="../#home">Codematics</a>
                to be amused whenever you are feeling bored. This game has a story in which you are on a rescue
                mission to save the
                city. So dare to rescue the city and make the world peaceful.</p>
              <strong>How to play</strong>
              <p>Keep on diffusing the bombs by tapping on them.</p>

              <strong>Loosing Point</strong>
              <p>Avoid tapping the red bombs as they explode if you tap them.</p>

              <strong>Bonus</strong>
              <p>Look out for the Golden BOMBs because they contain bonus rounds.</p>
              <p>Also look for some other surprises in the game. There are plenty &#128516;</p>
            </article>
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '../../../components/Blog/blog-style.scss';
@import '~/assets/pages';

h3 {
  padding-bottom: 15px !important;
}
</style>

<script>
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import BlogHeader from '~/components/Header/Main'
import Sidebar from '~/components/Blog/Sidebar'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': BlogHeader,
    'main-footer': Footer,
    Sidebar,
  },
  head() {
    return {
      title: 'Bomb Diffuse Game | ' + brand.agency.desc
    }
  },
  data() {
    return {
      imgAPI: imgAPI,
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
