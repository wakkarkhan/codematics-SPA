<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Flicky Chicky Fun Platform Jump Arcader</h4>
              <span class="caption">May 26, 2018 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[5]" alt="blog" />
              </figure>

              <h3>Click to download for <a target="_blank"
                  href="https://apps.apple.com/us/app/flicky-chicky/id1318172425">iOS</a> and
                <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.flickychicky.flicky.chicky.game">Android</a>
              </h3>
              <p><a href="http://cmrevamp.codematics.co/">Codematics</a> Inc. has come up with an amazing and full of
                fun game,
                Flicky Chicky.</p>
              <p>Super Chicken, Flicky, lives happily with her chicks (Chickies). But one day they all come under a
                deadly attack of
                a squirrel (Squirrely). Because the squirrel is clever like fox and master in chicken hunting.</p>
              <p>Would you want to protect your little chicks from the hunter squirrel? Will you confuse the squirrel
                (Squirrely)
                while protecting your little chicks? Do you want to hide all chicks in a safe place from the hunter?
              </p>
              <p>So, Hurry up, run &amp; run for your chicks (Chickies) to safe them before the tiny wings are trapped
                by squirrel
                (Squirrely). The incredibly simple and easy way to protect your chicks is to make your chicken
                (Flicky) run fast
                like a crazy chicken, so to protect life of the little ones.</p>
              <p>Believe us, Flicky Chicky is the only game which will give you super enjoyment in the urge of
                protecting chicks
                from chicken hunter.
              </p>
              <strong>Flicky Chicky Highlights</strong>
              <ul class="list">
                <li>Three Lives for making your chicks safe from hunter squirrel.</li>
                <li>Enjoy 24 levels and wait for more exciting levels that are coming soon.</li>
                <li>Every NEW level is more challenging.</li>
                <li>Music will love you play game all the time.</li>
                <li>Also, game has got unique and funky designing.</li>
              </ul>
              <p>Do check it out! You won’t be able to stop yourself from playing this game!</p>
              <p>Feel free in contacting us for more queries and information.</p>
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
import BlogHeader from '~/components/Header/NavScroll'
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
      title: 'Flicky Chicky | ' + brand.agency.desc
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
