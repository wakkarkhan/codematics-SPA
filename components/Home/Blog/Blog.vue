<template>
  <div class="root">
    <fragment>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="title-primary">{{ $t('blog.section_title') }}</h2>
            <p class="title-para2">{{ $t('blog.section_para') }}</p>
          </v-col>
        </v-row>

        <div class="gallery-root">
          <div class="carousel" v-if="loaded">
            <slick ref="slider" :options="slickOptions">
              <div v-for="(item, index) in blogList" :key="index" class="item px-3">
                <news-card :img="item.img" :title="item.title" orientation="portrait" type="full" />
              </div>
            </slick>
          </div>
        </div>
      </v-container>
    </fragment>
  </div>
</template>

<style scoped lang="scss">
@import '../../Cards/post-news-card.scss';
@import '../../Title/title-style.scss';
@import '../../Blog/blog-style.scss';

.root {
  background: var(--v-primary-lighten5) !important;
}
</style>

<script>
import NewsCard from '../../Cards/NewsCard.vue'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    NewsCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      index: 0,
      item: 0,
      loaded: false,
      blogList: [
        {
          title: "Smart TV Remote Control for iOS",
          img: imgAPI.team[1],
        },
        {
          title: "Smart TV Remote Control for iOS",
          img: imgAPI.team[1],
        },
        {
          title: "Smart TV Remote Control for iOS",
          img: imgAPI.team[1],
        },
        {
          title: "Smart TV Remote Control for iOS",
          img: imgAPI.team[1],
        },
      ],
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
  }
}
</script>
