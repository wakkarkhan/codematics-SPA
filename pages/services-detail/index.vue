<template>
  <div class="main-wrap">
    <main-header />
    
    <div class="container-general">
      <v-container class="py-5" v-if="number === 'mobile'">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Mobile Apps Development</h2>
            <p>The global scenario of Mobile Apps Development is currently witnessing an enormous growth. With so many apps coming up on the popular platforms like Android, iOS and Windows, the mobile market is one of the most potential markets that you need to capture if you’re an online business owner. People are taking interest in the latest trends and using their mobile devices to access all types of information on a daily basis.</p>
            <p>At Codematics, we make sure developing the best and high quality mobile apps using the latest trends and techniques.</p>
            <p>Our dedicated team is always equipped with the latest knowledge and ensures that the developed mobile apps reach the maximum number of potential customers worldwide in the least amount of time.</p>
            <p>Further, we are continuously working to simplify the daily routine life of smartphone users by providing them the most essential and quality applications. We have published some top-rated applications on Google Play and App Store, which are being used by more than 55 million people around the globe.</p>
            <p>We at Codematics, are known to deliver flexible, secure, and bespoke mobile application development solutions with user-friendly interface and blazing-fast efficiency to reflect the business idea globally.</p>
            <p>We excelled at providing native Android, iOS, hybrid and cross-platform services including greenfield mobile app development (Android & iOS), latest upgrades and app optimization, interactive UI/UX design services, android widget development, server-side APIs, legacy app modernization, testing, and quality assurance services and more.</p>
            <p>We’re continuously pushing the bars with our unbeaten expertise in developing finances and gaming apps, mCommerce, telemedicine and mHealth apps, conferencing and social media apps, Lifestyle and utility apps, kids entertainment, and educational apps, etc.</p>

            <h3 class="mt-5">Awards and Honors In Mobile App Development</h3>
            <p>We built an iOS and Android-friendly Universal TV Remote app which has cultivated a network of 120M+ users worldwide. Besides that, CV maker resume builder, Fund raising record keeper, Auto silence at prayer time apps are continuously revealing earth-shattering results and unstoppable growth in the tech world.</p>
            <p>We have received Top App Development Agency awards from Payoneer, Huawei, PIPC, and KP Minister of ST and IT on our robust mobile apps.</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="py-5" v-if="number === 'web'">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Web Development</h2>
            <p>Team Codematics possess excellent web development skills. Our web designers and developers know their job well when it comes to developing an eye catching and effective website for you and are equipped with the latest technological trends. We work on the following websites:</p>
            <ul>
              <li>Static Websites</li>
              <li>Dynamic Websites</li>
              <li>E-commerce Websites</li>
            </ul>
            <p>We have received Top App Development Agency awards from Payoneer, Huawei, PIPC, and KP Minister of ST and IT on our robust mobile apps.</p>
            <p>Codematics has a well-versed team of Web developers, offering intuitive, high-performance end-to-end developmental solutions, both front, and back-end to market leaders across the world.</p> 
            <p>We preen ourselves in providing all aspects of web development and management services including web design, repair and maintenance, web API and integration, latest upgrades, technical SEO, domain management, and web hosting while keeping the client’s needs in mind.</p>
            <p>Our experts are known to combine their unmatched expertise and experience in integrating Front-End technologies like React. JS, Vue.JS, HTML5, CSS, TypeScript as well as Back-End technologies like Node.JS, Java, and PHP. We’re serving multiple web development projects in Canada, USA, UK, Bangladesh, Pakistan, and Australia.</p>
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
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  data() {
    return {
      imgAPI: imgAPI,
      link: link
    }
  },
  head() {
    return {
      title: 'Mobile App Development | ' + brand.agency.desc
    }
  },
  props: {
    number: {
      type: String,
      // default: 'mobile' // available props: mobile, web, game, modeling, graphic, digital
    }
  }
}
</script>
