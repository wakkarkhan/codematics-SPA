<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Guess the Word Multiplayer</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://play.google.com/store/apps/details?id=codematics.guess.quiz.logo.word.vocabulary.game">ANDROID</a>.
            </h3>
            <p>Guess the word – the world’s best brain teaser and brain sharpening game, loved and played by millions of
              people
              all over the world.</p>
            <p>
              Team CODEMATICS is proud to introduce a new game “Guess the Word” in our Gamifying Knowledge concept – A
              concept of
              educating people through use of entertainment mediums such as games.</p>
            <p>This guess the word game will help you increase your vocabulary and polish your English language skills.
              This
              brilliant concept of learning through games will make your time count by entertaining you as well as
              increasing your
              knowledge by helping you learn more words in English language. This game will help people who are
              appearing in
              English Language tests with their vocabulary building.</p>
            <p>Very simple, very informative, very challenging and extremely addictive game for all people.</p>
            <h4 class="pt-5">How to Play</h4>
            <ul class="pt-3">
              <li>Each word will appear as a scrambled word and you will need to enter it in the correct order.</li>
              <li>There is a HINT button that you can avail to show a word for 10 coins.</li>
              <li>Each day you will be awarded 100 coins.</li>
              <li>If you utilize all coins, you can use in-app purchases.</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';

p {
  margin-top: 18px;
  margin-bottom: 0px;
}

h2,
h3,
h4 {
  text-transform: capitalize !important;
}
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  head() {
    return {
      title: 'Guess the Word Multiplayer | ' + brand.agency.desc
    }
  },
}
</script>
