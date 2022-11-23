<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
          <h2 class="title-primary">{{ $t('about.section_title') }}</h2>
          <p class="title-para">{{ $t('about.section_para') }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="pt-0 py-md-6">
          <div>
            <p class="mt-0 mt-md-5">{{ $t('about.para_1') }}</p>
            <p class="mt-5">{{ $t('about.para_2') }}</p>
            <p class="mt-5">{{ $t('about.para_3') }}</p>
            <p class="mt-5">{{ $t('about.para_4') }}</p>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="px-6">
          <div>
            <ProgressBar />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style';
@import '../../Title/title-style.scss';

.root {
  background-color: #1B1D1F;
  color: #ffffff;
}
</style>

<script>
import ProgressBar from '../../About/Progress.vue'

export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
}
</script>
