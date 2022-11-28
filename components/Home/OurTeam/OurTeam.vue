<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="title-primary">{{ $t('team.section_title') }}</h2>
            <p class="title-para2">{{ $t('team.section_para') }}</p>
          </v-col>
        </v-row>
      </v-container>

      <PhotoSliderTeam />
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import './our-team-style.scss';
@import '../../Title/title-style.scss';

.root {
  background: var(--v-primary-lighten5) !important;
}

.theme--light .deco:before {
  box-shadow: -30px 20px 0px 0px #ffa99e !important;
}
</style>

<script>
import TitleDeco from '../../Title/WithDecoration'
import PhotoSliderTeam from '../../About/PhotoSliderTeam.vue'

export default {
  components: {
    TitleDeco,
    PhotoSliderTeam,
  },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
