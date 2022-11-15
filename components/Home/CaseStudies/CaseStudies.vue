<template>
 <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
            <h2 class="title-primary">{{ $t('caseStudies.section_title') }}</h2>
            <p class="special-p">{{ $t('caseStudies.section_para') }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="py-6">
          <div>
            <p>{{ $t('about.para_1') }}</p>
            <p>{{ $t('about.para_2') }}</p>
            <p>{{ $t('about.para_3') }}</p>
            <p>{{ $t('about.para_4') }}</p>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="px-6">
          <div>
            <ProgressBar />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './case-study-style.scss';
@import '../../Title/title-style.scss';

  p {
    margin-bottom: 0;
    margin-top: 20px;
  }

  .special-p {
    margin-top: 9px;
  }
</style>

<script>
import imgApi from '~/static/images/imgAPI'
import CaseCard from '../../Cards/CaseCard'

export default {
  components: {
    CaseCard
  },
  data() {
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      categories: [
        'corporate',
        'advertising',
        'marketing',
        'government',
        'creative'
      ],
      caseData: [
        {
          bg: imgApi.agency[9],
          logo: '/images/logos/cloud.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'big'
        },
        {
          bg: imgApi.agency[8],
          logo: '/images/logos/fashion.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'big'
        },
        {
          bg: imgApi.agency[5],
          logo: '/images/logos/mobile.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium'
        },
        {
          bg: imgApi.agency[6],
          logo: '/images/logos/profile.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium'
        },
        {
          bg: imgApi.agency[7],
          logo: '/images/logos/architect.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium'
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
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
