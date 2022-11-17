<template>
  <div class="counter-wrap">
    <v-container class="fixed-width">
      <v-row
        justify="center"
        align="center"
      >
        <v-col md="3">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                617
              </h3>
              <p class="use-text-subtitle">
                <!-- {{ $t('agency.about_employee') }} -->
                Projects Completed
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="3">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                32000
              </h3>
              <p class="use-text-subtitle">
                <!-- {{ $t('agency.about_projects') }} -->
                Facebook Likes
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="3">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                18
              </h3>
              <p class="use-text-subtitle">
                <!-- {{ $t('agency.about_client') }} -->
                Awards Won
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="3">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                120000000
              </h3>
              <p class="use-text-subtitle">
                <!-- {{ $t('agency.about_client') }} -->
                App Users
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './counter-style.scss';
</style>
