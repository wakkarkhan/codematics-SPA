<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="title-primary">{{ $t('services.section_title') }}</h2>
            <p class="title-para2">{{ $t('services.section_para') }}</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="carousel-handle fixed-width mt-4">
        <div v-if="loaded" class="carousel-wrap">
          <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
            <div v-for="(item, index) in servicesList" :key="index" class="item">
              <card :title="item.title" :desc="item.desc" :img="item.img" :number="item.number" type="over" />
            </div>

            <div class="item">
              <div class="carousel-prop">
                <div />
              </div>
            </div>
          </slick>
        </div>
      </v-container>

      <div class="floating-artwork">
        <v-container class="fixed-width">
          <div class="artwork">
            <slider-art :fade="fade">
              <u-animate :offset="-60" name="fadeInLeftShort" delay="0.3s" duration="0.5s">
                <div>
                  <img :src="imgAPI.illustrations[0]" :data-2d="imgAPI.illustrations[0]"
                    :data-3d="imgAPI.illustrations[1]" class="img-2d3d" alt="services 3d" />
                </div>
              </u-animate>
            </slider-art>
            <nav class="arrow">
              <v-btn fab small aria-label="next" class="margin" @click="next()">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-btn fab small aria-label="prev" class="margin" @click="prev()">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </nav>
          </div>
        </v-container>
      </div>
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
@import '../../Title/title-style.scss';

.root {
  background: var(--v-primary-lighten5) !important;
}

.theme--light .deco:before {
  box-shadow: -30px 20px 0px 0px #ffa99e !important;
}
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Card from '../../Cards/ProductCard'
import SliderArt from '../SliderArt'

export default {
  components: {
    Card,
    SliderArt,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
      link: link,
      fade: false,
      slickOptions: {
        dots: false,
        infinite: false,
        centerMode: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        autoPlay: true,
        autoPlaySpeed: 1500,
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
              slidesToShow: 1
            }
          }
        ]
      },
      servicesList: [
        {
          number: "Digital-Marketing",
          title: 'Digital Marketing',
          desc:
            'We at Codematics have the expertise of working on how to use the web and digital space to achieve core business goals. From Business planning to deployment and marketing execution Our Digital Marketing team efficiently leverages the expertise in local, national.',
          img: imgAPI.services[1]
        },
        {
          number: "3D-Modeling-and-Animation",
          title: '3D Modeling & Animation',
          desc:
            'One of the reasons we use Unity3D is its visual editor which makes creating interactive games accessible to both creative and technical individuals. Unity3D is one of the powerful . Our team focuses on 3D game environments and assets.',
          img: imgAPI.services[0]
        },
        {
          number: "Graphic-Design",
          title: 'Graphic Design',
          desc:
            'In a world increasingly driven by visual content, businesses and individuals are constantly searching for the “best way to stand out” among a crowded field. Team Graphics offers full-fledged designing services including UI and UX designs, Android and iOS mobile app',
          img: imgAPI.services[3]
        },
        {
          number: "Game-Development",
          title: 'Game Development',
          desc:
            'Making and developing games from an idea to its functional stage is where all the fun lies. Team Codematics has the expertise of developing .Our game specialists with first-hand experience and priority to innovation, are on a mission to.',
          img: imgAPI.services[2]
        },
        {
          number: "Web-Development",
          title: 'Web Development',
          desc:
            'Team Codematics possess excellent web development skills. Our web designers and developers know their job well when it comes to developing an eye-catching and effective website for you. We preen ourselves in providing all aspects.',
          img: imgAPI.services[5]
        },
        {
          number: "Mobile-Apps-Development",
          title: 'Mobile Apps Development',
          desc:
            'The global scenario of Mobile Apps Development is currently witnessing enormous growth. With so many apps coming up on popular platforms like Android, iOS, and Windows We have received Top App Development Agency awards from Payoneer.',
          img: imgAPI.services[4],
        },
      ]
    }
  },
  mounted() {
    this.loaded = true
    const props = 1
    const lastSlide = Math.floor(
      this.servicesList.length + props - this.slickOptions.slidesToShow
    )
    setTimeout(() => {
      if (window.innerWidth > 1200) {
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  methods: {
    next: function () {
      this.$refs.slick.next()
    },
    prev: function () {
      this.$refs.slick.prev()
    },
    handleAfterChange(event, slick, currentSlide) {
      const edge = this.servicesList.length - 1 - this.slickOptions.slidesToShow
      if (currentSlide <= edge) {
        this.fade = true
      } else {
        this.fade = false
      }
    }
  }
}
</script>
