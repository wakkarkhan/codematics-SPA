<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Smart TV’s Remote Control for Ios and Android</h2>
            <h3 class="ios-link">CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://apps.apple.com/us/app/universal-smart-tv-remote/id1492122256?ls=1">IOS</a>&nbsp;AND&nbsp;<a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=codematics.wifitv.tvremote.smarttv.remotecontrol.tv.remote.control&amp;hl=en">ANDROID</a>
            </h3>
            <p>CodeMatics Inc. is pleased to announce a very powerful and efficient Smart TV remote app for your smart
              TVs and devices.</p>
            <p>For using the app, kindly connect your mobile device and Smart TV to the same WiFi Network and you are
              ready to go.</p>
            <h4 class="pt-5">Smart TV functionalities</h4>
            <ul>
              <li>Power Control</li>
              <li>Mute / Volume Control</li>
              <li>Mouse Navigation and Easy Keyboard</li>
              <li>Input</li>
              <li>Home</li>
              <li>Apps installed on your TV</li>
              <li>Channel lists / Up / Down</li>
              <li>Play / Stop / Reverse / Fast Forward</li>
              <li>Up / Down / Left / Right Navigation</li>
            </ul>
            <p>So, Get rid of the annoying regular temper problems caused by:</p>
            <ul>
              <li>Losing your remote</li>
              <li>Batteries worn out</li>
              <li>Being LAZY sitting on a sofa, and remote control out of reach</li>
              <li>Biting and / or boiling your batteries in water hoping it would result in magically recharging them,
                and many other similar problems we face daily</li>
            </ul>
            <p>The best part about this app is that no setup is required. Just connect the mobile device and Smart TV on
              the same WiFi Network and start using
              it.</p>
            <p>CodeMatics very cordial Customer Support is here to assist you in anything you need. Our team is working
              continuously to include maximum TV brands and functionalities. The smart remote control app is being
              updated accordingly.</p>
            <p>If your TV brand is not listed or the Smart TV remote app is not working with your television, please
              drop us an email with your TV brand and remote model. We will make the app work for you. Stay
              Happy&nbsp;&nbsp;and always feel free to contact us any time. Your feedback is very important to us.</p>
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
      title: 'Smart TV’s Remote Control for iOS and Android | ' + brand.agency.desc
    }
  },
}
</script>
