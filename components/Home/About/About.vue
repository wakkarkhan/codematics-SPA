<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
            <h2 class="title-primary">{{ $t('about.section_title') }}</h2>
            <p class="special-p">{{ $t('about.section_para') }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="py-6">
          <div>
            <p>{{ $t('about.para_1') }}</p>
            <p>{{ $t('about.para_2') }}</p>
            <p>{{ $t('about.para_3') }}</p>
            <p>{{ $t('about.para_4') }}</p>
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
  @import '../../Title/title-style';

  .root {
    background-color: #141618;
    color: #ffffff;
  }

  .title-primary {
    margin-bottom: 9px;
    line-height: 1.2;
  }

  p {
    margin-bottom: 0;
    margin-top: 20px;
  }

  .special-p {
    margin-top: 9px;
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
