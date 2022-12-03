<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Flash on Call and SMS</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://play.google.com/store/apps/details?id=fexheli.flashoncall.flashonsms">ANDROID</a>.</h3>
            <p>The No.1 Flash Alert App on Google Play.</p>

            <h4 class="pt-5">About Permissions on devices using Android 6 or later</h4>
            <p class="mt-0">As per Google Play policy, permission to access camera as well as Call and SMS state will be
              asked when
              a user with
              Android version 6 (Marshmallow) or greater (Nougat) starts the app for the first time.<br>
            </p>
            <h4 class="pt-5">The permissions are used for the following purposes</h4>
            <ul>
              <li><b>Camera:</b> to access the flash light.</li>
              <li><b>Call:</b> to let the app know when there is a Call on the user’s device so that the flash light can
                be
                turned ON.</li>
              <li><b>SMS:</b> to let the app know when an SMS arrives so that the flash can be turned ON.</li>
            </ul>
            <p>Customer support now available.
              Always feel free to contact us any time. Your feedback about the new design will be appreciated.</p>
            <p>Flash On Call is a smart and Top Rated application available on the Google Play Store. This app gives
              flash alerts
              on incoming calls and SMS with the blink of your flash light.</p>
            <p>Flash On Call application will use your device camera flash to start blinking when you are receiving a
              call or an
              SMS. It is a very useful application for those users who are mostly busy in meetings or work in places
              where they
              have to keep their mobile phones silent such as hospitals etc. Flash on Call will make your life easier
              by letting
              you know about every call and SMS, that if your mobile device is mostly silent you are bound to miss.
            </p>
            <p>This app is user friendly and really easy to use. Flash on Call has a variety of options included in
              it. Blink
              interval and Flash blink count on incoming call and SMS can be controlled within this App. You can
              enable or disable
              the Flash on call Application in various Ringer Modes.</p>
            <h4 class="pt-5">How To Use</h4>
            <ul>
              <li>Flash On Call application is very flexible in a way that you can enable / disable it completely for
                both call and
                SMS, or you can just select to use the flash functionality for either call or SMS.</li>
              <li>Blinking frequency can be changed according to your own liking</li>
            </ul>
            <h4 class="pt-5">Available Functions</h4>
            <ol>
              <li>Flash On Incoming Calls</li>
              <li>Flash On Incoming SMS</li>
              <li>Blink Intervals adjustment</li>
              <li>Flash timings adjustment</li>
              <li>Control Amount of flashes when receiving SMS</li>
              <li>Use app in different modes (Normal, Vibration, Silent)</li>
            </ol>
            <h4 class="pt-5">Application Usage</h4>
            <ul>
              <li>In Slient Mode</li>
              <li>In Normal Mode</li>
              <li>In Vibrate Mode</li>
              <li>In Meetings</li>
              <li>In Hospitals</li>
            </ul>
            <p>We value user suggestions.
              Use this application and let us know about any improvements through feedback. Always feel feel to
              contact us any
              time.</p>
            <p>Stay Happy &#128516;</p>
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
      title: 'Flash on Call and SMS | ' + brand.agency.desc
    }
  },
}
</script>
