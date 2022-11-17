<template>
 <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
            <h2 class="title-primary">{{ $t('caseStudies.section_title') }}</h2>
            <p class="special-p">{{ $t('caseStudies.section_para') }}</p>
        </v-col>
      </v-row>
    </v-container>

    <div class="carousel-handle fixed-width">
        <v-btn
          fab
          small
          aria-label="prev"
          class="margin nav"
          @click="prev()"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <div v-if="loaded" class="carousel-wrap">
          <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="handleAfterChange"
          >
            <div
              v-for="(item, index) in portfolioList"
              :key="index"
              class="item"
            >
              <card
                :thumb="item.img"
                :title="item.title"
                :img="item.img"
                type="photo"
              />
            </div>

            <div class="item">
              <div class="carousel-prop">
                <div />
              </div>
            </div>
          </slick>
        </div>

        <v-btn
          fab
          small
          aria-label="next"
          class="margin nav next"
          @click="next()"
        >
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import './case-study-style.scss';
@import '../../Title/title-style.scss';

  .title-primary {
    margin-bottom: 9px;
    line-height: 1.2;
  }

  p {
    margin-bottom: 0;
    margin-top: 20px;
  }

  .special-p {
    color: #777777;
    margin-top: 0 !important;
  }

  .v-application .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 0px;
  }

  .nav {
    position: absolute;
    border: none;
    z-index: 12;
    top: 48%;
    width: 40px;
    height: 40px!important;
    border-radius: 8px;
    cursor: pointer;
  }

  .next {
    right: 32px;
  }
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Card from '../../Cards/MediaCard'
import SliderArt from '../SliderArt'

export default {
  components: {
    Card,
    SliderArt,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      visible: false,
      imgAPI: imgAPI,
      index: 0,
      loaded: false,
      item: 0,
      link: link,
      fade: false,
      slickOptions: {
        dots: false,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        centerMode: false,
        speed: 500,
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      },
      portfolioList: [
        {
          title: 'The Blood Community App',
          img: imgAPI.portfolio[1]
        },
        {
          title: 'Kardaan: Handyman Services at Your Doorstep',
          img: imgAPI.portfolio[4]
        },
        {
          title: 'Flash on Call and SMS',
          img: imgAPI.portfolio[2]
        },
        {
          title: 'Guess the Word MultiPlayer',
          img: imgAPI.portfolio[3]
        },
     
        {
          title: 'Snap War',
          img: imgAPI.portfolio[5]
        },
        {
          title: 'Universal TV Remote Control',
          img: imgAPI.portfolio[6]
        },
        {
          title: 'SCAM',
          img: imgAPI.portfolio[7]
        },
        {
          title: 'Codematics LG Remote Control',
          img: imgAPI.portfolio[8]
        },
        {
          title: 'Universal Remote Control for Roku Devices',
          img: imgAPI.portfolio[9]
        },
        {
          title: 'Auto Silence at Prayer Time',
          img: imgAPI.portfolio[0]
        },
        {
          title: 'Sony Bravia Android TV Remote Control',
          img: imgAPI.portfolio[10]
        }
      ],
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    handleAfterChange(event, slick, currentSlide) {
      const edge = this.portfolioList.length - 1 - this.slickOptions.slidesToShow
      if (currentSlide <= edge) {
        this.fade = true
      } else {
        this.fade = false
      }
    }
  },
  computed: {
    imgs() {
      const arr = []
      this.caseData.map(item => {
        arr.push(item.bg || item.logo)
      })
      return arr
    }
  }
}
</script>
