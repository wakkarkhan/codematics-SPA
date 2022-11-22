<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
          <h2 class="title-primary">{{ $t('caseStudies.section_title') }}</h2>
          <p class="title-para2">{{ $t('caseStudies.section_para') }}</p>
        </v-col>
      </v-row>
    </v-container>


    <PhotoSlider />
  </div>
</template>

<style lang="scss" scoped>
@import './projects-style.scss';
@import '../../Title/title-style.scss';

.v-application .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 0px;
}

.media-card {
  margin-bottom: 0px;
}

.nav {
  position: absolute;
  border: none;
  z-index: 12;
  top: 48%;
  width: 40px;
  height: 40px !important;
  border-radius: 8px;
  cursor: pointer;
}

.next {
  right: 32px;
}
</style>

<script>
import PhotoSlider from '../../About/PhotoSlider.vue'

export default {
  components: {
    PhotoSlider,
  },
  mounted() {
    this.loaded = true
  },
}
</script>
