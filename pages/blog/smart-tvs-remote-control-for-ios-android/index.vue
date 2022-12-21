<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Smart TVs Remote Control for iOS & Android</h4>
              <span class="caption">Feb 27, 2020 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[0]" alt="blog" />
              </figure>

              <h3>Click to download for <a target="_blank"
                  href="https://apps.apple.com/us/app/universal-smart-tv-remote/id1492122256?ls=1">iOS</a> and <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.wifitv.tvremote.smarttv.remotecontrol.tv.remote.control&amp;hl=en">Android
                </a></h3>
              <p>CodeMatics Inc. is pleased to announce a very powerful and
                efficient Smart TV remote app for your smart TVs and Devices.</p>
              <p>For using the app, kindly connect your mobile device and
                Smart TV to the same WiFi Network and you are ready to go. Smart TVs Remote
                Control for IOS and Android </p>
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
              <p>No setup required. Just connect the mobile device and Smart
                TV on the same WiFi Network and start using it.</p>
              <strong>Very Easy to Contact Us</strong>
              <p>CodeMatics very cordial Customer Support is here to assist you in anything you
                need. Our team is working continuously to include maximum TV brands and
                functionalities. The smart remote control app is being updated accordingly.</p>
              <p>If your TV brand is not listed or the Smart TV remote app is not working with your television, please
                drop us an
                email with your TV brand and remote model. We will make the app work for you. Stay Happy and
                always feel
                free to contact us any time. Your feedback is very important to us. </p>
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
      title: 'Smart TVs Remote Control for iOS & Android | ' + brand.agency.desc
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
