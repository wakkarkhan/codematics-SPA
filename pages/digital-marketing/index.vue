<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Digital Marketing</h2>
            <p>We at Codematics have the expertise of working on how to use the web and digital space to achieve core
              business goals.
              From Business planning to deployment and marketing execution, Codematics is positioned to help
              organizations and
              start-ups with building effective online businesses. Our team blends best-practices with data-driven
              analysis to produce
              effective strategy for the web.</p>
            <p>Our Web business strategy includes:</p>
            <ol class="pt-3">
              <li>Analytics</li>
              <li>Start-up Planning</li>
              <li>Web Technology</li>
              <li>Content Management</li>
              <li>Digital Marketing Strategy</li>
              <li>Design & User-Experience</li>
              <li>Goal Setting & Reporting</li>
              <li>Search Engine Optimization (SEO)</li>
            </ol>
            <p>At Codematics Inc. we have a diverse team of experts who’re laser-focused to bring the best possible
              services from
              business planning, design, and development to performance marketing to broaden the reach and customer
              satisfaction.</p>
            <p>Our Digital Marketing team efficiently leverages the expertise in local, national, and e-commerce SEO,
              PPC and SEM
              services, CRO, Social Media Marketing, Paid promotions, Trends and Design, Facebook and Google Ads,
              Email
              and SMS
              marketing, Content Strategy, Copywriting, and more.</p>
            <p>We are primed to create and execute campaigns on multiple channels including Instagram, Facebook,
              Pinterest, Tumblr,
              Reddit, and Behance to bring social presence into prominence.</p>
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
      title: 'Digital Marketing | ' + brand.agency.desc
    }
  },
}
</script>
