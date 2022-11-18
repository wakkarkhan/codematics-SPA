<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <v-row>
          <v-col cols="12" md="12" >
              <h2 class="title-primary">{{ $t('team.section_title') }}</h2>
              <p class="special-p">{{ $t('team.section_para') }}</p>
          </v-col>
        </v-row>
      </v-container>

      <TeamSlider/>
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import './our-team-style.scss';
@import '../../Title/title-style.scss';
  .title-primary {
    margin-bottom: 9px;
    line-height: 1.2;
    color: var(--v-primary-base) !important;
  }

  .root {
    background: #ffffff !important;
  }

  .root::before {
    background: #ffffff !important;
    opacity: 0.8 !important;
  }

  .special-p {
    color: #777777;
  }
</style>

<script>
import TitleDeco from '../../Title/WithDecoration'
import TeamSlider from '../../About/TeamSlider.vue'

export default {
  components: {
    TitleDeco,
    TeamSlider
  },
  data() {
    return {
      loaded: false
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
