<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">sCAM - Your Own Secure Camera</h4>
              <span class="caption">May 26, 2018 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[11]" alt="blog" />
              </figure>

              <h3>Click to download for <a target="_blank"
                  href="https://apps.apple.com/pk/app/scam-your-own-secure-camera/id1311297314">iOS</a> and
                <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.secure.camera.photos.personal.gallery">Android</a>
              </h3>
              <p>Secure Camera (sCAM) is an app that is absolutely perfect for the privacy of your Gallery. The
                first secure
                camera App by <a href="../#home">Codematics</a> of its kind which provides you
                perfect photo
                privacy and a secure gallery for the pictures you take from the phone. It makes you feel secure &amp;
                comfortable
                about the photos you capture from your phone through it’s locked Gallery and cloud storage.</p>
              <h3>Features of sCAM – A Quick Look</h3>
              <p>Let’s have a quick look at some exciting features that sCAM offers:</p>
              <strong>Secure Camera Pin Code – Best Security Option</strong>
              <p>Go more safe comfortable in capturing pictures by selecting a pin code before starting your
                exciting experience
                with the Secure camera. This feature of password locked camera photo gallery is added to make your
                photos videos
                secure. Select a pin code &amp; block access of others to your secure camera.</p>
              <strong>Create Folders &amp; Start Capturing Snaps with Secure Camera</strong>
              <p>You can now create separate folders for your friends, family and events with some exciting icons.
                There is also
                an option of default folder where your random pictures and selfies are saved. This will let you save
                all your
                selfies, pictures, and memories in different respective folders. You can later access your special day
                memories
                stored in different folders.</p>
              <strong>Cloud Storag</strong>
              <p>Do you want your photos to be saved safely for a lifetime even if you change your phone or
                uninstall the App
                ??? If Yes, then you are installing the right App. The secure camera provides a backup which is
                supported by
                google drive. You take selfies, photos with your friends and family and directly upload them to yours
                google drive
                for lifetime safety and security.</p>
              <strong>Sharing Moments on Social Media</strong>
              <p>The secure camera gives you an easy &amp; exciting way of sharing all your moments within your
                social circles.
                Take selfies, group photos, clicks on special occasions, and share them on all your social media
                networks like
                Facebook, WhatsApp, Instagram, Snapchat, Twitter, Viber and much more. It is so far the best option of
                sharing
                your pictures on social media to keep your friends updated about what you are up to.</p>
              <strong>Transferring Pictures from sCAM Gallery to Phone Gallery</strong>
              <p>The personal camera has a secure gallery for saving your valuable photos. If you want to copy or
                share your
                pictures from “Secure Camera Gallery” to your phone gallery you can happily &amp; easily do it,
                letting you more
                control of where to keep your pictures in a more secure way.</p>
              <strong>Access of Friends to Your Secure Camera</strong>
              <p>Your friends can take pictures, selfies from your personal camera but they cannot access your
                personal gallery
                to view their photos. This is how you feel more secure even by letting others use your phone for
                clicking their
                selfies.</p>
              <p>Install personal camera &amp; start capturing your moments. Start Experiencing It.</p>
              <strong>Customer Support</strong>
              <p>
                In case of any kind of issues or if you are facing any kind of problems. Please feel free to contact
                us at
                anytime. Our customer support team is highly active and vigilant and they will respond to you within
                no time.
              </p>
            </article>
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '../../../components/Blog/blog-style.scss';
@import '~/assets/pages';

h3 {
  padding-bottom: 15px !important;
}
</style>

<script>
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import BlogHeader from '~/components/Header/NavScroll'
import Sidebar from '~/components/Blog/Sidebar'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': BlogHeader,
    'main-footer': Footer,
    Sidebar,
  },
  head() {
    return {
      title: 'sCAM - Your Own Secure Camera | ' + brand.agency.desc
    }
  },
  data() {
    return {
      imgAPI: imgAPI,
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
