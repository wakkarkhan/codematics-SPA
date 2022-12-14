

<template>
  <paper :title="$t('common.blog_categories')" icon="mdi-shape-outline">
    <div>
      <v-list subheader two-line>
        <v-list-item v-for="(item, index) in categories" :key="index">
          <v-list-item-content>
            <a :href="item.href" target="_blank">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </paper>
</template>

<style scoped lang="scss">
@import '../blog-style.scss';
</style>

<script>
import Paper from '../../Paper'

export default {
  components: {
    Paper
  },
  data() {
    return {
      categories: [
        {
          title: 'Games',
          href: '/category/games'
        },
        {
          title: 'Social',
          href: '/category/social'
        },
        {
          title: 'Smartphones',
          href: '/category/smartphones'
        },
        {
          title: 'Cyber Security',
          href: '/category/cyber-security'
        },
        {
          title: 'Mobile Apps',
          href: '/category/mobile-apps'
        },
      ]
    }
  }
}
</script>
