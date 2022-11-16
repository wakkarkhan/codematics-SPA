<template>
  <fragment>
    <div class="root">
      <TeamSlider/>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './expertise-style.scss';
@import '../../Title/title-style.scss';
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
