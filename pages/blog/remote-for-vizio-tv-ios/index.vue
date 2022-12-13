<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Vizio TVs Remote Control for iOS</h4>
              <span class="caption">Nov 17, 2020 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[6]" alt="blog" />
              </figure>

              <h3 class="ios-link">Click to download for <a target="_blank"
                  href="https://apps.apple.com/us/app/vizio-tv-remote-control-app/id1537085685">iOS</a></h3>
              <p>CodeMatics Inc. is pleased to announce a very powerful and efficient Smart Vizio TV remote app for
                Vizio smart TVs
                and Devices.</p>
              <p>For using the app, kindly connect your mobile device and Vizio Smart TV to the same WiFi Network and
                you are ready
                to go.</p>
              <p>It supports all the devices and TVs operating on SmartCast OS which makes it the best vizio remote app
                for Vizio
                TVs.</p>
              <strong>Smart TV functionalities</strong>
              <ul class="list">
                <li>Power Control</li>
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
                <li>Losing your remote</li>
                <li>Batteries worn out</li>
                <li>Smacking your little sibling for breaking the remote</li>
                <li>Biting and / or boiling your batteries in water hoping it would result in magically recharging them,
                  etc.
                </li>
              </ul>
              <strong>The Best Features</strong>
              <p>No setup required. Just connect the mobile device and Smart TV on the same WiFi network and start using
                it.</p>
              <p>This smart tv remote app can be used as a vizio tv remote. This vizio tv remote app is the best app on
                the app
                store that works as a remote for vizio tv.</p>
              <strong>Very Easy to Contact Us</strong>
              <p>CodeMatics very cordial Customer Support is here to assist
                you in
                anything you need. Our team is working continuously to include maximum functionalities in this Vizio TV
                remote App.
                The smart Vizio remote control app is being updated accordingly.</p>
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
      title: 'Vizio Tvs Remote Control for iOS | ' + brand.agency.desc
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
