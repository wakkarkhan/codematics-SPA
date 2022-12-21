<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Universal Remote Control for LG TV for Android</h4>
              <span class="caption">Mar 22, 2019 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[0]" alt="blog" />
              </figure>

              <h3>Click to download for <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.lgtv.lgsmarttv.lgtvremote.wifitvremote.tvremote">Android</a>
              </h3>
              <p>The Best Universal Remote Control App for LG electronic devices. </p>
              <p>Using a single remote control device to control all your electronic equipment is no doubt a good
                experience . As
                mobile phone has become a major gadget that people always carry with them, so having an application
                installed on
                your mobile device that works as a remote control will make your life easier. This free, powerful and
                efficient LG
                remote control app developed by CodeMatics Inc. for LG devices will make your life easy.</p>
              <p>The following LG TV and devices along with a brief detail about remote control functions are
                available in this app:
              </p>
              <strong>Universal Remote for LG Smart TV</strong>
              <p>All LG smart TVs are now easy to control using <a href="../#home">Codematics
                </a>LG TV remote
                app. It is the simplest and most efficient smart TV remote app currently available in the App Store.
                The only
                requirement is that user’s mobile device as well as the LG smart TV must be connected to the same WiFi
                network for
                the app to discover the TV and connect with it. Once connected with the TV, the following LG smart TV
                functionalities can be controlled through this remote app:</p>
              <strong>LG Smart TV functionalities</strong>
              <ul class="list">
                <li>Power Off Control</li>
                <li>Mute / Volume Control</li>
                <li>Input</li>
                <li>Home</li>
                <li>Apps Installed on your TV</li>
                <li>Channel lists Up / Down</li>
                <li>Play / Stop / Reverse / Fast Forward</li>
                <li>Up / Down / Left / Right Navigation</li>
              </ul>
              <p>So, Get rid of the annoying regular temper problems caused by:</p>
              <ul class="list">
                <li>Being LAZY sitting on a sofa, and remote control out of reach</li>
                <li>Losing your remote</li>
                <li>Batteries worn out</li>
                <li>Smacking your little sibling for breaking the remote</li>
                <li>Biting and / or boiling your batteries in water hoping it would result in magically recharging them,
                  etc.
                </li>
              </ul>
              <strong>The Best Features</strong>
              <p>No setup required. Just select your LG Device and start using it.</p>
              <p>Both the smart-TV device and user’s mobile device must be connected to the same network. This
                is an unofficial TV remote application for these LG electronic devices.</p>
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
      title: 'Universal Remote Control for LG TV on iOS | ' + brand.agency.desc
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
