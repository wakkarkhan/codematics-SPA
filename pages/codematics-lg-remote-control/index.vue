<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Codematics LG Remote Control</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://apps.apple.com/us/app/remote-for-lg-tv-lg-tv-remote/id1455958167">IOS</a>&nbsp;AND&nbsp;<a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=codematics.lgtv.lgsmarttv.lgtvremote.wifitvremote.tvremote">ANDROID</a>.
            </h3>
            <p>The Best Universal Remote Control App for LG electronic devices.</p>
            <p>It is always good and easy to use a single Universal remote control device to control all your
              electronic
              equipment. As mobile phone has become a major gadget that people always carry with them, so having an
              application
              installed on your mobile device that works as a remote control will make your life easier. This free,
              powerful and
              efficient universal remote control app developed by CodeMatics Inc. for LG devices will make your life
              easy.</p>
            <p>All LG smart TVs operating on webOS operating system can be easily controlled using Codematics LG TV
              remote control
              app. It is the simplest and most efficient smart TV remote control currently available in the Play
              Store. The only
              requirement is that user’s mobile device as well as the LG smart TV must be connected to the same WiFi
              network for
              the app to discover the TV and connect with it. Once connected with the TV, the following LG smart TV
              functionalities can be controlled through this remote app.</p>
            <h4 class="pt-5">Casting / Streaming</h4>
            <ul>
              <li>Power On / Off Control</li>
              <li>Mute / Volume Control</li>
              <li>Smart Sharing / Casting: View your Pictures and Videos, and listen to music on your TV</li>
              <li>Mouse Navigation and Easy Keyboard</li>
              <li>Input</li>
              <li>Home</li>
              <li>Apps installed on your TV</li>
              <li>Channel lists / Up / Down</li>
              <li>Play / Stop / Reverse / Fast Forward</li>
              <li>Up / Down / Left / Right Navigation</li>
            </ul>
            <p>If you have a traditional non-smart TV, you can control it by using the IR TV Remote control option.
              The following LG TV remote control functionalities are available.</p>
            <h4 class="pt-5">Features of Traditional IR Remote Control</h4>
            <ul>
              <li>Power On / Off Control</li>
              <li>AV / TV</li>
              <li>Mute / Un-Mute</li>
              <li>Channel Digits buttons</li>
              <li>Channel index and lists</li>
              <li>Volume Up/Down Control</li>
              <li>Channel Up/Down Control</li>
              <li>Menu Button with up / down and left / right Controls</li>
              <li>Red / Green / Blue / Yellow (Multiple purpose soft keys)</li>
              <li>Up / Down / Left / Right Navigation</li>
            </ul>
            <h4 class="pt-5">Other remote controls for LG devices</h4>
            <ul>
              <li>Remote for LG Air Conditioners (ACs)</li>
              <li>Remote for LG Home Theatre</li>
              <li>Remote for LG Set Top Box</li>
              <li>Remote for LG TV / DVD Combo</li>
              <li>Remote for LG Blue Ray</li>
              <li>Remote for LG Media Player</li>
              <li>Remote for LG Projector</li>
              <li>Remote for LG DVD</li>
              <li>Remote for LG iPod</li>
              <li>Remote for LG AV System</li>
              <li>Remote for LG Sound System</li>
            </ul>
            <p>So, Get rid of the annoying regular temper problems caused by:</p>
            <ul>
              <li>Losing your remote</li>
              <li>Batteries worn out</li>
              <li>Being LAZY sitting on a sofa, and remote control out of reach</li>
              <li>Biting and / or boiling your batteries in water hoping it would result in magically recharging them,
                and many other similar problems we face daily</li>
            </ul>
            <p>The best part about this app is that no setup is required. Just select your LG Device and start using
              it.
              CodeMatics very cordial Customer Support is here to assist you in anything you need.
            </p>
            <h4 class="pt-5">Note</h4>
            <ul>
              <li>Except for LG Smart TVs, all the other devices listed above requires a built-in infrared (IR)
                blaster
                in user’s mobile device to function as a remote control. The IR blaster is required to send signals
                from
                a user’s mobile to the device that user needs to control allowing the app to function as a normal
                remote
                control
              </li>
              <li>For smartTV devices, both the smartTV device and user’s mobile device must be connected to the same
                network.</li>
              <li>This is an unofficial TV remote application for these LG electronic devices.</li>
              <li>Email us if you need any assistance. Your positive feedback will be highly appreciated.</li>
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
      title: 'Codematics LG Remote Control | ' + brand.agency.desc
    }
  },
}
</script>
