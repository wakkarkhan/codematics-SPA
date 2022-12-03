<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="pb-5">Kardaan: Handyman Services at Your Door Step</h2>
            <h3>CLICK TO DOWNLOAD FOR&nbsp;<a target="_blank" href="https://apple.co/2jW6ns8">IOS</a>&nbsp;AND&nbsp;<a
                target="_blank" href="https://bit.ly/2lDahGL">ANDROID</a>.</h3>
            <p>Kardaan is an online platform that connects professional Handy Workers with Users who need specific
              services for
              their homes and offices</p>
            <p>Kardaan is a digital platform through which you can connect directly with skilled technicians for any
              related jobs
              that you may need. If you need an electrician, plumber, painter, carpenter, Gardner, or feeling the need
              of a car
              wash service? All services are now one click away. Locate nearby Kardaans and get your work done by
              Professional
              Skilled Workers.</p>
            <h4 class="pt-5">Why Kardaan?</h4>
            <ul>
              <li>Taking Kardaan (skilled workers) to respectable &amp; smart earning</li>
              <li>Tech based platform to connect nearby Kardaan (skilled workers) &amp; customers</li>
              <li>A wide range of services offered</li>
            </ul>

            <h4 class="pt-5">What Service Does Kardaan Offer?</h4>
            <ul>
              <li>Electricians</li>
              <li>HVAC Services</li>
              <li>Plumbers</li>
              <li>Carpenters</li>
              <li>Painters</li>
              <li>Aluminum and Glass works</li>
              <li>Gardner’s</li>
              <li>Chefs</li>
              <li>Car Wash</li>
              <li>Event helpers</li>
            </ul>

            <h4 class="pt-5">Salient Features</h4>
            <h5 class="pt-3">Fix Pricing</h5>
            <p class="mt-0">
              Fair and fix market prices save your time instead of conventional bargaining. This means you get quality
              work done
              in a fair price and you don’t get ripped off on something you know little to nothing about.</p>

            <h5 class="pt-3">Quality Assurance</h5>
            <p class="mt-0">
              Our Apps are embedded with user ratings that ensure quality work by our Kardaans. The work done is
              rechecked by our
              own qualified technicians’ team physically on site in case of any complaints by our customers and proper
              action is
              taken accordingly.</p>

            <h5 class="pt-3">Safety</h5>
            <p class="mt-0">
              Our workers are thoroughly vetted and registered on the basis of their CNIC. This allows for a safer
              experience and
              trust between our Kardaans and customers.</p>

            <h5 class="pt-3">Convenience</h5>
            <p class="mt-0">
              We are saving your time of going to the market, finding a skilled technician, negotiating with them and
              getting the
              job done. We have simplified the complete process of finding a skilled worker, and getting your job done
              conveniently.</p>

            <p>Always feel free to contact us any time for any information you need or any suggestions. We will be
              happy to assist
              you.</p>
            <p>Use Kardaan’s services, forget about your home maintenance issues and Always Stay Happy.</p>
            <p>Currently we are providing Electric, Plumbing, HVAC, Paint, Gardening and Carpenter services in
              Islamabad and
              Rawalpindi.</p>
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
      title: 'Kardaan | ' + brand.agency.desc
    }
  },
}
</script>
