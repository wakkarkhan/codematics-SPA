<template>
  <v-container class="fixed-width">
    <v-row>
      <v-col md="12" lg="12" cols="12">
        <slick ref="slick" :options="slickOptions">
          <img v-for="(logo, index) in logos"
            :key="index"
            :src="logo"
            :alt="'logo' + index"
            >
        </slick>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';

img {
  width: 130px !important;
  height: 58px !important
}
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Slick: () => import('vue-slick')
  },

  data() {
    return {
      imgAPI: imgAPI,
       slickOptions: {
        dots: false,
        infite: true,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 3,
        variableWidth: false,
        autoplay: true,
         responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      },
      logos: [
        '/images/logos/1.png',
        '/images/logos/2.png',
        '/images/logos/3.png',
        '/images/logos/4.png',
        '/images/logos/5.png',
        '/images/logos/6.png',
        '/images/logos/7.png',
        '/images/logos/8.png',
        '/images/logos/9.png',
        '/images/logos/10.png',
        '/images/logos/11.png',
        '/images/logos/12.png',
        '/images/logos/13.png',
        '/images/logos/14.png',
      ]
    }
  }
}
</script>
