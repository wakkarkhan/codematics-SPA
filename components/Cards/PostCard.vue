<template>
  <v-card :class="[orientation, type]" class="post-card mx-auto" max-width="1000">
    <div class="figure">
      <v-img :src="img" class="white--text" height="200px" />
    </div>
    <div class="properties">
      <strong class="use-text-subtitle text-truncate">
        <span>
          {{ title }}
        </span>
      </strong>
      <p>
        {{ date }}
      </p>
      <!-- <v-card-text class="desc">
        <span class="text--primary">
          <span>{{ desc }}</span>
        </span>
      </v-card-text> -->
      <v-card-actions>
        <v-btn :small="orientation === 'landscape'" :href="href" target="_blank" class="action-btn" color="primary">
          {{ $t('common.btn_read_more') }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './post-news-card';

.action-btn {
  color: white !important;
}
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: false
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval
    },
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>
