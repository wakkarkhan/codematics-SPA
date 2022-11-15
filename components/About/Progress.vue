<template>
  <div v-if="loaded">
    <div id="progress" v-scroll="handleScroll" class="progress-wrap">
      <ul>
        <li>
          <div class="text-icon">
            <h4 class="use-text-subtitle2 text-uppercase"> {{ $t('about.skill_1') }}</h4>
          </div>
          <v-progress-linear
            :height="4"
            :value="play ? 90 : 0"
            color="primary"
            class="progress"
          />
        </li>
        <li>
          <div class="text-icon">
            <h4 class="use-text-subtitle2 text-uppercase"> {{ $t('about.skill_2') }}</h4>
          </div>
          <v-progress-linear
            :height="4"
            :value="play ? 95 : 0"
            color="primary"                  
            class="progress"
          />
        </li>
        <li>
          <div class="text-icon">
            <h4 class="use-text-subtitle2 text-uppercase"> {{ $t('about.skill_3') }}</h4>
          </div>
          <v-progress-linear
            :height="4"
            :value="play ? 85 : 0"
            color="primary"    
            class="progress"
          />
        </li>
        <li>
          <div class="text-icon">
            <h4 class="use-text-subtitle2 text-uppercase"> {{ $t('about.skill_4') }}</h4>
          </div>
          <v-progress-linear
            :height="4"
            :value="play ? 90 : 0"
            color="primary"
            class="progress"
          />
        </li>
        <li>
          <div class="text-icon">
            <h4 class="use-text-subtitle2 text-uppercase"> {{ $t('about.skill_5') }}</h4>
          </div>
          <v-progress-linear
            :height="4"
            :value="play ? 80 : 0"
            color="primary"
            class="progress"
          />
        </li>
        <li>
          <div class="text-icon">
            <h4 class="use-text-subtitle2 text-uppercase"> {{ $t('about.skill_6') }}</h4>
          </div>
          <v-progress-linear
            :height="4"
            :value="play ? 90 : 0"
            color="primary"    
            class="progress"
          />
        </li>
        <li>
          <div class="text-icon">
            <h4 class="use-text-subtitle2 text-uppercase"> {{ $t('about.skill_7') }}</h4>
          </div>
          <v-progress-linear
            :height="4"
            :value="play ? 80 : 0"
            color="primary"    
            class="progress"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './about-style.scss';
  
  li {
    margin-bottom: 30px !important;
  }
</style>

<script>
export default {
  data() {
    return {
      play: false,
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function() {
      const top = this.offsetTop - window.innerHeight + 400
      if (window.scrollY > top) {
        return (this.play = true)
      }
      return false
    }
  },
  computed: {
    offsetTop: function() {
      const elm = document.getElementById('progress')
      return elm.getBoundingClientRect().y
    }
  }
}
</script>