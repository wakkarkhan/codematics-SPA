<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">UNIVERSAL REMOTE CONTROL FOR ROKU DEVICES</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://play.google.com/store/apps/details?id=codematics.roku.smart.rokutvremote.tvremote">ANDROID</a>.
            </h3>
            <p>Supported ROKU TVs / Devices:</p>
            <p>TCL, Sharp, Hisense, Philips, Sanyo, Element, JVC, RCA, Hitachi, Magnavox, Westinghouse, Insignia,
              Hisense, Roku Sticks, Roku Express</p>
            <p>“Universal Remote — Roku TV / Devices” is a smart TV control app for Android users. It gives you an
              easy and amazing solution to control your Roku TV/ Devices with any Android Phone. A fully functional
              remote control for Roku devices by Codematics that gives you the ease of opening the apps installed on
              your Roku device directly from your Android Phone. For its perfect and smooth functioning, it’s important
              to connect your Phone and Roku TV/Devices with same Wi-Fi connection.</p>
            <h4 class="pt-5">Why Universal Remote — Roku TV/Devices is a top choice of users?</h4>
            <ul>
              <li>Simple and highly user-friendly interface</li>
              <li>It works perfectly for all Roku devices including Roku streaming players, Roku Ultra, and Roku Wi-Fi
                speakers.</li>
              <li>Easy navigation through arrows of up, down, right, and left.</li>
              <li>Switching of channels and easy adjustment of volume.</li>
              <li>Easy control of media like YouTube, Netflix, etc</li>
            </ul>
            <h4 class="pt-5">Remote Control for Roku devices</h4>
            <p class="mt-0"> Supports the remote control functionality of Roku Media Players, Roku Express, TCL Roku
              TVs, Sharp,
              Hisense, Philips, Sanyo, Element, JVC, RCA, Hitachi, Magnavox, Westinghouse, Insignia, Hisense, Roku
              Sticks, Roku Express</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';

p {
  margin-top: 18px;
  margin-bottom: 0px;
}

h2,
h3,
h4 {
  text-transform: capitalize !important;
}
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  head() {
    return {
      title: 'Universal Remote Control for Roku Devices | ' + brand.agency.desc
    }
  },
}
</script>
