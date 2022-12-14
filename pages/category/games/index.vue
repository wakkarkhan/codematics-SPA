<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container>
        <v-row class="mt-6">
          <v-col md="8">
            <div v-for="(item, index) in blogsCategory" :key="index" :class="{ 'mt-15': index > 1 }">
              <post-card v-if="item.category == 'Games'" :href="item.href" :img="item.bg" :title="item.title"
                :date="item.date" orientation="portrait" type="full" />
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
      blogsCategory: blogs.blogsDate,
    }
  },
  head() {
    return {
      title: 'Games | ' + brand.agency.desc
    }
  }
}
</script>
