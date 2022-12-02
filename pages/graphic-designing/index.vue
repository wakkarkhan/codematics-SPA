<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Graphic Designing</h2>
            <p>In a world increasingly driven by visual content, businesses and individuals are constantly searching for
              the “best way
              to stand out” among a crowded field.</p>
            <p>Perhaps you would like insights about how your competitors are approaching graphic design services. We at
              Codematics can
              study the competition and evaluate how you can differentiate your company by adjusting your graphic design
              strategies.</p>
            <p>Below is the list of how our team is showing its expertise in the field of Graphic designing:</p>
            <ol class="pt-3">
              <li>Brand Identity Design</li>
              <li>Social Media Targeted designing</li>
              <li>Website Template Design</li>
              <li>UI/UX Designing</li>
              <li>Video editing using After effects/ Adobe Premier</li>
              <li>Motion Graphics</li>
            </ol>
            <p>Our Graphic team works with a shared blend of creativity and perfection to seek out new opportunities in
              the fast-paced
              world to lead the design from concept to production.</p>
            <p>Team Graphics offers full-fledged designing services including UI and UX designs, Android and iOS mobile
              app strategies,
              web and social media designs, Branding, Logo, and Product designing across the globe regardless of the
              borderline and
              time zone. The designers rely on the latest tools and move with innovation to stay at top of the
              competition by keeping
              a simple, crystal clear, and customer-centric approach.</p>
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
      title: 'Graphic Designing | ' + brand.agency.desc
    }
  },
}
</script>
