<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Universal TV Remote Control</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://play.google.com/store/apps/details?id=codematics.universal.tv.remote.control">ANDROID</a>.
            </h3>
            <p>The No.1 Universal TV Remote Control App in more than 100 countries. Set Top Boxes are being included now
            </p>
            <p>The top universal TV remote control app that has been downloaded and used by more than 100 million
              users throughout
              the world. The simplicity which this app offers its users has been acknowledged and appreciated widely
              by our users.
            </p>
            <p>So, Get rid of the annoying regular temper problems caused by:</p>
            <ul>
              <li>Losing your remote</li>
              <li>Batteries worn out</li>
              <li>Being LAZY sitting on a sofa, and remote control out of reach</li>
              <li>Biting and / or boiling your batteries in water hoping it would result in magically recharging them,
                and many other similar problems we face daily</li>
            </ul>
            <p>Just right before one of your favourite TV seasons or show is about to start, OR your favourite sports
              game is
              about to start, OR you want to watch news and your TV remote control is not within your reach.</p>
            <p>The best part about this app is that no setup is required. Just select your TV brand and start using it.
            </p>
            <h4 class="pt-5">Very Useful</h4>
            <p class="mt-0">It is always good and easy to use a single remote control device to control all you
              electronic
              equipment. As mobile
              phone has become a major gadget that people always carry with them, so having an application installed
              on your
              mobile device that works as a TV remote control will make your life easier. This free, powerful and
              efficient
              application will make your life easy.</p>
            <h4 class="pt-5">Very easy to Contact Us</h4>
            <p class="mt-0">
              Our very cordial Customer Support is here to assist you in anything you need. Our team is working
              continuously to
              include maximum TV brands and the remote control app is being updated accordingly.</p>
            <p>If your brand is not listed or the TV remote application is not working with your television, please
              drop us an
              email with your TV brand and remote model and we will work to make this application compatible with
              your TV
              brand.</p>
            <h4 class="pt-5">Features</h4>
            <ul>
              <li>Power ON / OFF Control</li>
              <li>AV / TV</li>
              <li>Mute / Un-Mute</li>
              <li>Channel Digits buttons</li>
              <li>Channel index and lists</li>
              <li>Volume Up / Down Control</li>
              <li>Channel Up / Down Control</li>
              <li>Menu Button with up / down and left / right Controls</li>
              <li>Red / Green / Blue / Yellow (Multiple purpose soft keys)</li>
            </ul>
            <h4 class="pt-5">Note</h4>
            <ul>
              <li>Phone or Tablet with built in IR blaster is required.</li>
              <li>This app is compatible with the TV brands / models currently available in the app. This is an
                unofficial TV remote application for these Television brands.</li>
              <li>Email us the Model of your TV and we will try our best to make it available as soon as we possibly
                can. Your patience and positive feedback will be highly appreciated.</li>
            </ul>
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
      title: 'Universal TV Remote Control | ' + brand.agency.desc
    }
  },
}
</script>
