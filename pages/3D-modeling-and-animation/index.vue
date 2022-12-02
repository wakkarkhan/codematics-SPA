<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">3D Modeling and Animation</h2>
            <p>Here, at Codematics, we have a new but highly skilled team for working on some amazing 3D projects for
              our different
              products. Soon we will be making available our products.</p>
            <p>The adept team of 3D modelers, rigging, and texturing artists are offering comprehensive 3D modeling and
              animation
              services to cater to the challenges realistically and intuitively.</p>
            <p>Our team focuses on 3D game environments and assets, Characters and Logo animations, 2D explainer videos,
              3D rendering,
              3D product/game animation videos, and Multimedia solutions that are closet to reality by keeping an eye on
              the latest
              trends and emerging technology. Proudly, we hold high user satisfaction as our products are hefty in the
              matter of
              quality and reliability.</p>
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
      title: '3D Modeling and Animation | ' + brand.agency.desc
    }
  },
}
</script>
