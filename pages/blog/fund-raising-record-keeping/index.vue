<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Fund Raising Record Keeping</h4>
              <span class="caption">May 31, 2020 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[3]" alt="blog" />
              </figure>

              <h3>Click to download for <a href="../#home">iOS</a> and <a target="_blank" href="../#home">Android</a>
              </h3>
              <p>Fundraising is a feature-rich crowdfunding record keeper app that seamlessly brings a non-profit,
                streamlined and
                intuitive fundraising solution to create goals and raise money for donations from anywhere at any
                time.</p>
              <p>Looking for an online fundraising solution? The fundraising app makes money by raising a hassle-free
                process and
                stands out from the crowd by providing a simple yet responsive interface and versatile features.<br>
                This app comes equipped with everything the user needs for setting and achieving fundraising goals
                from start to end
                for the causes or individuals you care about.</p>
              <p>It helps to manage goals, track funding, accept donations securely and develop relations with the
                donors on the go.
                App users can also call for donations from contributors like friends and family directly from the app.
                Beneficiaries
                will receive a mobile-optimized link that allows them to join the campaign and donate money easily.
                Moreover, it
                centralizes contact viewing, record-keeping capabilities, and a custom-made dashboard for a better
                user experience.
              </p>
              <strong>Notable Features of Fundraising App</strong>
              <ul class="list">
                <li>Comprehensive dashboard</li>
                <li>Interactive screen layouts</li>
                <li>Push notifications</li>
                <li>Record tracking</li>
                <li>Quick response time</li>
                <li>Easy goals creation and sharing option</li>
                <li>Glitch-free and secured processing</li>
              </ul>
              <strong>Simple to Use</strong>
              <ol class="list">
                <li>Install the fundraising app and start organizing your goals. All you have to do is.</li>
                <li>After installation, enter your mobile number and type the OTP to get access to the home screen.</li>
                <li>Then add your goal name and amount required to achieve it.</li>
                <li>After entering the amount, the app will show the goal status with a percentage.</li>
                <li>You can also add contributors by sending invitations at any given time and tracking the donations
                  with a single click.</li>
                <li>The contributor shall be added to the campaign after accepting the request.</li>
                <li>Donations collected will be shown on the fundraising dashboard of each individual separately and the
                  contributors will
                  get notified once they made a transaction.</li>
              </ol>
              <p>This easy-to-use app a with user-friendly interface allows everyone to update the goals as per their
                choice either
                for their personal use or for the community. So keep an eye on your goals to make an impact and help
                the community
                to grow.</p>
              <p>We’re open to new suggestions and updates. Kindly let us know about the app’s functionality and stay
                hooked for
                more exceptional features.</p>
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
      title: 'Fund Raising Record Keeping | ' + brand.agency.desc
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
