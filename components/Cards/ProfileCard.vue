<template>
  <v-card :class="[orientation, type]" class="profile-card">
    <div class="figure">
      <v-img
        :src="cover"
        height="200px"
      />
    </div>
    <v-avatar
      :size="orientation === 'portrait' ? 92 : '60'"
      class="avatar"
    >
      <img
        :src="avatar"
        alt="avatar"
      >
    </v-avatar>
    <div class="properties text-truncate">
      <div>
        <strong class="title">
          <span>
            {{ name }}
          </span>
        </strong>
        <v-card-subtitle class="subtitle pa-0">
          {{ title }}
        </v-card-subtitle>
        <v-btn
          v-if="orientation === 'portrait'"
          :href="href"
          outlined
          class="main-btn"
          color="primary"
        >
          See Profile
        </v-btn>
      </div>
      <div class="action-area">
        <v-btn
          v-if="orientation === 'landscape'"
          :href="href"
          outlined
          class="main-btn"
          color="primary"
        >
          See Profile
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './profile-card';
</style>

<script>
import avatarDefault from '~/static/images/avatars/pp_boy4.svg'

export default {
  props: {
    cover: {
      type: String,
      required: false
    },
    avatar: {
      type: String,
      default: avatarDefault
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    connection: {
      type: Number,
      default: 0
    },
    favorites: {
      type: Number,
      default: 0
    },
    albums: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>
