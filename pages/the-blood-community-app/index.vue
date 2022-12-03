<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">The Blood Community App</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank"
                href="https://apps.apple.com/us/app/blood-community/id1235599120">IOS</a>
              &nbsp;AND&nbsp;
              <a target="_blank"
                href="https://play.google.com/store/apps/details?id=codematcis.blood.donor.bloodrequest.community">ANDROID</a>.
            </h3>
            <p>How many times have you faced the issue of arrangement of Blood while in Hospital?</p>

            <p>CodeMatics Inc. realising this very important problem of our daily routine life presents The Blood
              Community app — The first app of its kind through which it will be easy for your arrange blood in no
              time. This app contains information about people of all blood groups within your city throughout the
              world. You will be able to contact users through SMS or Call them when you are in need of blood.</p>
            <p>
              Blood is the essence of life. To give selflessly can make you feel more connected to your community and
              to the people around you. It’s a fulfilling, powerful and enriching experience to know that your donation
              could save lives.</p>
            <p>
              Unfortunately according to some estimates, fewer than 5% of people who are eligible to donate blood
              actually do. The Blood Community app will make it very easy for you to donate Blood to someone who needs
              it or request Blood when needed.</p>
            <p>
              By donating blood, you can help families who have been in accidents or have experienced trauma, mothers
              experiencing labor complications, patients having heart surgery, children undergoing chemotherapy
              treatments, premature babies trying to breathe with tiny lungs, or grandparents suffering from severe
              anaemia. Imagine the lives that could be touched by your gift. It’s a quick, simple and amazing way to
              give back to the community.</p>
            <h4 class="pt-5">How To Use</h4>
            <ol>
              <li>Enter your phone number and authenticate when you receive the registration code through SMS.</li>
              <li>Fill out the form.</li>
              <li>You will be registered and you can now easily find Blood Donors as well as find people in need of
                blood if you areinterested to donate.</li>
            </ol>
            <p>Always feel free to contact us any time for any information you need or any suggestions. Our very
              cordial
              support team will assist you.</p>
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
      title: 'Blood Community | ' + brand.agency.desc
    }
  },
}
</script>
