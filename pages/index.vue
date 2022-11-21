<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap">
        <div id="home">
          <banner-slider />
        </div>

        <section id="about">
          <about />
        </section>

        <section 
          id="projects"
          :class="[isTablet ? '' : '']"
        >
          <projects />
        </section>

        <section
          id="services"
          :class="[isTablet ? '' : '']"
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
          :class="[isTablet ? '' : 'space-top']"
        >
          <csr />
        </section>

        <section
          id="our-team"
          :class="[isMobile ? '' : '']"
        >
          <our-team />
        </section>

        <!-- <section
          id="testimonials"
          :class="[isMobile ? 'space-top-short' : '']"
        >
          <testimonials />
        </section> -->

        <!-- <section
          id="blog"
          :class="[isMobile ? 'space-top-short' : 'space-top']"
        >
          <blog />
        </section> -->

        <section 
          id="company" 
          class="space-top-short space-bottom-short">
          <company-logo />
        </section>

        <section
          id="contact"
          :class="[isMobile ? 'space-top-short' : '']"
        >
          <contact-new />
        </section>
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
import OurTeam from '~/components/Home/OurTeam'
// import Testimonials from '~/components/Home/Testimonials'
import Projects from '~/components/Home/Projects'
import ContactNew from '~/components/Home/ContactNew'
import Hidden from '~/components/Hidden'
import Corner from '~/components/Home/Corner'
import brand from '~/static/text/brand'
import Counter from '~/components/Home/Counter'
import Csr from '~/components/Home/Csr'
import Blog from '~/components/Home/Blog'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    About,
    Services,
    OurTeam,
    // Testimonials,
    CompanyLogo,
    Projects,
    ContactNew,
    Hidden,
    Corner,
    Counter,
    Csr,
    Blog,
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
