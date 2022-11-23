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
          <v-col cols="12" md="4" class="d-flex flex-column justify-space-between py-md-10">
            <div class="text-center text-md-right">
              <div class="d-flex justify-center justify-md-end">
                <a class="icon-wrapper" href="http://bloodcommunity.com/">
                  <i class="ion-ios-body"></i>
                </a>
              </div>

              <a href="http://bloodcommunity.com/">
                <h3>The Blood Community</h3>
              </a>
              <p class="mt-5">Addresses the problem of Blood unavailability during emergency in Pakistan, having more
                than 20,000 registered donors delivering promising results by helping save thousands of lives. </p>
            </div>

            <div class="text-center text-md-right">
              <div class="d-flex justify-center justify-md-end">
                <a class="icon-wrapper" href="https://www.urraan.pk/">
                  <i class="ion-ios-happy"></i>
                </a>
              </div>

              <a href="https://www.urraan.pk/">
                <h3>Urraan</h3>
              </a>
              <p class="mt-5">URRAAN is a project to empower individuals by providing them the right platform to learn
                various digital skills so that they can play a positive role in the digital economy of Pakistan.</p>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="d-none d-md-flex flex-column justify-center">
            <div>
              <img src="../../../static/images/csr.png">
            </div>
          </v-col>

          <v-col cols="12" md="4" class="d-flex flex-column justify-space-between py-md-10">
            <div class="text-center text-md-left">
              <div class="d-flex justify-center justify-md-start">
                <a class="icon-wrapper"
                  href="https://play.google.com/store/apps/details?id=codematics.islamic.muslims.prayer.autosilent">
                  <i class="ion-ios-volume-down"></i>
                </a>
              </div>

              <a href="https://play.google.com/store/apps/details?id=codematics.islamic.muslims.prayer.autosilent">
                <h3>Auto Silence Prayer</h3>
              </a>
              <p class="mt-5">Prayer Time Silencer and Un-silencer is a user-friendly app used to change the ringer mode
                of android phones automatically. It was a must needed application for every Muslim.</p>
            </div>

            <div class="text-center text-md-left">
              <div class="d-flex justify-center justify-md-start">
                <a class="icon-wrapper" href="#">
                  <i class="ion-ios-heart"></i>
                </a>
              </div>

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
@import './csr-style.scss';
@import '../../Title/title-style.scss';

.root {
  background-color: #141618;
  color: #ffffff;
}

.title-primary {
  color: #ffffff !important;
}

h3 {
  font-size: 20px !important;
  text-transform: uppercase !important;
  margin-top: 27px !important;
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

.icon-flex,
.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-wrapper {
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ffffff;
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
}

.icon-wrapper:hover {
  color: var(--v-primary-base) !important;
  border: 1px solid var(--v-primary-base);
}

.icon-wrapper i {
  color: #ffffff !important;
}

.icon-wrapper:hover i {
  color: var(--v-primary-base) !important;
}

@media (min-width: 960px) and (max-width: 1280px) {
  img {
    width: 284px !important;
    height: 407px !important;
  }
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
