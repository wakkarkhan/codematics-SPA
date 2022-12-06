<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">sCAM</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://apps.apple.com/pk/app/scam-your-own-secure-camera/id1311297314">IOS</a>&nbsp;AND&nbsp;<a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=codematics.secure.camera.photos.personal.gallery">ANDROID</a>.
            </h3>
            <p>Personal camera – Secure &amp; Locked Camera / Gallery</p>
            <p>Do you feel safe when taking snaps from your mobile phone?<br>
              Do you feel comfortable with the privacy of your phone gallery?<br>
              Do you have a safe storage option for your pictures?</p>
            <p>If No, then Codematics Inc. has a solution to make you feel more secure &amp; comfortable about the
              photos &amp; videos you capture from your phone.</p>
            <p>Codematics Inc. presents you an exciting “Secure camera App” to make your pictures &amp; videos secure.
              It is an App that is absolutely perfect for the privacy of your Gallery. It is the first secure camera App
              of its kind which provides you exciting options to take selfies, capture memorable moments that you spend
              with your friends and family.</p>
            <p>Here are some features of the app:</p>
            <h4 class="pt-5">Personal camera pin code- Best security option</h4>
            <p class="mt-0">Go more safe &amp; comfortable in capturing pictures by selecting a pin code before starting
              your exciting experience with personal camera. This feature of password locked camera &amp; photo gallery
              is added to make your photos &amp; videos secure. Select a pin code &amp; block access of others to your
              personal camera.</p>
            <h4 class="pt-5">Create Folders &amp; start capturing photos</h4>
            <p class="mt-0">You can now create separate folders for your friends, family, and events with some exciting
              icons. There
              is also an
              option of default folder where your random pictures and selfies are saved. This will let you save all your
              selfies,
              pictures, and memories in different respective folders. You can later access your special day memories
              stored in
              different folders.</p>
            <h4 class="pt-5">Cloud Storage</h4>
            <p class="mt-0">Do you want your photos to be saved safely for lifetime even if you change your phone or
              uninstall the App? If yes, then you are installing the right App. Personal camera provides a backup which
              is supported by google drive. You take selfies, photos with your friends and family and directly upload
              them to yours google drive for lifetime safety and security.</p>
            <h4 class="pt-5">Share your moments on social media</h4>
            <p class="mt-0">Secure camera gives you an easy &amp; exciting way of sharing all your moments within your
              social circles. Take selfies, group photos, clicks on special occasions, and share them on all your social
              media networks like Facebook, WhatsApp, Instagram, snapchat, twitter, Viber and many more. It is so far
              the best option of sharing your pictures on social media to keep your friends updated about what you are
              up to.</p>
            <h4 class="pt-5">Want to copy/share pictures?</h4>
            <p class="mt-0">Secure camera has a secure gallery for saving your valuable photos. If you want to copy or
              share your pictures from “Personal Camera gallery” to your phone gallery you can happily &amp; easily do
              it, letting you more control of where to keep your pictures in a more secure way.</p>
            <h4 class="pt-5">Access of friends to your personal camera</h4>
            <p class="mt-0">Your friends can take pictures, selfies from your secure camera but they cannot access your
              personal gallery to view their photos. This is how you feel more secure even by letting others to use your
              phone for clicking their selfies.</p>
            <p>Install Secure camera &amp; start capturing your moments.</p>
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
      title: 'sCAM | ' + brand.agency.desc
    }
  },
}
</script>
