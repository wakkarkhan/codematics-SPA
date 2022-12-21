<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Universal Remote Control for Roku Devices</h4>
              <span class="caption">Dec 6, 2018 by Codematics</span>
              <figure class="image-blog">
                <!-- <img :src="imgAPI.blog[12]" alt="blog" /> -->
              </figure>

              <h3>Click to download for <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.roku.smart.rokutvremote.tvremote">Android</a>
              </h3>
              <p>So wait is over here for Roku Smart TV/device holders.<a href="../#home">Codematics</a>Inc
                is presenting Universal Remote Control
                app for Roku
                Smart TV on iOS platform. It provides an easy and amazing solution to control your Roku TV with
                iPhone.</p>
              <p>A fully functional Remote Control that gives you an ease use. Opening the apps installed on your Roku
                device
                directly from your iPhone is much easy now. But for its perfect and smooth functioning. You must
                connect your iPhone
                and the Roku TV/Devices to the same Wi-Fi connection.</p>
              <strong>Why Universal Remote Roku TV/Devices is a top choice of the users?</strong>
              <ul class="list">
                <li>Simple and highly user-friendly interface.</li>
                <li>It is compatible with all Roku TV’s like Insignia, TCL, Hisense, and Sharp.</li>
                <li>Works perfectly for Roku streaming players, Roku Ultra, and Wi-Fi speakers.</li>
                <li>Easy navigation through arrows of up, down, right, and left.</li>
                <li>Switching of channels and easy adjustment of volume.</li>
                <li>Usage of iPhone’s own keyboard to write on the Roku Devices.</li>
                <li>Smooth control of media like YouTube, Netflix, and many more.</li>
              </ul>
              <strong>Universal Remote supports the functionality of following features</strong>
              <ul class="list">
                <li>Roku Media Players</li>
                <li>Roku Express</li>
                <li>TCL Roku TVs</li>
                <li>Hisense</li>
                <li>Insignia and Sharp Roku TV</li>
              </ul>
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
      title: 'Universal Remote Control for Roku Devices | ' + brand.agency.desc
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
