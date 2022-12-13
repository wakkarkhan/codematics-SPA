<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Universal TV Remote Control by Codematics</h4>
              <span class="caption">May 27, 2018 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[0]" alt="blog" />
              </figure>

              <h3>Click to download for <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.universal.tv.remote.control">Android</a>
              </h3>
              <p>Universal TV Remote control is an amazing mobile application developed for Smart TV users and IR
                blaster compatible
                TV’s. So the users can control their TV with mobile phones. Our App has more than 70 million users in
                100 countries
                and &nbsp;moving ahead as a top choice in the world.</p>
              <strong>Problems arising out of using normal TV Remote</strong>
              <p>Think for a minute, are you facing a problem like losing your remote when its time for your favorite
                show on TV? TV
                remote battery stops working in wrong hours? You smack your little sibling for breaking the remote? Or
                biting and
                boiling &nbsp;batteries in the water hoping that it would result in magically recharging them etc.??
              </p>
              <strong>Solid Solution to Problems</strong>
              <p><a href="../#home">Codematics</a> Inc. is here to provide you a solution for
                everyday remote
                control issues. With the No.1 Universal TV Remote Control App that is successfully running in more
                than 100
                countries with over 70 million users from across the world. For sure its amazing to get a solution for
                controlling
                your TV sets in the form of “Universal TV Remote Control”?</p>
              <strong>Working of Universal TV Remote Control.</strong>
              <p>Best feature of Universal TV remote control app is that it is workable for both simple TV and
                Smart-TV users.</p>
              <p>If you have simple TV and your mobile device is ir blaster compatible, then you are good to go with
                this App.
                Infrared sensor in your cell phone will send infrared rays to the ir of your TV set and will make you
                enjoy this App
                to control TV set.</p>
              <p>Further, for Smart TV users, TV set and phone must be connected with same Wi-Fi device to make your
                app work best
                for you. It is one of the best options for the users of Smart TV sets including:</p>
              <ul class="list">
                <li>Apple TV</li>
                <li>Android TV</li>
                <li>Google Chromecast</li>
                <li>Roku</li>
                <li>LG Smart TV</li>
              </ul>
              <strong>Best features for Users.</strong>
              <p>Some of the best features of Universal TV remote control app are:</p>
              <ul class="list">
                <li>Compatible on both simple and Smart-TV users.</li>
                <li>Download this app absolutely FREE.</li>
                <li>Easy to use and match your expectations.</li>
                <li>New brands and models are constantly added to the already existing long list of TV Brands.</li>
                <li>View your Gallery Pics and Videos from your mobile on TV.</li>
              </ul>
              <strong>Customer Support Service of Universal TV Remote Control App.</strong>
              <p>24/7 Customer Support is available to assist users of Universal TV control App in instant and best
                possible way.
                Team is working constantly to include maximum TV brands and functionalities in this App and Smart
                remote control app
                is being updated accordingly.</p>
              <p>In case your brand is not listed or the TV remote application is not working with your television,
                please drop us
                an email with your TV brand and remote model. Technical panel will work on it to make this application
                compatible
                with your TV brand.</p>
              <p>So Get The Universal TV Remote App today and enjoy using it.</p>
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
      title: 'Universal TV Remote Control | ' + brand.agency.desc
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
