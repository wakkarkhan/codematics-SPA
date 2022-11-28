<template>
  <v-card :class="[orientation, type]" class="media-card">
    <a v-if="type === 'photo'" v-ripple class="hidden-link">
      &nbsp;
    </a>

    <figure>
      <img :src="thumb" alt="cover" />

      <div class="overlay d-inline-flex flex-column justify-center">
        <div class="body">
          <h6 class="title pb-2 text-truncate">{{ title }}</h6>
          <p class="use-text-paragraph">{{ desc }}</p>
          <a icon class="icon" :href=href>
            <i class="ion-logo-linkedin" />
          </a>
        </div>
      </div>
    </figure>
  </v-card>
</template>

<style scoped lang="scss">
@import './media-card-team';
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
    desc: {
      type: String,
      required: true
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
