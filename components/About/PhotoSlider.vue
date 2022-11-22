<template>
  <fragment>
    <vue-easy-lightbox v-if="loaded" :visible="visible" :imgs="imgs" :index="index" @hide="handleHide" />
    <v-container>
      <div class="gallery-root">
        <!-- <h4 class="use-text-title2 mb-3 use-text-primary">
          {{ $t('common.about_gallery') }}
        </h4> -->
        <!-- <p class="use-text-subtitle2">Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> -->
        <div class="carousel" v-if="loaded">
          <v-btn icon class="nav prev" @click="slickPrev()">
            <v-icon large>mdi-arrow-left</v-icon>
          </v-btn>

          <slick ref="slider" :options="slickOptions">
            <div v-for="(item, index) in portfolioList" :key="index" class="item px-3" @click="() => showImg(index)">
              <media-card :thumb="item.img" :title="item.title" orientation="portrait" type="photo" />
            </div>
          </slick>

          <v-btn icon class="nav next" @click="slickNext()">
            <v-icon large>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </fragment>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import MediaCard from '../Cards/MediaCard2'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    MediaCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      visible: false,
      index: 0,
      item: 0,
      loaded: false,
      imgs: [
        imgAPI.projects[0],
        imgAPI.projects[1],
        imgAPI.projects[2],
        imgAPI.projects[3],
        imgAPI.projects[4],
        imgAPI.projects[5],
        imgAPI.projects[6],
        imgAPI.projects[7],
        imgAPI.projects[8],
        imgAPI.projects[9],
        imgAPI.projects[10],
      ],
      portfolioList: [
        {
          title: 'Auto Silence at Prayer Time',
          img: imgAPI.projects[0]
        },
        {
          title: 'The Blood Community App',
          img: imgAPI.projects[1]
        },
        {
          title: 'Flash on Call and SMS',
          img: imgAPI.projects[2]
        },
        {
          title: 'Guess the Word MultiPlayer',
          img: imgAPI.projects[3]
        },
        {
          title: 'Kardaan: Handyman Services at Your Doorstep',
          img: imgAPI.projects[4]
        },
        {
          title: 'Snap War',
          img: imgAPI.projects[5]
        },
        {
          title: 'Universal TV Remote Control',
          img: imgAPI.projects[6]
        },
        {
          title: 'SCAM',
          img: imgAPI.projects[7]
        },
        {
          title: 'Codematics LG Remote Control',
          img: imgAPI.projects[8]
        },
        {
          title: 'Universal Remote Control for Roku Devices',
          img: imgAPI.projects[9]
        },
        {
          title: 'Sony Bravia Android TV Remote Control',
          img: imgAPI.projects[10]
        }
      ],
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        infinite: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>
