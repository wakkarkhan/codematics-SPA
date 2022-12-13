<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="title-primary">{{ $t('blog.section_title') }}</h2>
            <p class="title-para2">{{ $t('blog.section_para') }}</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <div class="massonry">
          <v-row class="align-center">
            <v-col v-for="(item, index) in blogList" :key="index" v-if="item.size === 'medium'" cols="12" md="4" sm="6"
              class="pa-3">
              <u-animate name="fadeInUpShort" delay="0.4s" duration="0.4s">
                <div>
                  <a target="_blank" :href="item.href">
                    <case-card :bg="item.bg || ''" :logo="item.logo" :title="item.title" :size="item.size"
                      :simple="item.simple || false" :show-img="() => showImg(index)" />
                  </a>
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </div>

        <v-row class="justify-space-around pt-7">
          <v-col cols="2">
            <v-btn :href=link.agency.blog target="_blank" block class="button" color="primary">
              {{ $t('common.btn_blog') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </u-animate-container>
  </div>
</template>

<style scoped lang="scss">
@import '../../Title/title-style.scss';
@import '../../Blog/blog-style.scss';

.root {
  // background: rgb(255, 255, 255);
  // background: -moz-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 183, 163, 1) 50%, rgba(255, 155, 136, 1) 100%);
  // background: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 183, 163, 1) 50%, rgba(255, 155, 136, 1) 100%);
  // background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 183, 163, 1) 50%, rgba(255, 155, 136, 1) 100%);
  // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#ff9b88", GradientType=1);
  background: linear-gradient(0deg, #fff, #FFF0EC 50%, #FFF0EC);
}

.root::before {
  background-color: #fff !important;
  opacity: 0.8 !important;
}
</style>

<script>
import CaseCard from '../../Cards/CaseCard'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import blogs from '~/static/api/blogs'

export default {
  components: {
    CaseCard
  },
  data() {
    return {
      visible: false,
      index: 0,
      link: link,
      loaded: false,
      item: 0,
      blogList: blogs.blogsMain,
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
