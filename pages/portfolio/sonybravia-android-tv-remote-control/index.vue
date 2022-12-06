<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Sonybravia Android TV Remote Control</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://apps.apple.com/us/app/remote-for-sony-tv-bravia/id1449718176">IOS</a>&nbsp;AND&nbsp;<a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=codematics.smart.sony.remote">ANDROID</a>.</h3>
            <p>CodeMatics Sony Bravia Android TV Remote Control is the most powerful and efficient remote control app
              for Sony
              Bravia Smart TVs.</p>
            <p>The best feature of this Android TV remote control app is its very powerful Voice Search with which you
              can search
              any thing through voice commands.</p>
            <p>Very efficient and easy navigation through Track Pad makes it very easy for users to navigate through all
              features
              of the Sony Bravia Android TVs.</p>
            <p>Powerfull and direct input Keyboard makes it easier for users to search anything using the keyboard.</p>
            <h4 class="pt-5">Casting / Streaming</h4>
            <p class="mt-0">
              Enjoy the app’s very easy, fast and efficient streaming of your videos, music and pictures on your Sony
              Bravia
              Android TV.</p>
            <p>All other remote control functionalities such as power on / off function, volume, channels, input, back
              and media
              functions works perfectly.</p>
            <h4 class="pt-5">Only ONE Requirement</h4>
            <p class="mt-0">
              Mobile device as well as your Sony Bravia Android TV must be connected to the same WiFi or Ethernet
              network.</p>
            <p><b>Note: </b>
              CodeMatics Sony Bravia Android is a third party app for Sony Bravia Androd TV developed and owned by
              CodeMatics
              Services (Pvt) Ltd.</p>
            <p>Enjoy using this one screen powerfull remote control and let us know about your feedback. We will really
              appreciate
              it.</p>
            <p>Stay Happy &#128516;</p>

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
      title: 'Sonybravia Android TV Remote Control | ' + brand.agency.desc
    }
  },
}
</script>
