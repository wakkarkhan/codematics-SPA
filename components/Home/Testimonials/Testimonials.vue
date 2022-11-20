<template>
  <div fluid class="background py-10 container--fluid">
    <v-row class="px-10 py-5">
      <v-col cols="12" class="">
        <slick ref="slick" :options="slickOptions">
          <div v-for="(item, index) in testiContent" class="text-center"
            :key="index"
            >
            <p>{{ item.text}}</p>
            <p>{{ item.name }}</p>
          </div>
        </slick>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
  @import './testi-style.scss';
  @import '../../Title/title-style.scss';

  .background {
    background-image: url(../../../static/images/testi-background.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
    color: #ffffff !important;
  }

  .text-center > p {
    font-size: 18px;
  }

  .text-center > p:last-child {
    font-size: 13px;
    margin-bottom: 0;
  }

  .text-center:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  p {
    color: #ffffff !important;
  }
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import SliderArt from '../SliderArt'

export default {
  components: {
    SliderArt,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false,
      fade: false,
      testiContent: [
        {
          text:
            '"Once again, excellent work. Codematics went above and beyond for me in this project, and truly impressed me client. Great coders. Very knowledgeable, professional."',
          avatar: imgAPI.avatar[1],
          name: '-D.J Genius',
          title: '',
          // rating: 4
        },
        {
          text:
            '"Excellent quality of professionalism and skill, both reliable, friendly, knowledgeable and hardworking team, highly recommended. I could not be more satisfied with the work done."',
          avatar: imgAPI.avatar[2],
          name: '-Sigalit Altmark Somech',
          title: '',
          // rating: 4
        },
        {
          text: '"Codematics is amazing, dedicated and ambitious coding genius. I had problems with my website and codematics stepped up and took control of the situation. The work that was done took much longer than either of us anticipated, but they stuck with it and did everything to make it work right. I am very happy with their work ethic, eagerness to communicate, and frequent updates. Thank you."',
          avatar: imgAPI.avatar[3],
          name: '-Ryan Meghdies',
          title: '',
          // rating: 3
        },
      ],
      cover: [
        '/images/logos/1.png',
      ],
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: false,
        autoplay: true,
        audtoPlaySpeed: 4000,
      }
    }
  },
  mounted() {
    this.loaded = true
    const props = window.innerWidth > 1400 ? 0 : 1 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(
      this.testiContent.length + props - this.slickOptions.slidesToShow
    )
    setTimeout(() => {
      if (window.innerWidth > 1279) {
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      const edge = this.testiContent.length - 1 - this.slickOptions.slidesToShow
      if (currentSlide <= edge) {
        this.fade = true
      } else {
        this.fade = false
      }
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>