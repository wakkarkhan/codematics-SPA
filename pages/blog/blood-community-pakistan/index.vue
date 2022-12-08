<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Blood Community Pakistan - Our Mission and Vision</h4>
              <span class="caption">June 14, 2022 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[2]" alt="blog" />
              </figure>

              <h4>How Blood Community is working across the country to fulfill blood supply for needy public.</h4>
              <h3>Click to download for <a target="_blank"
                  href="https://apps.apple.com/us/app/blood-community/id1235599120">iOS</a>
                and <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematcis.blood.donor.bloodrequest.community">Android</a>
              </h3>
              <p>If we search out for some research reports of Welfare Organizations, Hospitals and Emergency centers
                in Pakistan.
                Their consequences are not much satisfactory as they should be. Especially if we pin point the most
                relevant issue,
                which is less number of <a href="http://cmrevamp.codematics.co/post/blood-donation/">Blood Donors</a>
                in Pakistan as
                compare to its need. There is need of more than 1.6 million blood bags per year in Pakistan. While
                only 10-15%
                general public donates blood voluntarily. These less percentage of figures are alarming concern for
                those victims
                and their families searching for blood during emergency. Because people hesitate from donating blood
                due to lack of
                awareness and benefits of blood donation.</p>
              <h4>Blood Community:</h4>
              <p>Realizing the importance of Blood-Supply and lack of its availability. Blood Community Pakistan
                stepped forward in
                year 2017 with the aim of serving needy people of its country. This community connects Blood Donor and
                Blood
                Receiver directly with each other to fulfill blood requirements in emergency circumstances. Blood
                Community Pakistan
                works on creating awareness and motivation among the society to donate blood. Moreover this Community
                has made an
                user friendly application to cut out the distraction of time, distance and availability. People can
                search out for
                number of relevant donors near them through this application anywhere anytime. Blood Community is
                working on totally
                non-profit basis just for sake of helping humanity as Corporate-Social-Responsibility.</p>
              <p>Download Link for Application: </p>
              <ul>
                <li><strong><a
                      href="https://play.google.com/store/apps/details?id=codematcis.blood.donor.bloodrequest.community&amp;hl=en">Blood
                      Community Android</a></strong></li>
                <li><strong><a href="https://apps.apple.com/us/app/blood-community/id1235599120">Blood Community
                      iTunes</a></strong>
                </li>
              </ul>
              <h4>How Blood Community Works:</h4>
              <p>So far more than 22,000 registered members are part of this social movement with us from all over the
                country.
                Their mandatory data is available on application for user who is searching out for required blood
                group. User can
                directly correlate with donor near him simply through a message or call. So in this regard more than
                10,000 requests
                for need of blood has been fulfilled by Blood Community till now. While total of 16,000 requests have
                been received
                for blood arrangement. Other than that Blood Community has lead various interactive sessions, events
                and conferences
                country wide to spread transparency of our vision and mission among people. Connected Pakistan
                Conference, Tech
                Momentum Conference and various educational institutes has honored us to present our transparent
                motive in front of
                general public.</p>
              <h4>Blood Community Team:</h4>
              <p>Blood Community consists of most energetic, skillful and passionate team panel. There are 4
                provincial leads of
                Blood Community under which 70 ambassadors are working in different cities, districts and towns of
                country. Team is
                working both in field and online media with proper flow of communication and dedicated team-work. This
                network of
                young heroes is smoothly holding the tasks and set of responsibility on priority basis given by Core
                Leads. They are
                truly an inspiration and valuable asset of Blood Community Platform. </p>
              <h4>Future Plan of Blood Community:</h4>
              <p>Blood Community passionate about expanding its services in other countries of world as well. Because
                there is need
                of more awareness and knowledge among the people towards blood donation and its importance. There is
                very less
                percentage of people who donate blood on regular basis. Saving someone’s life is most important than
                any other thing
                in world. Its beauty of humanity that we cooperate with each other on both social and moral
                perspective. I hope soon
                Blood Community would be in every country of world with message of saving lives and donating blood
                without any
                hesitation.</p>
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
      title: 'Blood Community Pakistan | ' + brand.agency.desc
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
