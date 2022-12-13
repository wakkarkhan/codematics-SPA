<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Remote Control for Sony TV by Codematics</h4>
              <span class="caption">January 16, 2019 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[8]" alt="blog" />
              </figure>

              <h3>Click to download for <a target="_blank"
                  href="https://apps.apple.com/us/app/remote-for-sony-tv-bravia/id1449718176">iOS</a> and
                <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.smart.sony.remote">Android</a>
              </h3>
              <p>Remote Control for Sony Bravia is a smart TV control app for iOS users by <a
                  href="../#home">Codematics</a>. It gives you an easy and amazing solution to
                control your
                Sony Bravia TV with iPhone.</p>
              <p>A fully functional remote control for Sony device that gives you the ease of use. Opening the apps
                installed on
                your Sony TV directly from your iPhone is much easy now. For its perfect and smooth functioning. Its
                important to
                connect your iPhone and Sony Bravia TV with same Wi-Fi connection.</p>
              <strong>Why Remote for Sony Bravia is a top choice of users?</strong>
              <ul class="list">
                <li>Simple and highly user-friendly interface.</li>
                <li>It is highly compatible with all Sony Bravia TV’s.</li>
                <li>Works perfectly for all Sony devices including Sony media
                  Players.</li>
                <li>Easy navigation through arrows of up, down, right, and left.</li>
                <li>Switching of channels and adjustment of volume.</li>
                <li>Smooth control of media like YouTube, Netflix, and many more.</li>
              </ul>
              <strong>Only one Requirement</strong>
              <p>Keep one thing in focus that Mobile Phone as well as Sony Bravia TV must be connected to the same WiFi
                or Ethernet
                network.</p>
              <p><strong>Disclaimer:</strong> Codematics is not an affiliated entity of Sony. This application is not an
                official
                product of
                Sony.<br>
                CodeMatics Sony Bravia remote control is a third party app for Sony Bravia TV developed and owned by
                CodeMatics
                Services (Pvt) Ltd.</p>
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
      title: 'Remote Control for Sony TV by Codematics | ' + brand.agency.desc
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
