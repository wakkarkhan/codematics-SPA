<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap">
        <div id="home">
          <banner-slider />
        </div>

        <section
          id="about"
        >
          <about />
        </section>

        <section 
          id="case-studies"
          :class="[isTablet ? 'space-top-short' : '']"
        >
          <case-studies />
        </section>

        <section
          id="services"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <services />
        </section>

        <section
          id="counter"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <counter />
        </section>

        <section
          id="csr"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <csr />
        </section>

        <section
          id="our-expertise"
          :class="[isMobile ? 'space-top-short' : 'space-top']"
        >
          <expertise />
        </section>

        <section
          id="testimonials"
          :class="[isMobile ? 'space-top-short' : 'space-top']"
        >
          <testimonials />
        </section>

        <section id="company" class="space-top-short space-bottom-short">
          <company-logo />
        </section>

        <div
          id="call-to-action"
          class="space-bottom-short"
        >
          <call-action />
        </div>
      </div>
      <main-footer />
      <hidden point="smDown">
        <corner />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import CompanyLogo from '~/components/CompanyLogo'
import BannerSlider from '~/components/Home/BannerSlider'
import About from '~/components/Home/About'
import Services from '~/components/Home/Services'
import Expertise from '~/components/Home/Expertise'
import Testimonials from '~/components/Home/Testimonials'
import CaseStudies from '~/components/Home/CaseStudies'
import CallAction from '~/components/CallAction'
import Hidden from '~/components/Hidden'
import Corner from '~/components/Home/Corner'
import brand from '~/static/text/brand'
import Counter from '~/components/Home/Counter'
import Csr from '~/components/Home/Csr'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    About,
    Services,
    Expertise,
    Testimonials,
    CompanyLogo,
    CaseStudies,
    CallAction,
    Hidden,
    Corner,
    Counter,
    Csr,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.agency.desc
    }
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    }
  }
}
</script>
