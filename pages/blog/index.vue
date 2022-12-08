<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container>
        <v-row>
          <v-col cols="12">
            <headline />
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col md="6" cols="12" class="px-3" v-for="(item, index) in blogsSmall" :key="index">
            <post-card :href="item.href" :img="item.bg" :title="item.title" :date="item.date" orientation="landscape"
              type="round" />
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col md="8">
            <div v-for="(item, index) in blogsMedium" :key="index" :class="{ 'mt-15': index > 0 }">
              <post-card :href="item.href" :img="item.bg" :title="item.title" :date="item.date" orientation="portrait"
                type="full" />
            </div>

            <div class="arrow">
              <v-row justify="space-between" class="mt-5">
                <v-btn text>
                  <v-icon>mdi-arrow-left</v-icon>
                  {{ $t('common.btn_prev') }}
                </v-btn>
                <v-btn text>
                  {{ $t('common.btn_next') }}
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-row>
            </div>
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
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
</style>

<script>
import brand from '~/static/text/brand'
import BlogHeader from '~/components/Header/NavScroll'
import Headline from '~/components/Blog/Headline'
import PostCard from '~/components/Cards/PostCard'
import Sidebar from '~/components/Blog/Sidebar'
import Footer from '~/components/Footer'
import imgAPI from '~/static/images/imgAPI'
import blogs from '~/static/api/blogs'

export default {
  components: {
    'main-header': BlogHeader,
    'main-footer': Footer,
    Headline,
    Sidebar,
    PostCard
  },
  data() {
    return {
      imgAPI: imgAPI,
      blogsMedium: blogs.blogsMedium,
      blogsSmall: blogs.blogsSmall,
    }
  },
  head() {
    return {
      title: 'Blog Home | ' + brand.agency.desc
    }
  }
}
</script>
