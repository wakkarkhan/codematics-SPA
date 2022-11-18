<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <slick
        class="slider-deco"
        ref="sliderDeco"
        :options="slickOptionsDeco"
      >
        <div class="slide" :class="{ cur: currentSlide === 0 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s1">&nbsp;</div>
              <div class="deco top s1">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 1 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s2">&nbsp;</div>
              <div class="deco top s2">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 2 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s3">&nbsp;</div>
              <div class="deco top s3">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 3 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s3">&nbsp;</div>
              <div class="deco top s3">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 4 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s3">&nbsp;</div>
              <div class="deco top s3">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 5 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s3">&nbsp;</div>
              <div class="deco top s3">&nbsp;</div>
            </div>
          </div>
        </div>
      </slick>
      <slick
        class="slider"
        ref="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
         <div class="slide" id="slide1">
          <div class="inner">
            <v-container>
              <v-row class="text-center">
                <v-col md="12" lg="12" cols="12" class="px-6 py-5 align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('banner.banner_title_main') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('banner.banner_subtitle_main') }}</h5>
                    <img class="services" src="../../../static/images/banner/Services.png">
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        
        <div class="slide" id="slide2">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col md="12" lg="6" cols="12" class="px-6 py-5 d-flex align-center">
                  <div class="text py-5">
                    <h4 class="use-text-title">{{ $t('banner.banner_title_kardaan') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('banner.banner_subtitle_kardaan') }}</h5>
                    <h6 class="use-text-mini"><strong>SIMPLIFYING</strong> lives by providing doorsteps services</h6>
                    
                    <div class="text-center" style="padding-top: 30px; display: inline-flex; width: 100%; margin: 0 auto">
                      <a class="icons-play" style="width:25%; height: 25%;" href="https://play.google.com/store/apps/details?id=codematics.kardaan.ondemand.swiftservices">
                        <img class="mt-0" src="../../../static/images/banner/google-play-outline.png">
                      </a>
                      
                      <a class="icons-play" style="width:25%; height: 25%;margin-left:10px" href="https://apps.apple.com/pk/app/kardaan-doorstep-services/id1444422720">
                        <img class="mt-0" src="../../../static/images/banner/apple-store-outline.png">
                      </a>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        
         <div class="slide" id="slide3">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col md="12" lg="6" cols="12" class="px-6 py-5 d-flex align-center">
                  <div class="text py-5">
                    <h4 class="use-text-title">{{ $t('banner.banner_title_bc') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('banner.banner_subtitle_bc') }}</h5>
                    <h6 class="use-text-mini"><strong>SAVING</strong> thousands of lives by fullfilling the blood requirment</h6>
                    
                    <div class="text-center" style="padding-top: 30px; display: inline-flex; width: 100%; margin: 0 auto">
                      <a class="icons-play" style="width:25%; height: 25%;" href="https://play.google.com/store/apps/details?id=codematcis.blood.donor.bloodrequest.community">
                        <img class="mt-0" src="../../../static/images/banner/google-play-outline.png">
                      </a>
                      
                      <a class="icons-play" style="width:25%; height: 25%;margin-left:10px" href="https://apps.apple.com/us/app/blood-community/id1235599120">
                        <img class="mt-0" src="../../../static/images/banner/apple-store-outline.png">
                      </a>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>

        <div class="slide" id="slide4">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col md="12" lg="6" cols="12" class="px-6 py-5 d-flex align-center">
                  <div class="text py-5">
                    <h4 class="use-text-title">{{ $t('banner.banner_title_plant') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('banner.banner_subtitle_plant') }}</h5>
                    <h6 class="use-text-mini"><strong>Eco-friendly</strong> and a better place to live in.</h6>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>

        <div class="slide" id="slide5">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col md="12" lg="6" cols="12" class="px-6 py-5 d-flex align-center">
                  <div class="text py-5">
                    <h4 class="use-text-title">{{ $t('banner.banner_title_tv') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('banner.banner_subtitle_tv') }}</h5>
                    <h6 class="use-text-mini"><strong>No.1</strong> TV Remote App in more than 100 countries</h6>

                    <div class="text-center" style="padding-top: 30px; display: inline-flex; width: 100%; margin: 0 auto">
                      <a class="icons-play" style="width:25%; height: 25%;" href="https://play.google.com/store/apps/details?id=codematics.universal.tv.remote.control">
                        <img class="mt-0" src="../../../static/images/banner/google-play-outline.png">
                      </a>
                      
                      <a class="icons-play" style="width:25%; height: 25%;margin-left:10px" href="https://apps.apple.com/us/app/universal-tv-remote-maticsmote/id1492122256">
                        <img class="mt-0" src="../../../static/images/banner/apple-store-outline.png">
                      </a>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>

        <div class="slide" id="slide6">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col md="12" lg="6" cols="12" class="px-6 py-5 d-flex align-center">
                  <div class="text py-5">
                    <h4 class="use-text-title">{{ $t('banner.banner_title_urraan') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('banner.banner_subtitle_urraan') }}</h5>
                    <h6 class="use-text-mini">The <strong>beginning</strong> of your Career in <strong>Digital World</strong></h6>
                    
                    <v-btn class="btn-container" style="margin-top: 30px;">
                      <a href="https://www.urraan.pk/" class="custom-link btn btn-sm border-width-0 btn-default btn-icon-left" target="_blank">Know More</a>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </slick>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './banner-styles';
  @media (min-width: 992px) { 
    .services {
      width: 394px !important;
      height: 51px !important;
      margin-top: 0px !important;
    }

    #slide6 {
      background-image: url(../../../static/images/banner/urraan.jpg);
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: scroll;
      background-size: cover;
    }

    #slide5 {
      background-image: url(../../../static/images/banner/tv.png);
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: scroll;
      background-size: cover;
    }

    #slide4 {
      background-image: url(../../../static/images/banner/plantation.jpg);
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: scroll;
      background-size: cover;
    }

    #slide3 {
      background-image: url(../../../static/images/banner/blood-community.jpg);
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: scroll;
      background-size: cover;
    }

    #slide2 {
      background-image: url(../../../static/images/banner/kardaan.jpg);
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: scroll;
      background-size: cover;
    }

    #slide1 {
      background-image: url(../../../static/images/banner/main.jpg);
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: scroll;
      background-size: cover;
    }

    .use-text-title {
    font-size: 100px !important;
  }

    .use-text-subtitle {
      font-size: 35px !important;
    }

    .use-text-mini {
      font-size: 20px !important;
    }
  }

  .theme--light.v-btn.v-btn--has-bg {
    background-color: var(--v-primary-base) !important;
  }

  .v-btn__content > a {
    text-decoration: none;
    color: #ffffff;
  }

  .use-text-title {
    text-transform: uppercase !important;
    line-height: 1 !important;
  }

  .use-text-subtitle {
    line-height: .85 !important;
    color: var(--v-primary-base) !important;
  }

  .use-text-mini {
    line-height: 1 !important;
    color: #303133 !important;
    font-weight: 500 !important;
  }

  strong {
    font-weight: 600 !important;
  }

  .slick-dots {
    bottom: 0 !important;
  }

  .slick-dotted.slick-slider {
    margin-bottom: 0 !important;
  }

  .text h5 {
    margin-bottom: 25px !important;
  }

  
</style>

<script>
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      link: link,
      imgAPI: imgAPI,
      slickOptions: {
        dots: true,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-out',
        asNavFor: '.slider-deco',
        responsive: [
          {
            breakpoint: 960,
            settings: {
              dots: true,
              fade: true
            }
          }
        ]
      },
      slickOptionsDeco: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        cssEase: 'ease-out',
        autoplay: false
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
