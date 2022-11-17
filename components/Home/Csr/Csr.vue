<template>
  <div class="root">
    <u-animate-container>
      <v-container class="fixed-width">
        <v-row>
          <v-col cols="12" md="12" class="text-center">
            <h2 class="title-primary">{{ $t('csr.section_title') }}</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-column justify-space-between">
            <div class="text-right">
              <v-btn icon class="icon mt-5" outlined href="http://bloodcommunity.com/">
                <i class="ion-ios-body" />
              </v-btn>
              <a href="http://bloodcommunity.com/">
                <h3>The Blood Community</h3>
              </a>
              <p class="mt-5">Addresses the problem of Blood unavailability during emergency in Pakistan, having more than 20,000 registered donors delivering promising results by helping save thousands of lives. </p>
            </div>

            <div class="text-right">
              <v-btn icon class="icon" href="https://www.urraan.pk/">
                <i class="ion-ios-happy" />
              </v-btn>
              <a href="https://www.urraan.pk/">
                <h3>Urraan</h3>
              </a>
              <p class="mt-5">URRAAN is a project to empower individuals by providing them the right platform to learn various digital skills so that they can play a positive role in the digital economy of Pakistan.</p>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div>
              <img src="../../../static/images/csr.png">
            </div>
          </v-col>

          <v-col cols="12" md="4" class="d-flex flex-column justify-space-between">
            <div class="text-left">
              <v-btn icon class="icon" href="https://play.google.com/store/apps/details?id=codematics.islamic.muslims.prayer.autosilent">
                <i class="ion-ios-volume-down" />
              </v-btn>
              <a href="https://play.google.com/store/apps/details?id=codematics.islamic.muslims.prayer.autosilent">
                <h3>Auto Silence Prayer</h3>
              </a>
              <p class="mt-5">Prayer Time Silencer and Un-silencer is a user-friendly app used to change the ringer mode of android phones automatically. It was a must needed application for every Muslim.</p>
            </div>

            <div class="text-left">
              <v-btn icon class="icon" href="http://bloodcommunity.com/">
                <i class="ion-ios-heart" />
              </v-btn>
              <a href="#">
                <h3>Sponsorship</h3>
              </a>
              <p class="mb-0">1) UET Mardan Mini Olympics, 2017</p>
              <p class="mb-0">2) Digital Youth Summit, 2018</p>
              <p class="mb-0">3) Connected Pakistan Conference, 2017.</p>
              <p>4) Digital Youth Summit, 2017.</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import '../../Title/title-style.scss';
  .title-primary {
    margin-bottom: 9px;
    line-height: 1.2;
    color: var(--v-primary-base) !important;
  }

  .root {
    background-color: #141618;
    color: #ffffff;
    padding: 40px 0px 40px 0px;
  }

  h3 {
    font-size: 20px !important;
    text-transform: uppercase !important;
    margin-top: 27px !important;
  }

  .icon {
    background-color: transparent !important;
    font-size: 30px;
    // border: var(--v-primary-base) !important;
    padding: 30px 30px !important;
  }

  img {
    width: 390px !important;
    height: 590px !important;
  }

  a {
    text-decoration: none !important;
    color: #ffffff !important;
  }

  a:hover {
    color: var(--v-anchor-base) !important;
  }

  i {
    color: var(--v-primary-base) !important;
    border-color: #c92228 !important;
      background-color: transparent;
    // border-radius: 50%;
    // border: 1px solid var(--v-primary-base);
    // padding: 7px 9px;
  }

  i:hover {
    background-color: var(--v-primary-base) !important;
    color: #ffffff !important;
  }
</style>

<script>
export default {
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
