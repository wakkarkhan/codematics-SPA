<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Web Development</h2>
            <p>Team Codematics possess excellent web development skills. Our web designers and developers know their job
              well when it comes to developing an eye catching and effective website for you and are equipped with the
              latest technological trends. We work on the following websites:</p>
            <ul class="pt-3">
              <li>Static Websites</li>
              <li>Dynamic Websites</li>
              <li>E-commerce Websites</li>
            </ul>
            <p>We have received Top App Development Agency awards from Payoneer, Huawei, PIPC, and KP Minister of ST and
              IT on our robust mobile apps.</p>
            <p>Codematics has a well-versed team of Web developers, offering intuitive, high-performance end-to-end
              developmental solutions, both front, and back-end to market leaders across the world.</p>
            <p>We preen ourselves in providing all aspects of web development and management services including web
              design, repair and maintenance, web API and integration, latest upgrades, technical SEO, domain
              management, and web hosting while keeping the client’s needs in mind.</p>
            <p>Our experts are known to combine their unmatched expertise and experience in integrating Front-End
              technologies like React. JS, Vue.JS, HTML5, CSS, TypeScript as well as Back-End technologies like Node.JS,
              Java, and PHP. We’re serving multiple web development projects in Canada, USA, UK, Bangladesh, Pakistan,
              and Australia.</p>
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

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  head() {
    return {
      title: 'Web Development | ' + brand.agency.desc
    }
  },
}
</script>
