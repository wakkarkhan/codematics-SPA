<template>
  <v-card :class="[orientation, type]" class="media-card">
    <a v-if="type === 'photo'" v-ripple class="cover-link" target="_blank">
      &nbsp;
    </a>

    <figure>
      <img :src="thumb" alt="cover" />
    </figure>

    <div class="property">
      <v-card-title class="media-title">
        {{ title }}
      </v-card-title>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './media-card';
</style>

<script>
export default {
  props: {
    thumb: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: ''
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    duration: {
      type: String,
      default: '00:01'
    },
    type: {
      type: String,
      default: 'video' // available props: photo, video
    }
  }
}
</script>
