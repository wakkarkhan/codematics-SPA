<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Bomber Warrior</h4>
              <span class="caption">May 31, 2022 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[4]" alt="blog" />
              </figure>

              <div class="post-content style-light double-bottom-padding">
                <h3>Click to download for <a target="_blank"
                    href="https://apps.apple.com/us/app/bomber-warriors-reloaded/id1626998664">iOS</a> and <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=codematics.bomberman.blast.bomberwarrior.bomb.reloaded">Android</a>
                </h3>
                <p>Bomber Warriors – Bomb Blast Strike, is a well-crafted bomb buster game with an intuitive and
                  simplistic User
                  Interface that spans multiple challenges for an evocative experience.</p>
                <p>Strategically place the bomb to blast away your enemy, get the key and make way to the door, and be
                  the last one to
                  stand out! The craze of exploring the hidden key and making new strategies to blast the enemies in
                  bomb blast strike
                  will never make you feel like a slogging chore. The interactive game dialogues and power-ups will help
                  you in
                  reaching more entertaining levels of Bomber Warriors and scoring high. The addictive bomb blast
                  gameplay is suitable
                  to play for people of all ages and is compatible with both smartphones and tablet devices. It works
                  pretty well
                  without the internet connection to kill the boredom.</p>
                <strong>Features</strong>
                <ul class="list">
                  <li>Captivating gameplay</li>
                  <li>Fine equity of challenges and rewards</li>
                  <li>Easy to hard bomb blast levels</li>
                  <li>Powerful pickups to reach the levels</li>
                  <li>Workable virtual pad</li>
                  <li>Amazing soundtrack</li>
                  <li>Improved level designs</li>
                  <li>Suitable for all ages</li>
                </ul>
                <strong>How to Play the Game?</strong>
                <p>Simply follow the tutorial and it’s all easy to play, but where there is strategy, you have to use
                  your mind for passing
                  out the level to reach the next one.</p>
                <ul class="list">
                  <li>A Virtual Pad is placed on the left bottom corner that allows the player to control the movement
                    of the Bomber Warrior
                    Character.</li>
                  <li>Next, strategically drop the explosive bombs to blow away your enemy and find the key to unlock
                    the door. This will
                    lead you to the next level of the game.</li>
                  <li>In order to create some thrill & difficulty for getting a win, 2 types of blocks are placed on the
                    main screen. Some
                    blocks are easily destructible using bombs, while some are indestructible.</li>
                  <li>Besides the charm of reaching new levels, tile blasting and eliminating the enemies will make your
                    score higher every
                    single time.</li>
                  <li>Be aware of the well-known enemies with powerful abilities if you fail to blast them first.</li>
                  <li>Some power-ups like Bomb Range, Double Bomb, Shield, Speed, Lives, and Key are added throughout
                    the game. Find them out
                    and make your chances of getting a win more obvious.</li>
                  <li>Once you get killed by the enemy, you will have to start the level again.</li>
                </ul>
                <p>So, get your thumbs and mind ready to enter this beautiful world. The nature of the gameplay and its
                  craze to pass out
                  the levels by fighting the enemies will surely make you addicted to the game.</p>
                <p>Hit the comment section if you like this adventure-filled game or you can send your suggestions which
                  we really
                  appreciate.</p>
              </div>
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
      title: 'Bomber Warrior | ' + brand.agency.desc
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
