<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Fund Raising Record Keeping</h4>
              <span class="caption">May 31, 2022 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[3]" alt="blog" />
              </figure>

              <h3>Click to download for <a href="#">iOS</a> and <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.bomberman.blast.bomberwarrior.bomb.reloaded">Android</a>
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
              <p>Notable Features of Fundraising App<br>
                &gt; Comprehensive dashboard<br>
                &gt; Interactive screen layouts<br>
                &gt; Push notifications<br>
                &gt; Record tracking<br>
                &gt; Quick response time<br>
                &gt; Easy goals creation and sharing option<br>
                &gt; Glitch-free and secured processing</p>
              <p>Simple to Use<br>
                1. Install the fundraising app and start organizing your goals. All you have to do is:<br>
                2. After installation, enter your mobile number and type the OTP to get access to the home screen.<br>
                3. Then add your goal name and amount required to achieve it.<br>
                4. After entering the amount, the app will show the goal status with a percentage.<br>
                5. You can also add contributors by sending invitations at any given time and tracking the donations
                with a single
                click.<br>
                6. The contributor shall be added to the campaign after accepting the request.<br>
                7. Donations collected will be shown on the fundraising dashboard of each individual separately and
                the contributors
                will get notified once they made a transaction.</p>
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
