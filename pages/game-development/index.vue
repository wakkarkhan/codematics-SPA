<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Game Development</h2>
            <p>Making and developing games from an idea to its functional stage is where all the fun lies. For our team,
              its more
              fascinating to make a game than playing it. Team Codematics has the expertise of developing mobile games
              in a number of
              domains. Our idea Gamifying Knowledge has been widely appreciated by a lot of people and we are working on
              to make this
              concept more engaging, entertaining and full of knowledge for kids.</p>
            <p>Currently our team is working on Games in different domains and we will soon be launching some
              multi-player, fun packed
              and engaging games for our users worldwide.</p>
            <p>Our game specialists with first-hand experience and priority to innovation, are on a mission to provide
              fair, enjoyable,
              and meaningful gaming experiences to players of all ages and abilities to create a positive impact at a
              global level.
            </p>
            <p>We handle 2D/3D game design with outstanding visualization and responsive User Interface for multiple
              game genres and
              cross-platforms. Moreover, we’re known to have expanded our reach globally in crafting top-notch,
              realistic, and
              challenging games including Flicky chicky, Bomber warriors reloaded, 3D Car park underground, and more.
            </p>
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
      title: 'Game Development | ' + brand.agency.desc
    }
  },
}
</script>
