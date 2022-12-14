<template>
  <paper :title="$t('common.blog_post')" icon="mdi-bookmark-outline">
    <div>
      <v-list subheader two-line>
        <v-list-item v-for="(item, index) in blogsDate.slice(0, 3)" :key="index">
          <v-list-item-content>
            <a :href="item.href">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </a>
            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </paper>
</template>

<style>
a {
  text-decoration: none !important;
  color: #000000DE !important;
}

a:hover {
  color: var(--v-anchor-base) !important;
}
</style>
<script>
import Paper from '../../Paper'
import blogs from '~/static/api/blogs'

export default {
  components: {
    Paper
  },
  data() {
    return {
      blogsDate: blogs.blogsDate,
    }
  }
}
</script>
