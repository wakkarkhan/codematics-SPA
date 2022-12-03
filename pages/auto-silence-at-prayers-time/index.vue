<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Auto Silence at Prayer’s Time</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://play.google.com/store/apps/details?id=codematics.islamic.muslims.prayer.autosilent">ANDROID</a>.
            </h3>
            <p>Automatically Silences phones at prayer time in mosques and automatically Unsilences them after
              prayers.</p>
            <p>Prayer Time Silencer and Un-silencer is a user friendly app used to change the ringer mode of
              android phones automatically. It was a must needed application for every Muslim. This app is specially
              developed keeping the following two scenarios in view:</p>
            <ol class="pt-3">
              <li>First one is when the android phone users forget to turn off or silent their phones while in the
                Mosque for Salaat (Namaz) and the phone start ringing which causes disturbance in the Salaat (Namaz).
                Also it is very
                embarrassing for the users.</li>
              <li>Second scenario is when user comes out of the Mosque (Masjid) and again forget to switch-ON or
                un-silent the phone and misses out important calls or messages. By having this app on your android phone
                you will get rid of this tension. Users only have to set the time only once to silent and un-silent the
                mobile and get a sigh of relief. This app will automatically turn the mobile to silent mode at Prayer
                (Salaat) time and un-silent it when out of the Mosque (Masjid).</li>
            </ol>

            <h4 class="pt-5">How to Use</h4>
            <p class="mt-0">
              The app comes with an extremely friendly User Interface that is really easy to use. Set the “From”
              time field to silent and “To” time field to un-silent the device for each prayer and enable the
              functionality by ticking the checkbox which will be disabled by default. The device will automatically
              switch the mode from Ringer mode to Silent mode and Vice Versa at the specified times.</p>
            <p>The main features of this app are as follows:</p>
            <ol>
              <li>Auto Silences the Android device.</li>
              <li>Switches back to Ringer Mode Automatically.</li>
              <li>Ability to Enable and Disable the Silencer.</li>
              <li>Saves embarrassment while in the Mosque (Masjid).</li>
              <li>Helps avoid missing important calls.</li>
            </ol>
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
      title: 'Auto Silence at Prayer’s Time | ' + brand.agency.desc
    }
  },
}
</script>
